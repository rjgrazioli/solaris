//first.js
const selestialBodies = {
  earth: {
    x_position : 31,
    scale: 1,
    solar_rotation: 0.3,
    planet_rotation: 0.15
  },
  jupiter: {
    x_position : 31,
    scale: 1,
    solar_rotation: 0.3,
    planet_rotation: 0.15
    createPlanet(scene, jupiterMesh, jupiterGroup, 42, 3.5);
  },
  mars: {
    x_position : 31,
    scale: 1,
    solar_rotation: 0.3,
    planet_rotation: 0.15
    createPlanet(scene, marsMesh, marsGroup, 34, 0.8);
  },
  mercury: {
    x_position : 31,
    scale: 1,
    solar_rotation: 0.3,
    planet_rotation: 0.15
    createPlanet(scene, mercuryMesh, mercuryGroup, 25, 0.8);
  },
  neptune: {
    x_position : 31,
    scale: 1,
    solar_rotation: 0.3,
    planet_rotation: 0.15
    createPlanet(scene, neptuneMesh, neptuneGroup, 60, 1.65);
  },
  pluto: {
    x_position : 31,
    scale: 1,
    solar_rotation: 0.3,
    planet_rotation: 0.15
    createPlanet(scene, plutoMesh, plutoGroup, 64, 0.5);
  },
  saturn: {
    x_position : 31,
    scale: 1,
    solar_rotation: 0.3,
    planet_rotation: 0.15
    createPlanet(scene, saturnMesh, saturnGroup, 50, 2.9);
  },
  uranus: {
    x_position : 31,
    scale: 1,
    solar_rotation: 0.3,
    planet_rotation: 0.15
    createPlanet(scene, uranusMesh, uranusGroup, 56, 1.7);
  },
  venus: {
    x_position : 31,
    scale: 1,
    solar_rotation: 0.3,
    planet_rotation: 0.15
    createPlanet(scene, venusMesh, venusGroup, 28, 0.9);
  },
};
export { selestialBodies };