const celestialBodies = {
  planets: {
    earth: {
      x_position: 31,
      scale: 1,
      solar_rotation: 0.3,
      planet_rotation: 0.15,
      texture: "assets/earth.jpg"
    },
    jupiter: {
      x_position: 42,
      scale: 3.5,
      solar_rotation: 0.05,
      planet_rotation: 0.05,
      texture: "assets/jupiter.jpg"
    },
    mars: {
      x_position: 34,
      scale: 0.8,
      solar_rotation: 0.2,
      planet_rotation: 0.02,
      texture: "assets/mars.jpg"
    },
    mercury: {
      x_position: 25,
      scale: 0.8,
      solar_rotation: 0.5,
      planet_rotation: 0.20,
      texture: "assets/mercury.jpg"
    },
    neptune: {
      x_position: 60,
      scale: 1.65,
      solar_rotation: 0.015,
      planet_rotation: 0.25,
      texture: "assets/neptune.jpg"
    },
    pluto: {
      x_position: 64,
      scale: 0.5,
      solar_rotation: 0.005,
      planet_rotation: 0.2,
      texture: "assets/pluto.jpg"
    },
    saturn: {
      x_position: 50,
      scale: 2.9,
      solar_rotation: 0.03,
      planet_rotation: 0.25,
      texture: "assets/saturn.jpg"
    },
    uranus: {
      x_position: 56,
      scale: 1.7,
      solar_rotation: 0.02,
      planet_rotation: 0.25,
      texture: "assets/uranus.jpg"
    },
    venus: {
      x_position: 28,
      scale: 0.9,
      solar_rotation: 0.35,
      planet_rotation: 0.18,
      texture: "assets/venus.jpg"
    },
  },
  sun: {
    x_position: 50,
    scale: 2.9,
    solar_rotation: 0.03,
    planet_rotation: 0.25,
    texture: "assets/sun.jpg"
  },
};
export { celestialBodies };