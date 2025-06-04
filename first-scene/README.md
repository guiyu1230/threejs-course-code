
### 在 Scene 中添加各种 Mesh，每个 Mesh 都是由几何体 Geometry 和材质 Material 构成，设置相机 Camera 的角度和可视范围，设置灯光 Light 的位置，然后通过渲染器 Renderer 渲染到 canvas 元素上，把这个 canvas 挂载到 dom。

所有物体都有 Geometry 和 Material 这两部分。

物体可以通过 Group 分组，最终构成一棵树，添加到场景 Scene 中。

![image](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/310db9a5f7c6493992dcc82f9e1aec5d~tplv-k3u1fbpfcp-jj-mark:1512:0:0:0:q75.awebp#?w=1030&h=690&s=44472&e=png&b=ffffff)

Three.js 就是这样来渲染三维世界的：

![image](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/8a9ce0d5d1ef4ff7aa87c89f7f636970~tplv-k3u1fbpfcp-jj-mark:1512:0:0:0:q75.awebp#?w=1684&h=732&s=91777&e=png&b=fefefe)