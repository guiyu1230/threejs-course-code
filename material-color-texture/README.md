

```js
import * as THREE from 'three';

// 盒子几何体
const boxGeometry = new THREE.BoxGeometry(100, 100, 100);

// 边缘几何体 EdgesGeometry
const geometry = new THREE.EdgesGeometry(boxGeometry);

// 虚线材质 LineDashedMaterial
const material = new THREE.LineDashedMaterial(({
    color: new THREE.Color('orange'),
    dashSize: 10,
    gapSize: 10
}));

const line = new THREE.Line(geometry, material);
line.computeLineDistances();

console.log(line);

export default line;
```