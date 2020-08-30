import {noise} from "./noise.js";

const light = (mesh, k = 1, time) => {
  for (var i = 0; i < mesh.geometry.vertices.length; i++) {
    var p = mesh.geometry.vertices[i];
    // Add some some randomness to the new positions of the vertices
    if (time) {
      p.normalize().multiplyScalar(1 + 0.3 * noise.perlin3(p.x * k + time, p.y * k, p.z * k));
    }
    else {
      p.normalize().multiplyScalar(1 + 0.3 * noise.perlin3(p.x, p.y, p.z));
    }
  }
  mesh.geometry.verticesNeedUpdate = true;
}

exports.light = light;