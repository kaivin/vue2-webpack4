<template>
    <div class="container-fluid base-settings router-panel">
        <div class="col-lg-12">
            <div class="clear h20"></div>
            <h3>应用商城</h3>
            <div class="clear h20"></div>
            <div class="settings-list">
                <div class="settings-item">
                    <div class="settings-icon bg-6edc23"><span class="icon iconfont icon-wap"></span></div>
                    <dl>
                        <dt><h4>WAP商城</h4><label class="switch-inline fr"><input type="checkbox" /></label></dt>
                        <dd>用户可根据自己的渠道启用模板装修，并且一个渠道可有多个商城模板进行选择，充分体现灵活化</dd>
                    </dl>
                </div>
                <div class="settings-item">
                    <div class="settings-icon bg-ff9494"><span class="icon iconfont icon-ios"></span></div>
                    <dl>
                        <dt><h4>IOS（苹果）</h4><label class="switch-inline fr"><input type="checkbox" /></label></dt>
                        <dd>用户可根据自己的渠道启用模板装修，并且一个渠道可有多个商城模板进行选择，充分体现灵活化</dd>
                    </dl>
                </div>
                <div class="settings-item">
                    <div class="settings-icon bg-bda2e7"><span class="icon iconfont icon-android"></span></div>
                    <dl>
                        <dt><h4>Android（安卓）</h4><label class="switch-inline fr"><input type="checkbox" /></label></dt>
                        <dd>用户可根据自己的渠道启用模板装修，并且一个渠道可有多个商城模板进行选择，充分体现灵活化</dd>
                    </dl>
                </div>
                <div class="settings-item">
                    <div class="settings-icon bg-fbc713"><span class="icon iconfont icon-web"></span></div>
                    <dl>
                        <dt><h4>WEB商城</h4><label class="switch-inline fr"><input type="checkbox" /></label></dt>
                        <dd>用户可根据自己的渠道启用模板装修，并且一个渠道可有多个商城模板进行选择，充分体现灵活化</dd>
                    </dl>
                </div>
                <div class="settings-item">
                    <div class="settings-icon bg-6edc23"><span class="icon iconfont icon-mini-app"></span></div>
                    <dl>
                        <dt><h4>小程序</h4><label class="switch-inline fr"><input type="checkbox" /></label></dt>
                        <dd>用户可根据自己的渠道启用模板装修，并且一个渠道可有多个商城模板进行选择，充分体现灵活化</dd>
                    </dl>
                </div>
            </div>
            <div class="clear h20"></div>
            <h3>通用配置</h3>
            <div class="clear h20"></div>
            <div class="settings-list">
                <div class="settings-item">
                    <div class="settings-icon bg-6edc23"><span class="icon iconfont icon-goods"></span></div>
                    <dl>
                        <dt><h4>商品组管理</h4><router-link to="/BaseSettings/GoodsGroupManagement" class="btn btn-link fr">设置</router-link></dt>
                        <dd>启动商品组是将商品进行分组打包，装修的时候根据打包的商品进行选择即可，不用逐一去选择商品</dd>
                    </dl>
                </div>
                <div class="settings-item">
                    <div class="settings-icon bg-ff9494"><span class="icon iconfont icon-flash-sale"></span></div>
                    <dl>
                        <dt><h4>秒杀设置</h4><router-link to="/BaseSettings/FlaseSaleSettings" class="btn btn-link fr">设置</router-link></dt>
                        <dd>统一设置秒杀区间，供建促销时选择，则商品就会在对应的区间对应的时间显示并开始</dd>
                    </dl>
                </div>
                <div class="settings-item">
                    <div class="settings-icon bg-bda2e7"><span class="icon iconfont icon-price"></span></div>
                    <dl>
                        <dt><h4>筛选价格区间设置</h4><router-link to="/BaseSettings/FilterPriceRangeSettings" class="btn btn-link fr">设置</router-link></dt>
                        <dd>用户可根据自己的渠道启用模板装修，并且一个渠道可有多个商城模板进行选择，充分体现灵活化</dd>
                    </dl>
                </div>
                <div class="settings-item">
                    <div class="settings-icon bg-fbc713"><span class="icon iconfont icon-ad"></span></div>
                    <dl>
                        <dt><h4>公共广告</h4><button type="button" class="btn btn-link fr">设置</button><span class="icon iconfont icon-new"><i>新</i></span></dt>
                        <dd>统一设置秒杀区间，供建促销时选择，则商品就会在对应的区间对应的时间显示并开始</dd>
                    </dl>
                </div>
                <div class="settings-item">
                    <div class="settings-icon bg-6edc23"><span class="icon iconfont icon-decorate"></span></div>
                    <dl>
                        <dt><h4>商城风格</h4><button type="button" class="btn btn-link fr">设置</button><span class="icon iconfont icon-new"><i>新</i></span></dt>
                        <dd>用户可根据自己的渠道启用模板装修，并且一个渠道可有多个商城模板进行选择，充分体现灵活化</dd>
                    </dl>
                </div>
            </div>
            <div class="clear h20"></div>
            <h3>弹窗按钮</h3>
            <div class="clear h20"></div>
            <button type="button" class="btn btn-md btn-primary" data-toggle="modal" data-target="#addGoodsGroupWindow">新建商品组</button>
        </div>
        <control-add-goods-group-window id="addGoodsGroupWindow"></control-add-goods-group-window>
    </div>
</template>

<script>

import ControlAddGoodsGroupWindow from "@/components/windows/ControlAddGoodsGroupWindow";
export default {
  name: "BaseSettings",
  components: { 
      ControlAddGoodsGroupWindow,
      },
  data:function() {
    return {
    };
  },
  methods: {
    
  },
  mounted: function() {
  }
};
</script>

<style lang="scss">
    @import "../../../assets/scss/core/setting";
    @import "../../../assets/scss/core/css3";
    @import "../../../assets/scss/core/mixin";
.base-settings{
    h3{
        color: #616161;
        font-size:18px;
    }
}
    .settings-list{
        min-width:1200px;
        @extend %clearfix;
        .settings-item{
            width:454px;
            height:112px;
            border:1px solid #f2f2f2;
            @extend %fl;
            margin: 0 40px 20px 0;
            padding:10px 10px 10px 110px;
            .settings-icon{
                width:70px;
                height:70px;
                position: absolute;
                left:20px;
                top:50%;
                margin-top: -35px;
                border-radius:100%;
                overflow: hidden;
                span{
                    display: block;
                    width:100%;
                    height:100%;
                    text-align: center;
                    line-height: 70px;
                    color: $white;
                    font-size:40px;
                }
            }
            dl{
                width:100%;
                height:100%;
                @extend %clearfix;
                dt{
                    height:30px;
                    width:100%;
                    margin-bottom: 10px;
                    h4{
                        @extend %fl;
                        line-height: 30px;
                        font-size: 16px;
                        color: #666;
                    }
                    .btn-link{
                        padding:3px 10px;
                        font-size:14px;
                    }
                    .icon-new{
                        display: block;
                        width:36px;
                        height:36px;
                        line-height: 36px;
                        font-size:36px;
                        color: #f94c4e;
                        position: absolute;
                        right:50px;
                        top:-10px;
                        i{
                            display: block;
                            position: absolute;
                            width:36px;
                            height:24px;
                            text-align: center;
                            line-height: 24px;
                            font-size: 14px;
                            color:$white;
                            left:0;
                            top:0;
                            font-style:normal;
                            font-weight: normal
                        }
                    }
                }
                dd{
                    width:100%;
                    overflow: hidden;
                    line-height: 24px;
                    color: #999;
                }
            }
        }
    }
    .bg-6edc23{
        background: #6edc23;
    }
    .bg-ff9494{
        background: #ff9494;
    }
    .bg-bda2e7{
        background: #bda2e7;
    }
    .bg-fbc713{
        background: #fbc713;
    }
    .bg-84c6f6{
        background: #84c6f6;
    }
</style>

