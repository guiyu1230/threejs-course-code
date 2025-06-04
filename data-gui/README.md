dat.gui 是可视化调试 3D 场景中一些参数的工具。

它可以通过 add 添加控件，通过 addFolder 对这些控件分组。

用法是这样 add(obj, 'prop')，每个控件的类型是根据属性值的类型来确定的，如果是枚举值，可以在第三个参数通过数组、对象来声明。

你还可以添加一些非 3D 场景参数的控件，在 onChange 的回调函数里拿到 value 来修改 3D 场景的参数。

这个调试工具是非常常用的，在后面会大量用到。


```js
import { GUI } from 'three/addons/libs/lil-gui.module.min.js';

const gui = new GUI();
gui.addColor(mesh.material, 'color');

// 设置物体
const meshFolder = gui.addFolder('立方体');
meshFolder.addColor(mesh.material, 'color');
meshFolder.add(mesh.position, 'x').step(10);
meshFolder.add(mesh.position, 'y').step(10);
meshFolder.add(mesh.position, 'z').step(10);

// 设置光源
const lightFolder = gui.addFolder('灯光');
lightFolder.add(pointLight.position, 'x').step(10);
lightFolder.add(pointLight.position, 'y').step(10);
lightFolder.add(pointLight.position, 'z').step(10);
lightFolder.add(pointLight, 'intensity').step(1000); // 光源亮度

// 自定义控件
const otherFolder = gui.addFolder('其他控件类型');
const obj = {
    aaa: '天王盖地虎',
    bbb: false,
    ccc: 0,
    ddd: '111',
    fff: 'Bbb',
    logic: function () {
      alert('执行一段逻辑!');
    }
};

otherFolder.add(obj, 'aaa');
otherFolder.add(obj, 'bbb');
otherFolder.add(obj, 'ccc').min(-10).max(10).step(0.5);
otherFolder.add(obj, 'ddd', [ '111', '222', '333' ] );
otherFolder.add(obj, 'fff', { Aaa: 0, Bbb: 0.1, Ccc: 5 } );
otherFolder.add(obj, 'logic');
```