这节我们做了一个起伏的山脉地形的效果。

PlaneGeometry 在设置分段之后，会有很多的顶点，构成很多三角形。

我们对这些顶点做下位置的随机变化就可以山脉地形效果。

但是 Math.random() 这种完全随机不行，需要用噪声算法，我们用 simplex-noise 这个库。

噪声算法是生成随机但连续的数的，与位置有关，传入位置 x、y，返回 z

然后想让它起伏，需要用正弦函数，然后以时间作为参数再加上顶点 x 坐标，这样每个顶点就会随时间做正弦规律的起伏。


```js
import * as THREE from 'three';
import { createNoise2D } from "simplex-noise";

// 创建长 3000 宽 3000。 长100段 宽100段的正方形
const geometry = new THREE.PlaneGeometry(3000, 3000, 100, 100);
// 用噪音的库 生成跟位置 x、y 有关系的随机数
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
    // 用噪音的库 生成跟位置 x、y 有关系的随机数
    const simNum = Math.sin(Date.now() * 0.002 + x * 0.05) * 10;
    // 波浪起伏z坐标算法
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

export default mesh;
```