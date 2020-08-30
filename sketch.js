// Imports & constants
global.THREE = require("three");
const canvasSketch = require("canvas-sketch");
// Controls
require("three/examples/js/controls/OrbitControls");
// Effects
// require("three/examples/js/effects/AsciiEffect.js");
// Custom setup
const lighting = require("./lighting.js");
const blobify = require("./blobify.js");
// Project resources
import {celestialBodies} from "./celestialBodies.js";
const density = require("./density.js");


const settings = {
  animate: true,
  context: "webgl",
  scaleToView: true
};

var SCREEN_WIDTH = window.innerWidth;
var SCREEN_HEIGHT = window.innerHeight;

const sketch = ({ context }) => {

  // Gradient foreground
  // const fill = context.createLinearGradient(0, 0, SCREEN_WIDTH, SCREEN_HEIGHT);
  // fill.addColorStop(0, 'cyan');
  // fill.addColorStop(1, 'orange');

  // Fill rectangle
  // context.fillStyle = fill;

  document.body.style.background = "linear-gradient(135deg, #ffd2c1, #f9d0d3)";


  // Renderer
  // -------------------------------------------------------
  const renderer = new THREE.WebGLRenderer({
    canvas: context.canvas,
    alpha: true,
  });


  // Geometry helpers
  // -------------------------------------------------------
  // scene.add(new THREE.PointLightHelper(light, 1));
  // scene.add(new THREE.GridHelper(50, 50));

  // Effects
  // -------------------------------------------------------
  // None

  // Camera
  // -------------------------------------------------------
  const camera = new THREE.PerspectiveCamera(50, SCREEN_WIDTH / SCREEN_HEIGHT, 1, 1000);
  camera.position.set(-20, 100, 100);

  // Orbit Control
  // -------------------------------------------------------
  const controls = new THREE.OrbitControls(camera, context.canvas);
  controls.target.set(30, 0, 0);
  
  // Scene
  // -------------------------------------------------------
  const scene = new THREE.Scene();

  // Textures
  // -------------------------------------------------------
  const loader = new THREE.TextureLoader();
  const sunTexture = loader.load(celestialBodies.sun.texture);

  // Materials
  // -------------------------------------------------------
  const sunMaterial = new THREE.MeshStandardMaterial({
    map: sunTexture
  });
  const bubbleMaterial = new THREE.MeshStandardMaterial({
    emissive: 0xbd4be3,
    emissiveIntensity: 0.5,
    roughness: 0.61,
    metalness: 0.21,
    side: THREE.FrontSide,
    //wireframe: true
  });

  // Meshes
  // -------------------------------------------------------
  const geometry = new THREE.SphereGeometry(1, 40, 40);

  // add the sun
  const sunMesh = new THREE.Mesh(geometry, bubbleMaterial);
  sunMesh.position.set(0, 0, 0);
  sunMesh.scale.setScalar(10);
  scene.add(sunMesh);

  // Greate all density spaces
  density.getSpaces().then(data => {
    const allSpaces = data;
    console.log(allSpaces)
  });
  // console.log(density.getAnalytics(allSpaces[0].id));


  // create planets
  function createPlanet(scene, mesh, group, x, scale) {
    mesh.position.set(x, 0, 0);
    mesh.scale.setScalar(scale);
    mesh.castShadow = true;
    mesh.receiveShadow = false;
    group.add(mesh);
    scene.add(group);
  }

  const planets = Object.fromEntries(
    Object.entries(celestialBodies.planets).map(([key, value]) => {
      // const texture = loader.load(value.texture);
      // const material = new THREE.MeshStandardMaterial({ map: texture });
      const group = new THREE.Group();
      const mesh = new THREE.Mesh(geometry, bubbleMaterial);
      createPlanet(scene, mesh, group, value.x_position, value.scale);  

      return [key, {...value, group, mesh}];
    })
  );

  lighting.createLights(scene);
  
  return {
    render({ time }) {

      for (var planet in planets) {
        planets[planet].group.rotation.y = time * planets[planet].solar_rotation;
        planets[planet].mesh.rotation.y = time * planets[planet].planet_rotation;
        blobify.light(planets[planet].mesh, 1, time);
      }
      
      controls.update();
      renderer.render(scene, camera);
    },

    unload() {
      controls.dispose();
      renderer.dispose();
    }
  };
};

canvasSketch(sketch, settings);