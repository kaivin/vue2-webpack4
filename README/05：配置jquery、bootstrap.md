# 配置jquery bootstrap

本项目会用到`jquery`，`bootstrap`，所以先下载相关插件

```
npm i jquery bootstrap -S
```

## 引用 jquery
`jquery` 需要配置全局变量，修改`webpack.base.config.js`文件，在`plugin` 中添加如下代码：

```
    new webpack.ProvidePlugin({
      jQuery: "jquery",
      $: "jquery"
    }),
```

## 引用 bootstrap

`bootstrap` 因为我们要用到一些行内提示框，所以需要引用的就不再是`bootstrap.min.js`，而是`bootstrap.bundle.min.js`

### 整体引用样式文件

`bootstrap` 我们用到的是`4.x`版本，这个版本有`scss`版本，我们要引用`bootstrap`的样式可以通过新建一个 `custom.scss` 文件，来引用`bootstrap` 的样式，这样，我们可以在这个`scss`文件中，修改一些`bootstrap`配置的变量，来达到改变主题色风格等操作，具体都有哪些变量，需要自己去摸索~

我在`src/assets/scss`文件夹中已经拷贝了这个文件

接下来就是引用这些插件，首先是`app.config.js`,修改入口引用：

```
 vendor: ["vue",'vue-router','jquery','bootstrap/dist/js/bootstrap.bundle.min.js'] // 拆分框架代码
```

然后在 `src/index.js` 入口文件中引入样式

```
import '@/assets/scss/custom.scss'
import "@/assets/scss/Public.scss";
import '@/assets/scss/ResetBootstrapStyle.scss'
import '@/assets/scss/iconfont.css'
```

这里我在`webpack.base.config.js`中新增了`src`文件夹的配置参数：

```
alias: {
    '@config': resolve('../config'),
    '@': path.resolve(__dirname, '../../src'),
    'views': path.resolve(__dirname, '../../src/views'),
    'components': path.resolve(__dirname, '../../src/components')
}
```



我们再改造一下`src/views/Index/index.vue` 文件：

```
<template>
  <div id="app">
    <nav class="navbars fixed-top">
      <div class="col-lg-8">
        <nav aria-label="breadcrumb">
          <div class="btn-nav-icon">
            <span class="icon iconfont icon-all slide-sm"></span>
            <span class="icon iconfont icon-all slide-lg hide"></span>
          </div>
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <a href="#">店铺</a>
            </li>
            <li class="breadcrumb-item active" aria-current="page">基础设置</li>
          </ol>
        </nav>
      </div>
      <div class="col-lg-4">
        <div class="header-info">
          <div class="user-info">
            <span class="icon iconfont icon-user"></span>
            <i></i>
          </div>
        </div>
      </div>
    </nav>
    <div class="nav-left">
      <div class="nav-content">
        <div class="company-logo">
          <a href="javascript:void(0);"><img src="../../assets/images/logo.png" /></a>
        </div>
        <div class="nav-list">
          <div class="nav-item on">
            <a href="javascript:void(0);">
              <span class="icon iconfont icon-run"></span>店铺</a>
          </div>
        </div>
      </div>
      <div class="sub-nav-content">
        <div class="sub-nav-list">
          <div class="sub-nav-item">
            <router-link to="/BaseSettings">基础设置</router-link>
          </div>
          <div class="sub-nav-item">
            <router-link to="/PageManagement">页面管理</router-link>
          </div>
          <div class="sub-nav-item">
            <router-link to="/TemplateCenter">模板中心</router-link>
          </div>
        </div>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<script>
$(function() {
  $(".slide-sm").on("click", function() {
    $(".nav-content").animate({ width: "58px" });
    $("#app,.navbars").animate({ paddingLeft: "58px" });
    $(".slide-sm").addClass("hide");
    $(".slide-lg").removeClass("hide");
  });
  $(".slide-lg").on("click", function() {
    $(".nav-content").animate({ width: "150px" });
    $("#app,.navbars").animate({ paddingLeft: "150px" });
    $(".slide-lg").addClass("hide");
    $(".slide-sm").removeClass("hide");
  });
  $(".nav-list .nav-item").on("click", function() {
    $(".sub-nav-content").show();
  });
  $(".sub-nav-list .sub-nav-item").on("click", function() {
    $(".sub-nav-content").hide();
  });
});
export default {
  name: "Index"
};
</script>

<style lang="scss">
@import "../../assets/scss/core/setting";
@import "../../assets/scss/core/css3";
@import "../../assets/scss/core/mixin";
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  padding: 69px 0 0 150px;
}
.navbars {
  padding: 10px 20px 10px 150px;
  border-bottom: 1px solid #f8f8f8;
  background: white;
  display: flex;
  flex-wrap: wrap;
  -ms-flex-align: center;
  align-items: center;
  -ms-flex-pack: justify;
  justify-content: space-between;
  .col-lg-8 {
    padding-left: 40px;
  }
}
.breadcrumb {
  margin: 0 !important;
  background-color: inherit !important;
  height: 48px;
  padding: 12px 1rem 12px 2rem !important;
  line-height: 24px;
}
.btn-nav-icon {
  width: 40px;
  height: 48px;
  position: absolute;
  left: -20px;
  top: 0;
  z-index: 10;
  span {
    display: block;
    width: 100%;
    height: 48px;
    line-height: 48px;
    text-align: center;
    cursor: pointer;
    font-size: 18px;
  }
}
.header-info {
  width: 100%;
  height: 48px;
  overflow: hidden;
  .user-info {
    width: 70px;
    height: 48px;
    float: right;
    cursor: pointer;
    span {
      display: block;
      width: 48px;
      line-height: 48px;
      font-size: 40px;
      color: #ababab;
      @extend %fl;
    }
    i {
      display: block;
      width: 22px;
      float: left;
      height: 48px;
      &::before {
        display: block;
        position: absolute;
        left: 0;
        top: 20px;
        @include triangle(bottom, 8px, #dcdcdc);
      }
    }
  }
}
.nav-left {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 1040;
}
.nav-content {
  background: #313443;
  width: 150px;
  height: 100%;
  overflow: hidden;
  @extend %fl;
}
.sub-nav-content {
  background: #fafafa;
  width: 120px;
  height: 100%;
  overflow: hidden;
  padding: 74px 0 10px 20px;
  @extend %fl;
  display: none;
}
.sub-nav-list {
  width: 100%;
  overflow: hidden;
  .sub-nav-item {
    width: 100%;
    height: 32px;
    margin-bottom: 10px;
    overflow: hidden;
    a {
      display: block;
      width: 100%;
      height: 32px;
      line-height: 32px;
      &:hover {
        text-decoration: inherit;
        color: $primary;
      }
    }
  }
}
.company-logo {
  width: 100%;
  height: 70px;
  background: $primary;
  overflow: hidden;
  a {
    display: block;
    width: 100%;
    height: 100%;
    img {
      display: block;
      width: 124px;
      height: 30px;
      margin: 20px 0 0 8px;
    }
  }
}
.nav-list {
  width: 100%;
  padding: 30px 0;
  overflow: hidden;
  .nav-item {
    width: 100%;
    height: 48px;
    overflow: hidden;
    a {
      display: block;
      width: 100%;
      height: 48px;
      line-height: 48px;
      color: $white;
      padding: 0 0 0 20px;
      &:hover {
        text-decoration: inherit;
        color: $primary;
        span {
          color: $primary;
        }
      }
      span {
        line-height: 48px;
        font-size: 18px;
        color: $white;
        margin-right: 10px;
        float: left;
      }
    }
  }
  .nav-item.on {
    a {
      text-decoration: inherit;
      background: $white;
      color: $primary;
      span {
        color: $primary;
      }
    }
  }
}
</style>
```

执行命令 `npm start` 页面能正常访问，`jquery` 代码也能正常使用，说明一切正常，先不用管此时源代码管理报的错，因为这里页面内我使用了`vue-router`，但是还没有相关的页面，所以会有报错，下一章，将开始使用`vue-router`