// Imports & constants
global.THREE = require("three");
require("three/examples/js/controls/OrbitControls");
const canvasSketch = require("canvas-sketch");
import {celestialBodies} from "./celestialBodies.js";
import {getSpaces} from "./density.js";


const settings = {
  animate: true,
  context: "webgl",
  scaleToView: true
};

var SCREEN_WIDTH = window.innerWidth;
var SCREEN_HEIGHT = window.innerHeight;

const sketch = ({ context }) => {

  // RENDERER
  const renderer = new THREE.WebGLRenderer({
    canvas: context.canvas,
    alpha: true,
  });
  renderer.setClearColor("#000000", 1);

  // CAMERA
  const camera = new THREE.PerspectiveCamera(50, SCREEN_WIDTH / SCREEN_HEIGHT, 1, 1000);
  camera.position.set(-20, 10, 30);

  // ORBIT CONTROLS
  const controls = new THREE.OrbitControls(camera, context.canvas);
  controls.target.set(30, 0, 0);
  
  // SCENE
  const scene = new THREE.Scene();

  // TEXTURES
  const loader = new THREE.TextureLoader();
  const sunTexture = loader.load(celestialBodies.sun.texture);

  // MATERIALS
  const sunMaterial = new THREE.MeshStandardMaterial({ map: sunTexture });

  // MESHES
  const geometry = new THREE.SphereGeometry(1, 32, 16);

  // add the sun
  const sunMesh = new THREE.Mesh(geometry, sunMaterial);
  sunMesh.position.set(0, 0, 0);
  sunMesh.scale.setScalar(10);
  scene.add(sunMesh);

  // create planets
  console.log(getSpaces());

  const planets = Object.fromEntries(
    Object.entries(celestialBodies.planets).map(([key, value]) => {
      const texture = loader.load(value.texture);
      const material = new THREE.MeshStandardMaterial({ map: texture });
      const group = new THREE.Group();
      const mesh = new THREE.Mesh(geometry, material);
      createPlanet(scene, mesh, group, value.x_position, value.scale);  

      return [key, {...value, group, mesh}];
    })
  );

  // LIGHTING
  const light = new THREE.PointLight("white", 1.25);
  light.position.set(0, 0, 0);
  scene.add(light);

  // illuminate the sun
  createSpotlights(scene);

  // HELPERS
  scene.add(new THREE.PointLightHelper(light, 1));
  // scene.add(new THREE.GridHelper(50, 50));
  
  return {
    render({ time }) {

      for (var planet in planets) {
        planets[planet].group.rotation.y = time * planets[planet].solar_rotation;
        planets[planet].mesh.rotation.y = time * planets[planet].planet_rotation;
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

function createPlanet(scene, mesh, group, x, scale) {
  mesh.position.set(x, 0, 0);
  mesh.scale.setScalar(scale);
  group.add(mesh);
  scene.add(group);
}

// generate spotlights on all sides like a cube.
function createSpotlights(scene) {
  var color = 0xFFFFFF;
  var intensity = 5;
  var distance = 25;
  var angle = Math.PI/7;

  new Array(6).fill('').forEach((item, i) => {
    var spotlight = new THREE.SpotLight(color, intensity, distance, angle);
    var value = i % 2 === 0 ? 25 : -25;

    spotlight.position.set(
      i < 2 ? value : 0,
      i >= 2 && i < 4 ? value : 0,
      i >= 4 ? value : 0
    );
    scene.add( spotlight );
  });
}

canvasSketch(sketch, settings);