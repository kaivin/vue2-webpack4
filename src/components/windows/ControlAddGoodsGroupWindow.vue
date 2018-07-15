<template>
  <div class="modal fade" tabindex="-1" role="dialog">
    <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">新建商品组</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
            <div class="goods-group-panel">
                <div class="clear h10"></div>
                <div class="form-table" style="width:740px;">
                    <div class="row-form">
                        <div class="td-form item-title" style="width:110px;">分组名称：</div>
                        <div class="td-form item-content" style="width:160px;"><input type="text" class="form-control input-md" /></div>
                        <div class="td-form item-content" style="width:90px;"></div>
                        <div class="td-form item-title" style="width:50px;">描述：</div>
                        <div class="td-form item-content"><input type="text" class="form-control input-md" /></div>
                    </div>
                    <div class="row-form">
                        <div class="td-form item-title">展示数量：</div>
                        <div class="td-form item-content"><input type="text" class="form-control input-md" /></div>
                        <div class="td-form item-content"><p>(0表示不限)</p></div>
                        <div class="td-form item-title">备注：</div>
                        <div class="td-form item-content"><input type="text" class="form-control input-md" /></div>
                    </div>
                    <div class="row-form">
                        <div class="td-form item-title">商品来源：</div>
                        <div class="td-form item-content">
                            <div class="drop drop-block">
                                <div class="btn-group dropdown">
                                    <div class="drop-input dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><a href="javascript:void(0);" class="btn-md">人工选择</a><input type="text" class="form-control input-md" value="人工选择" readonly /></div>
                                    <div class="dropdown-menu">
                                        <a class="dropdown-item" href="#">人工选择</a>
                                        <a class="dropdown-item" href="#">系统筛选</a>
                                        <a class="dropdown-item" href="#">条件自定义</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="td-form item-content"></div>
                        <div class="td-form item-title"></div>
                        <div class="td-form item-content">
                            <div class="drop drop-inline no-border">
                                <div class="btn-group dropdown">
                                    <div class="drop-input dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><a href="javascript:void(0);" class="btn-md">人工选择</a><input type="text" class="form-control input-md" value="人工选择" readonly /></div>
                                    <div class="dropdown-menu">
                                        <a class="dropdown-item" href="#">人工选择</a>
                                        <a class="dropdown-item" href="#">系统筛选</a>
                                        <a class="dropdown-item" href="#">条件自定义</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="clear h10"></div>
                <div class="goods-edit-panel">
                    <div class="artificial">
                        <div class="form-table" style="width:740px;">
                            <div class="row-form">
                                <div class="td-form item-title" style="width:110px;"></div>
                                <div class="td-form item-content"><button type="button" class="btn btn-md btn-primary">添加商品</button><button type="button" class="btn btn-md btn-primary">添加促销</button></div>
                            </div>
                        </div>
                        <div class="goods-edit-list">
                            <div class="goods-item">
                                <i></i>
                                <dl>
                                    <dt><img src="../../assets/images/default_img.jpg" /></dt>
                                    <dd>更换图片</dd>
                                </dl>
                            </div>
                            <div class="goods-item">
                                <i></i>
                                <dl>
                                    <dt><img src="../../assets/images/default_img.jpg" /></dt>
                                    <dd>更换图片</dd>
                                </dl>
                            </div>
                            <div class="goods-item">
                                <i></i>
                                <dl>
                                    <dt><img src="../../assets/images/default_img.jpg" /></dt>
                                    <dd>更换图片</dd>
                                </dl>
                            </div>
                            <div class="goods-item">
                                <i></i>
                                <dl>
                                    <dt><img src="../../assets/images/default_img.jpg" /></dt>
                                    <dd>更换图片</dd>
                                </dl>
                            </div>
                            <div class="goods-item">
                                <i></i>
                                <dl>
                                    <dt><img src="../../assets/images/default_img.jpg" /></dt>
                                    <dd>更换图片</dd>
                                </dl>
                            </div>
                            <div class="goods-item">
                                <i></i>
                                <dl>
                                    <dt><img src="../../assets/images/default_img.jpg" /></dt>
                                    <dd>更换图片</dd>
                                </dl>
                            </div>
                        </div>
                    </div>
                    <div class="system-goods">
                        <div class="form-table" style="width:740px;">
                            <div class="row-form">
                                <div class="td-form item-title" style="width:110px;">系统商品：</div>
                                <div class="td-form item-content"><a href="javascript:void(0);" class="links-item on">热销商品</a><a href="javascript:void(0);" class="links-item">新品列表</a><a href="javascript:void(0);" class="links-item">猜你喜欢</a><a href="javascript:void(0);" class="links-item">正常促销</a><a href="javascript:void(0);" class="links-item">限时抢购</a></div>
                            </div>
                        </div>
                        <div class="goods-edit-list">
                            <div class="goods-item">
                                <i></i>
                                <dl>
                                    <dt><img src="../../assets/images/default_img.jpg" /></dt>
                                    <dd>更换图片</dd>
                                </dl>
                            </div>
                            <div class="goods-item">
                                <i></i>
                                <dl>
                                    <dt><img src="../../assets/images/default_img.jpg" /></dt>
                                    <dd>更换图片</dd>
                                </dl>
                            </div>
                            <div class="goods-item">
                                <i></i>
                                <dl>
                                    <dt><img src="../../assets/images/default_img.jpg" /></dt>
                                    <dd>更换图片</dd>
                                </dl>
                            </div>
                            <div class="goods-item">
                                <i></i>
                                <dl>
                                    <dt><img src="../../assets/images/default_img.jpg" /></dt>
                                    <dd>更换图片</dd>
                                </dl>
                            </div>
                            <div class="goods-item">
                                <i></i>
                                <dl>
                                    <dt><img src="../../assets/images/default_img.jpg" /></dt>
                                    <dd>更换图片</dd>
                                </dl>
                            </div>
                            <div class="goods-item">
                                <i></i>
                                <dl>
                                    <dt><img src="../../assets/images/default_img.jpg" /></dt>
                                    <dd>更换图片</dd>
                                </dl>
                            </div>
                        </div>
                    </div>
                    <div class="conditions-filter">
                        <div class="form-table" style="width:740px;">
                            <div class="row-form">
                                <div class="td-form item-title" style="width:110px;"></div>
                                <div class="td-form item-content"><button type="button" class="btn btn-md btn-primary">添加条件</button><button type="button" class="btn btn-md btn-white">清除全部</button></div>
                                <div class="td-form item-title">条件规则设置：</div>
                                <div class="td-form item-content">
                                    <div class="drop drop-block">
                                        <div class="btn-group dropdown">
                                            <div class="drop-input dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><a href="javascript:void(0);" class="btn-md">符合任一条件即可</a><input type="text" class="form-control input-md" value="符合任一条件即可" readonly /></div>
                                            <div class="dropdown-menu">
                                                <a class="dropdown-item" href="#">符合任一条件即可</a>
                                                <a class="dropdown-item" href="#">系统筛选</a>
                                                <a class="dropdown-item" href="#">条件自定义</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="clear h20"></div>
                        <div class="filter-list">
                            <div class="filter-item">
                                <i></i>
                                <div class="drop drop-block fl w160">
                                    <div class="btn-group dropdown">
                                        <div class="drop-input dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><a href="javascript:void(0);" class="btn-md">商品分类</a><input type="text" class="form-control input-md" value="商品分类" readonly /></div>
                                        <div class="dropdown-menu">
                                            <a class="dropdown-item" href="#">商品分类</a>
                                            <a class="dropdown-item" href="#">系统筛选</a>
                                            <a class="dropdown-item" href="#">条件自定义</a>
                                        </div>
                                    </div>
                                </div>
                                <div class="drop drop-block fl w100">
                                    <div class="btn-group dropdown">
                                        <div class="drop-input dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><a href="javascript:void(0);" class="btn-md">包含</a><input type="text" class="form-control input-md" value="包含" readonly /></div>
                                        <div class="dropdown-menu">
                                            <a class="dropdown-item" href="#">包含</a>
                                            <a class="dropdown-item" href="#">系统筛选</a>
                                            <a class="dropdown-item" href="#">条件自定义</a>
                                        </div>
                                    </div>
                                </div>
                                <div class="w300 fl"><input type="text" class="form-control input-md" /></div>
                                <button type="button" class="btn btn-link btn-md fl">选择</button>
                            </div>
                            <div class="filter-item">
                                <i></i>
                                <div class="drop drop-block fl w160">
                                    <div class="btn-group dropdown">
                                        <div class="drop-input dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><a href="javascript:void(0);" class="btn-md">商品分类</a><input type="text" class="form-control input-md" value="商品分类" readonly /></div>
                                        <div class="dropdown-menu">
                                            <a class="dropdown-item" href="#">商品分类</a>
                                            <a class="dropdown-item" href="#">系统筛选</a>
                                            <a class="dropdown-item" href="#">条件自定义</a>
                                        </div>
                                    </div>
                                </div>
                                <div class="drop drop-block fl w100">
                                    <div class="btn-group dropdown">
                                        <div class="drop-input dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><a href="javascript:void(0);" class="btn-md">包含</a><input type="text" class="form-control input-md" value="包含" readonly /></div>
                                        <div class="dropdown-menu">
                                            <a class="dropdown-item" href="#">包含</a>
                                            <a class="dropdown-item" href="#">系统筛选</a>
                                            <a class="dropdown-item" href="#">条件自定义</a>
                                        </div>
                                    </div>
                                </div>
                                <div class="w300 fl"><input type="text" class="form-control input-md" /></div>
                                <button type="button" class="btn btn-link btn-md fl">选择</button>
                            </div>
                            <div class="filter-item">
                                <i></i>
                                <div class="drop drop-block fl w160">
                                    <div class="btn-group dropdown">
                                        <div class="drop-input dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><a href="javascript:void(0);" class="btn-md">商品分类</a><input type="text" class="form-control input-md" value="商品分类" readonly /></div>
                                        <div class="dropdown-menu">
                                            <a class="dropdown-item" href="#">商品分类</a>
                                            <a class="dropdown-item" href="#">系统筛选</a>
                                            <a class="dropdown-item" href="#">条件自定义</a>
                                        </div>
                                    </div>
                                </div>
                                <div class="drop drop-block fl w100">
                                    <div class="btn-group dropdown">
                                        <div class="drop-input dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><a href="javascript:void(0);" class="btn-md">包含</a><input type="text" class="form-control input-md" value="包含" readonly /></div>
                                        <div class="dropdown-menu">
                                            <a class="dropdown-item" href="#">包含</a>
                                            <a class="dropdown-item" href="#">系统筛选</a>
                                            <a class="dropdown-item" href="#">条件自定义</a>
                                        </div>
                                    </div>
                                </div>
                                <div class="w300 fl"><input type="text" class="form-control input-md" /></div>
                                <button type="button" class="btn btn-link btn-md fl">选择</button>
                            </div>
                        </div>
                        <div class="clear h20"></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-md btn-primary">保存</button>
          <button type="button" class="btn btn-md btn-white" data-dismiss="modal">取消</button>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "ControlAddGoodsGroupWindow",
  data: function() {
    return {};
  },
  props: [],
  mounted: function() {},
  computed: {},
  methods: {}
};
</script>


<style lang="scss">
@import "../../assets/scss/core/setting";
@import "../../assets/scss/core/css3";
@import "../../assets/scss/core/mixin";
.goods-group-panel{
    width:100%;
    height: 620px;
    overflow-y: auto;
}
.goods-edit-panel,.artificial,.system-goods,.conditions-filter{
    width:100%;
    @extend %clearfix;
}
.goods-edit-panel button{
    margin-right:10px;
}
.system-goods{
    .links-item{
        padding:0 10px;
        line-height: 30px;
        height:32px;
        border:1px solid #bcbcbc;
        background: $white;
        border-radius:2px;
        display: block;
        @extend %fl;
        margin:0 10px 10px 0;
        &:hover{
            border:1px solid $primary;
            color:$primary;
            text-decoration: inherit;
        }
    }
    .links-item.on{
        border:1px solid $primary;
        background: $primary;
        color:$white;
    }
}
.goods-edit-list{
    width:100%;
    @extend %clearfix;
    padding:0 20px 20px 40px;
    .goods-item{
        width:102px;
        height:130px;
        @extend %fl;
        margin: 15px 15px 0 0;
        border: 1px solid $white;
        &:hover{
            border: 1px solid $primary;
            i{
                display: block;
            }
            dl dd{
                color: $primary;
            }
        }
        i{
            display: none;
            width:20px;
            height:20px;
            background: url('../../assets/images/close.png') center center no-repeat;
            position: absolute;
            right:-10px;
            top:-10px;
            z-index: 10;
            cursor: pointer;
        }
        dl{
            width:100%;
            @extend %clearfix;
            dt{
                display: block;
                width:100%;
                height:100px;
                img{
                    display: block;
                    width:100px;
                    height:100px;
                }
            }
            dd{
                width:100%;
                height:28px;
                line-height: 28px;
                text-align: center;
            }
        }
    }
}
.filter-list{
    width:100%;
    @extend %clearfix;
    padding:0 20px 0 40px;
    .w160{
        width:160px;
    }
    .w100{
        width:100px;
    }
    .w300{
        width:300px;
        @extend %clearfix;
    }
    .filter-item{
        padding:10px 0 10px 64px;
        border:1px solid $white;
        width:100%;
        margin-bottom: 5px;
        @extend %clearfix;
        &:hover{
            border: 1px dashed #cdcdcd;
            i{
                display: block;
            }
        }
        >div.drop{
            margin-right:10px;
        }
        i{
            display: none;
            width:20px;
            height:20px;
            background: url('../../assets/images/close.png') center center no-repeat;
            position: absolute;
            right:-10px;
            top:-10px;
            z-index: 10;
            cursor: pointer;
        }
    }
}
</style>
