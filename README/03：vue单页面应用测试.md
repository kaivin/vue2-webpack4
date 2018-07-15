# vue 单页面应用测试

到这里，我们在 `webpack4.x` 所用到的一些资源就可以全部删除了

本项目的`src/assets`下的所有资源为新增资源，后期会用的到，如果你是从 `webpack4.x` 项目过来的，又想要一步一步操作的话，此文件夹下的资源可以直接复制过来，`src`下其他文件夹都可以先复制一份到别的地方，然后该项目下的这些文件删除，后期再一步步添加

新建 `src/components`文件夹，主要放组件级文件，新建`src/views` 文件夹，主要放页面级文件，新建`src/router`,主要放路由相关文件

在`src/views`文件夹中新建`Index/index.vue`文件

这里约定在`views`文件夹下所有页面都有一个父级文件夹，父级文件夹的名称即为该文件的路由末级名，文件全部命名为`index.vue`

`src/views/Index/index.vue` 添加如下代码：

```
<template>
    <div id="app">
      <h1>导航</h1>
    </div>
</template>

<script>
export default {
  name: "Index"
};
</script>

<style lang="scss">

</style>

```

修改`src/index.html` 文件内容：

```
<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1.0">
  <title><%= htmlWebpackPlugin.options.title%></title>
</head>

<body>
  <div id="app"></div>
</body>

</html>
```

修改 `src/index.js` 文件内容：

```
import Vue from 'vue'
import Index from 'views/Index'


Vue.config.productionTip = false

new Vue({
  render: h => h(Index)
}).$mount('#app');
```

此处会默认去找 `Index` 文件夹下的命名为`index` 的文件，需要注意的是，如果在该文件夹下，有两个或两个以上的同名`index`的不同类型文件，这里就需要把引用写成`import Index from 'views/Index/index.vue'` 来区分到底引用的是什么类型的文件，因为后期可能会建一个 `index.scss` 文件

当这些都设置完后，就可以运行命令 `npm start` 来查看效果了~ 如果能正常显示页面并显示`导航`两个字， 则说明一切配置都正常了~

我在做这一步时，出现了这样一个错误提示

```
Error: listen EACCES 
```

这样的错误监听后面是具体的ip和端口号，出现这样的错误是因为端口号被占，修改一个端口号就可以了