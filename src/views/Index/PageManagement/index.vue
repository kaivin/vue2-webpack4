<template>
    <div class="container-fluid router-panel">
        <div class="clear h20"></div>
        <ul class="nav nav-tabs justify-content-center" id="myTab" role="tablist">
          <li class="nav-item">
            <a class="nav-link active" id="wap-app-tab" data-toggle="tab" href="#wap-app" role="tab" aria-controls="wap-app" aria-selected="true">APP</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" id="web-mall-tab" data-toggle="tab" href="#web-mall" role="tab" aria-controls="web-mall" aria-selected="false">PC端</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" id="mini-app-tab" data-toggle="tab" href="#mini-app" role="tab" aria-controls="mini-app" aria-selected="false">小程序</a>
          </li>
        </ul>
        <div class="tab-content" id="myTabContent">
          <div class="tab-pane fade show active" id="wap-app" role="tabpanel" aria-labelledby="wap-app-tab">
            <div class="page-management-panel">
              <div class="page-nav-list">
                <a href="javascript:void(0);" class="on">商城首页</a>
                <a href="javascript:void(0);">商品分类页</a>
                <a href="javascript:void(0);">商品列表页</a>
                <a href="javascript:void(0);">商品搜索页</a>
                <a href="javascript:void(0);">商品详情页</a>
                <a href="javascript:void(0);">活动页</a>
                <a href="javascript:void(0);">APP启动页</a>
                <a href="javascript:void(0);">底部主菜单</a>
              </div>
              <div class="container-fluid">
                <div class="row">
                  <div class="col-lg-6"><button type="button" class="btn btn-md btn-auxiliary">新建页面</button></div>
                  <div class="col-lg-6"><div class="w240 fr"><label class="search-module"><i class="icon iconfont icon-close-bg"></i><i class="icon iconfont icon-search"></i><input class="form-control" type="search" placeholder="Search"></label></div></div>
                </div>
                <div class="clear h15"></div>
                <div class="row">
                  <div class="table-wrapper table-lg table-row-10">
                    <div class="table-panel">
                      <div class="thead-panel">
                        <div class="row-panel">
                          <div class="th-item">页面名称</div>
                          <div class="th-item">创建时间</div>
                          <div class="th-item">状态</div>
                          <div class="th-item">页面类型</div>
                          <div class="th-item txt-rt" style="width:320px">操作</div>
                        </div>
                      </div>
                      <div class="tbody-panel">
                        <div class="row-panel">
                          <div class="td-item"><p>首页<span class="icon iconfont icon-edit"></span></p><label class="font-edit"><input type="text" /><span class="icon iconfont icon-yes"></span></label></div>
                          <div class="td-item"><p>2018.06.23</p></div>
                          <div class="td-item yellow"><p>已修改未发布</p></div>
                          <div class="td-item"><p>商城首页</p></div>
                          <div class="td-item txt-rt"><a href="javascript:void(0);">编辑</a><a href="javascript:void(0);" title="" data-html=true data-toggle="popover" data-placement="bottom" data-content='<dl class="link-copy-panel"><dt>确定复制？</dt><dd><button type="button" class="btn btn-md btn-auxiliary">确定</button><button type="button" class="btn btn-md btn-white">取消</button></dd></dl>' class="tabel-link-copy">复制</a><a href="javascript:void(0);">预览</a><a href="javascript:void(0);" title="" data-trigger="focus" data-html=true data-toggle="popover" data-placement="bottom" data-content='<ul class="promote-share-panel"><li class="copy-link"><a href="javascript:void(0);"><i></i><span>复制链接</span></a></li><li class="share-wechat"><a href="javascript:void(0);"><i></i><span>微信分享</span></a></li><li class="share-sina"><a href="javascript:void(0);"><i></i><span>新浪微博</span></a></li></ul>' class="table-link-promote">推广</a><a href="javascript:void(0);">删除</a><a href="javascript:void(0);" class="table-link-enable">启用</a></div>
                        </div>
                        <div class="row-panel">
                          <div class="td-item"><p>首页<span class="icon iconfont icon-edit"></span></p></div>
                          <div class="td-item"><p>2018.06.23</p></div>
                          <div class="td-item red"><p>草稿</p></div>
                          <div class="td-item"><p>商城首页</p></div>
                          <div class="td-item txt-rt"><a href="javascript:void(0);">编辑</a><a href="javascript:void(0);"  title="" data-html=true data-toggle="popover" data-placement="bottom" data-content='<dl class="link-copy-panel"><dt>确定复制？</dt><dd><button type="button" class="btn btn-md btn-auxiliary">确定</button><button type="button" class="btn btn-md btn-white">取消</button></dd></dl>' class="link-copy">复制</a><a href="javascript:void(0);">预览</a><a href="javascript:void(0);">推广</a><a href="javascript:void(0);">删除</a><a href="javascript:void(0);">启用</a></div>
                        </div>
                        <div class="row-panel">
                          <div class="td-item"><p>首页<span class="icon iconfont icon-edit"></span></p></div>
                          <div class="td-item"><p>2018.06.23</p></div>
                          <div class="td-item red"><p>草稿</p></div>
                          <div class="td-item"><p>商城首页</p></div>
                          <div class="td-item txt-rt"><a href="javascript:void(0);">编辑</a><a href="javascript:void(0);"  title="" data-html=true data-toggle="popover" data-placement="bottom" data-content='<dl class="link-copy-panel"><dt>确定复制？</dt><dd><button type="button" class="btn btn-md btn-auxiliary">确定</button><button type="button" class="btn btn-md btn-white">取消</button></dd></dl>' class="link-copy">复制</a><a href="javascript:void(0);">预览</a><a href="javascript:void(0);">推广</a><a href="javascript:void(0);">删除</a><a href="javascript:void(0);">启用</a></div>
                        </div>
                        <div class="row-panel">
                          <div class="td-item"><p>首页<span class="icon iconfont icon-edit"></span></p></div>
                          <div class="td-item"><p>2018.06.23</p></div>
                          <div class="td-item red"><p>草稿</p></div>
                          <div class="td-item"><p>商城首页</p></div>
                          <div class="td-item txt-rt"><a href="javascript:void(0);">编辑</a><a href="javascript:void(0);"  title="" data-html=true data-toggle="popover" data-placement="bottom" data-content='<dl class="link-copy-panel"><dt>确定复制？</dt><dd><button type="button" class="btn btn-md btn-auxiliary">确定</button><button type="button" class="btn btn-md btn-white">取消</button></dd></dl>' class="link-copy">复制</a><a href="javascript:void(0);">预览</a><a href="javascript:void(0);">推广</a><a href="javascript:void(0);">删除</a><a href="javascript:void(0);">启用</a></div>
                        </div>
                        <div class="row-panel">
                          <div class="td-item"><p>首页<span class="icon iconfont icon-edit"></span></p></div>
                          <div class="td-item"><p>2018.06.23</p></div>
                          <div class="td-item red"><p>草稿</p></div>
                          <div class="td-item"><p>商城首页</p></div>
                          <div class="td-item txt-rt"><a href="javascript:void(0);">编辑</a><a href="javascript:void(0);"  title="" data-html=true data-toggle="popover" data-placement="bottom" data-content='<dl class="link-copy-panel"><dt>确定复制？</dt><dd><button type="button" class="btn btn-md btn-auxiliary">确定</button><button type="button" class="btn btn-md btn-white">取消</button></dd></dl>' class="link-copy">复制</a><a href="javascript:void(0);">预览</a><a href="javascript:void(0);">推广</a><a href="javascript:void(0);">删除</a><a href="javascript:void(0);">启用</a></div>
                        </div>
                        <div class="row-panel">
                          <div class="td-item"><p>首页<span class="icon iconfont icon-edit"></span></p></div>
                          <div class="td-item"><p>2018.06.23</p></div>
                          <div class="td-item red"><p>草稿</p></div>
                          <div class="td-item"><p>商城首页</p></div>
                          <div class="td-item txt-rt"><a href="javascript:void(0);">编辑</a><a href="javascript:void(0);"  title="" data-html=true data-toggle="popover" data-placement="bottom" data-content='<dl class="link-copy-panel"><dt>确定复制？</dt><dd><button type="button" class="btn btn-md btn-auxiliary">确定</button><button type="button" class="btn btn-md btn-white">取消</button></dd></dl>' class="link-copy">复制</a><a href="javascript:void(0);">预览</a><a href="javascript:void(0);">推广</a><a href="javascript:void(0);">删除</a><a href="javascript:void(0);">启用</a></div>
                        </div>
                        <div class="row-panel">
                          <div class="td-item"><p>首页<span class="icon iconfont icon-edit"></span></p></div>
                          <div class="td-item"><p>2018.06.23</p></div>
                          <div class="td-item red"><p>草稿</p></div>
                          <div class="td-item"><p>商城首页</p></div>
                          <div class="td-item txt-rt"><a href="javascript:void(0);">编辑</a><a href="javascript:void(0);"  title="" data-html=true data-toggle="popover" data-placement="bottom" data-content='<dl class="link-copy-panel"><dt>确定复制？</dt><dd><button type="button" class="btn btn-md btn-auxiliary">确定</button><button type="button" class="btn btn-md btn-white">取消</button></dd></dl>' class="link-copy">复制</a><a href="javascript:void(0);">预览</a><a href="javascript:void(0);">推广</a><a href="javascript:void(0);">删除</a><a href="javascript:void(0);">启用</a></div>
                        </div>
                        <div class="row-panel">
                          <div class="td-item"><p>首页<span class="icon iconfont icon-edit"></span></p></div>
                          <div class="td-item"><p>2018.06.23</p></div>
                          <div class="td-item red"><p>草稿</p></div>
                          <div class="td-item"><p>商城首页</p></div>
                          <div class="td-item txt-rt"><a href="javascript:void(0);">编辑</a><a href="javascript:void(0);"  title="" data-html=true data-toggle="popover" data-placement="bottom" data-content='<dl class="link-copy-panel"><dt>确定复制？</dt><dd><button type="button" class="btn btn-md btn-auxiliary">确定</button><button type="button" class="btn btn-md btn-white">取消</button></dd></dl>' class="link-copy">复制</a><a href="javascript:void(0);">预览</a><a href="javascript:void(0);">推广</a><a href="javascript:void(0);">删除</a><a href="javascript:void(0);">启用</a></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> 
                <div class="clear h15"></div>
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-lg-4"></div>
                        <div class="col-lg-8">
                            <ul class="pagination justify-content-end">
                                <li class="page-item disabled">
                                    <span class="page-link">共1000条</span>
                                </li>
                                <li class="page-item disabled">
                                    <span class="page-link">上一页</span>
                                </li>
                                <li class="page-item"><a class="page-link" href="#">1</a></li>
                                <li class="page-item active">
                                    <span class="page-link">
                                    2
                                    <span class="sr-only">(current)</span>
                                    </span>
                                </li>
                                <li class="page-item"><a class="page-link" href="#">3</a></li>
                                <li class="page-item">
                                    <a class="page-link" href="#">下一页</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="clear h20"></div>
              </div>
            </div>
          </div>
          <div class="tab-pane fade" id="web-mall" role="tabpanel" aria-labelledby="web-mall-tab">
            <div class="page-management-panel">
              <div class="page-nav-list">
                <a href="javascript:void(0);" class="on">商城首页</a>
                <a href="javascript:void(0);">商品详情页</a>
                <a href="javascript:void(0);">活动页</a>
              </div>
              <div class="container-fluid">
                <div class="row">
                  <div class="col-lg-6"><button type="button" class="btn btn-md btn-auxiliary">新建页面</button></div>
                  <div class="col-lg-6"><div class="w240 fr"><label class="search-module"><i class="icon iconfont icon-close-bg"></i><i class="icon iconfont icon-search"></i><input class="form-control" type="search" placeholder="Search"></label></div></div>
                </div>
                <div class="clear h15"></div>
                <div class="row">
                  <div class="table-wrapper table-empty table-lg table-row-10">
                    <div class="table-panel">
                      <div class="thead-panel">
                        <div class="row-panel">
                          <div class="th-item">页面名称</div>
                          <div class="th-item">创建时间</div>
                          <div class="th-item">状态</div>
                          <div class="th-item">页面类型</div>
                          <div class="th-item txt-rt" style="width:320px">操作</div>
                        </div>
                      </div>
                      <div class="tbody-panel">
                      </div>
                    </div>
                  </div>
                </div> 
                <div class="clear h15"></div>
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-lg-4"></div>
                        <div class="col-lg-8">
                            <ul class="pagination justify-content-end">
                                <li class="page-item disabled">
                                    <span class="page-link">共1000条</span>
                                </li>
                                <li class="page-item disabled">
                                    <span class="page-link">上一页</span>
                                </li>
                                <li class="page-item"><a class="page-link" href="#">1</a></li>
                                <li class="page-item active">
                                    <span class="page-link">
                                    2
                                    <span class="sr-only">(current)</span>
                                    </span>
                                </li>
                                <li class="page-item"><a class="page-link" href="#">3</a></li>
                                <li class="page-item">
                                    <a class="page-link" href="#">下一页</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="clear h20"></div>
              </div>
            </div>
          </div>
          <div class="tab-pane fade" id="mini-app" role="tabpanel" aria-labelledby="mini-app-tab">
            <div class="page-management-panel">
              <div class="page-nav-list">
                <a href="javascript:void(0);" class="on">商城首页</a>
                <a href="javascript:void(0);">底部主菜单</a>
              </div>
              <div class="container-fluid">
                <div class="row">
                  <div class="col-lg-6"><button type="button" class="btn btn-md btn-auxiliary">新建页面</button></div>
                  <div class="col-lg-6"><div class="w240 fr"><label class="search-module"><i class="icon iconfont icon-close-bg"></i><i class="icon iconfont icon-search"></i><input class="form-control" type="search" placeholder="Search"></label></div></div>
                </div>
                <div class="clear h15"></div>
                <div class="row">
                  <div class="table-wrapper table-lg table-row-10">
                    <div class="table-panel">
                      <div class="thead-panel">
                        <div class="row-panel">
                          <div class="th-item">页面名称</div>
                          <div class="th-item">创建时间</div>
                          <div class="th-item">状态</div>
                          <div class="th-item">页面类型</div>
                          <div class="th-item txt-rt" style="width:320px">操作</div>
                        </div>
                      </div>
                      <div class="tbody-panel">
                        <div class="row-panel">
                          <div class="td-item"><p>首页<span class="icon iconfont icon-edit"></span></p></div>
                          <div class="td-item"><p>2018.06.23</p></div>
                          <div class="td-item yellow"><p>已修改未发布</p></div>
                          <div class="td-item"><p>商城首页</p></div>
                          <div class="td-item txt-rt"><a href="javascript:void(0);">编辑</a><a href="javascript:void(0);">复制</a><a href="javascript:void(0);">预览</a><a href="javascript:void(0);">推广</a><a href="javascript:void(0);">删除</a><a href="javascript:void(0);">启用</a></div>
                        </div>
                        <div class="row-panel">
                          <div class="td-item"><p>首页<span class="icon iconfont icon-edit"></span></p></div>
                          <div class="td-item"><p>2018.06.23</p></div>
                          <div class="td-item red"><p>草稿</p></div>
                          <div class="td-item"><p>商城首页</p></div>
                          <div class="td-item txt-rt"><a href="javascript:void(0);">编辑</a><a href="javascript:void(0);">复制</a><a href="javascript:void(0);">预览</a><a href="javascript:void(0);">推广</a><a href="javascript:void(0);">删除</a><a href="javascript:void(0);">启用</a></div>
                        </div>
                        <div class="row-panel">
                          <div class="td-item"><p>首页<span class="icon iconfont icon-edit"></span></p></div>
                          <div class="td-item"><p>2018.06.23</p></div>
                          <div class="td-item red"><p>草稿</p></div>
                          <div class="td-item"><p>商城首页</p></div>
                          <div class="td-item txt-rt"><a href="javascript:void(0);">编辑</a><a href="javascript:void(0);">复制</a><a href="javascript:void(0);">预览</a><a href="javascript:void(0);">推广</a><a href="javascript:void(0);">删除</a><a href="javascript:void(0);">启用</a></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> 
                <div class="clear h15"></div>
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-lg-4"></div>
                        <div class="col-lg-8">
                            <ul class="pagination justify-content-end">
                                <li class="page-item disabled">
                                    <span class="page-link">共1000条</span>
                                </li>
                                <li class="page-item disabled">
                                    <span class="page-link">上一页</span>
                                </li>
                                <li class="page-item"><a class="page-link" href="#">1</a></li>
                                <li class="page-item active">
                                    <span class="page-link">
                                    2
                                    <span class="sr-only">(current)</span>
                                    </span>
                                </li>
                                <li class="page-item"><a class="page-link" href="#">3</a></li>
                                <li class="page-item">
                                    <a class="page-link" href="#">下一页</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="clear h20"></div>
              </div>
            </div>
          </div>
        </div>
        
    </div>
</template>

<style lang="scss">
@import "../../../assets/scss/core/setting";
@import "../../../assets/scss/core/css3";
@import "../../../assets/scss/core/mixin";

#myTab .nav-item {
  margin: 0 30px -1px;
}
.page-nav-list {
  width: 150px;
  @extend %fl;
  border: 1px solid #eaeaea;
  padding-bottom: 60px;
  position: absolute;
  left: 0;
  top: 15px;
  a {
    display: block;
    width: 100%;
    height: 40px;
    margin-bottom: 10px;
    padding: 0 10px 0 30px;
    overflow: hidden;
    line-height: 40px;
    &:hover {
      text-decoration: inherit;
      color: $primary;
    }
  }
  a.on {
    background: #f7f7f7;
  }
}
.page-management-panel {
  width: 100%;
  @extend %clearfix;
  padding: 15px 0 0 165px;
  min-height: 500px;
}

</style>

<script>
$(function() {
  $('[data-toggle="popover"]').popover(); 
});
export default {
  name: "PageManagement",
  data: function() {
    return {};
  },
  methods: {},
  mounted: function() {}
};
</script>
