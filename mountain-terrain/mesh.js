import * as THREE from 'three';
import { createNoise2D } from "simplex-noise";

const geometry = new THREE.PlaneGeometry(3000, 3000, 100, 100);

const noise2D = createNoise2D();

// const positions = geometry.attributes.position;

// for (let i = 0 ; i < positions.count; i ++) {
//     const x = positions.getX(i);
//     const y = positions.getY(i);

//     const z = noise2D(x / 300, y / 300) * 50;
//     positions.setZ(i, z);
//     // positions.setZ(i, Math.random() * 50);
// }

export function updatePosition() {
  const positions = geometry.attributes.position;

  for (let i = 0; i < positions.count; i++) {
    const x = positions.getX(i);
    const y = positions.getY(i);

    const z = noise2D(x / 300, y / 300) * 50;
    const simNum = Math.sin(Date.now() * 0.002 + x * 0.05) * 10;
    positions.setZ(i, z + simNum);
  }
  positions.needsUpdate = true;
}

const material = new THREE.MeshBasicMaterial({
  color: new THREE.Color('orange'),
  wireframe: true,
});

const mesh = new THREE.Mesh(geometry, material);
mesh.rotateX(- Math.PI / 2);
console.log(mesh);

export default mesh;