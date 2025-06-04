
### 在 Scene 中添加各种 Mesh，每个 Mesh 都是由几何体 Geometry 和材质 Material 构成，设置相机 Camera 的角度和可视范围，设置灯光 Light 的位置，然后通过渲染器 Renderer 渲染到 canvas 元素上，把这个 canvas 挂载到 dom。

所有物体都有 Geometry 和 Material 这两部分。

物体可以通过 Group 分组，最终构成一棵树，添加到场景 Scene 中。

![image](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/310db9a5f7c6493992dcc82f9e1aec5d~tplv-k3u1fbpfcp-jj-mark:1512:0:0:0:q75.awebp#?w=1030&h=690&s=44472&e=png&b=ffffff)

Three.js 就是这样来渲染三维世界的：

![image](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/8a9ce0d5d1ef4ff7aa87c89f7f636970~tplv-k3u1fbpfcp-jj-mark:1512:0:0:0:q75.awebp#?w=1684&h=732&s=91777&e=png&b=fefefe)


```js
import * as THREE from 'three';
import {
    OrbitControls
} from 'three/addons/controls/OrbitControls.js';

const scene = new THREE.Scene();

{
    // BoxGeometry 盒子几何体
    const geometry = new THREE.BoxGeometry(100, 100, 100);
    // material 材质  橙色颜色材质
    const material = new THREE.MeshLambertMaterial(({
        color: new THREE.Color('orange')
    }));
    // 由几何体和材质构建而成的物体
    const mesh = new THREE.Mesh(geometry, material);
    // 物体坐标设置 0, 0, 0
    mesh.position.set(0, 0, 0);
    // 在场景中添加物体
    scene.add(mesh);
}

{
    // 添加光源  光源颜色 和 光亮大小
    const pointLight = new THREE.PointLight(0xffffff, 10000);
    // 光源坐标设置在 80, 80, 80
    pointLight.position.set(80, 80, 80);
    // 在场景中添加光源
    scene.add(pointLight);
}
{
    // 添加长度为200的坐标轴
    const axesHelper = new THREE.AxesHelper(200);
    // 在场景中添加坐标轴
    scene.add(axesHelper);
}
{
    const width = window.innerWidth;
    const height = window.innerHeight;
    // 添加相机- 视角60度 高宽比例视野 最近视野限制 和 最远视野限制
    const camera = new THREE.PerspectiveCamera(60, width / height, 1, 1000);
    // 相机放在 200, 200, 200
    camera.position.set(200, 200, 200);
    // 相机看向 0, 0, 0 坐标处
    camera.lookAt(0, 0, 0);
    

    // 添加渲染器
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(width, height)

    // 动画渲染
    function render() {
        // 渲染器添加场景和相机
        renderer.render(scene, camera);
        requestAnimationFrame(render);
    }
    render();
    // 渲染器元素插入html中
    document.body.append(renderer.domElement);
    const controllers = new OrbitControls(camera, renderer.domElement);
}

```