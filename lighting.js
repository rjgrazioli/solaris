// LIGHTING
// -------------------------------------------------------
let hemisphereLight, shadowLight, light2, light3;
const createLights = (scene) => {
  hemisphereLight = new THREE.HemisphereLight(0xffffff,0x000000, .5)
  
  shadowLight = new THREE.DirectionalLight(0xff8f16, .4);
  shadowLight.position.set(0, 450, 350);
  shadowLight.castShadow = true;

  shadowLight.shadow.camera.left = -650;
  shadowLight.shadow.camera.right = 650;
  shadowLight.shadow.camera.top = 650;
  shadowLight.shadow.camera.bottom = -650;
  shadowLight.shadow.camera.near = 1;
  shadowLight.shadow.camera.far = 1000;

  shadowLight.shadow.mapSize.width = 4096;
  shadowLight.shadow.mapSize.height = 4096;
  
  light2 = new THREE.DirectionalLight(0xfff150, .25);
  light2.position.set(-600, 350, 350);
  
  light3 = new THREE.DirectionalLight(0xfff150, .15);
  light3.position.set(0, -250, 300);

  scene.add(hemisphereLight);  
  scene.add(shadowLight);
  scene.add(light2);
  scene.add(light3);
}

exports.createLights = createLights;