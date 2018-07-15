<template>
    <div class="container-fluid router-panel bg-graylight">
        <div class="clear h30"></div>
        <div class="row interval-wrapper">
          <div class="col-lg-6">
            <div class="row">
              <div class="col-lg-2 title-panel">专场数量：</div>
              <div class="col-lg-10 interval-content"><label for=""><input type="text" class="form-control" /><span>最多8场</span></label><p>说明：场数即为天数，不论设置几天，都是从当下今天开始算起，往后一次延伸几天</p></div>
            </div>
            <div class="clear h30"></div>
            <div class="row">
              <div class="col-lg-2 title-panel">时间区间：</div>
              <div class="col-lg-10 interval-panel">
                <button type="button" class="btn btn-md btn-auxiliary">区间添加</button>
                <div class="clear h30"></div>
                <div class="interval-wrap">
                  <div class="interval-select">
                    <div class="drop drop-block fl w160">
                        <div class="btn-group dropdown">
                            <div class="drop-input dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><a href="javascript:void(0);" class="btn-md">00:00:00</a><input type="text" class="form-control input-md" value="00:00:00" readonly /></div>
                            <div class="dropdown-menu">
                              <a class="dropdown-item" href="#">00:00:00</a>
                              <a class="dropdown-item" href="#">01:00:00</a>
                              <a class="dropdown-item" href="#">02:00:00</a>
                              <a class="dropdown-item" href="#">03:00:00</a>
                              <a class="dropdown-item" href="#">04:00:00</a>
                              <a class="dropdown-item" href="#">05:00:00</a>
                              <a class="dropdown-item" href="#">06:00:00</a>
                              <a class="dropdown-item" href="#">07:00:00</a>
                              <a class="dropdown-item" href="#">08:00:00</a>
                              <a class="dropdown-item" href="#">09:00:00</a>
                              <a class="dropdown-item" href="#">10:00:00</a>
                              <a class="dropdown-item" href="#">11:00:00</a>
                              <a class="dropdown-item" href="#">12:00:00</a>
                              <a class="dropdown-item" href="#">13:00:00</a>
                              <a class="dropdown-item" href="#">14:00:00</a>
                              <a class="dropdown-item" href="#">15:00:00</a>
                              <a class="dropdown-item" href="#">16:00:00</a>
                              <a class="dropdown-item" href="#">17:00:00</a>
                              <a class="dropdown-item" href="#">18:00:00</a>
                              <a class="dropdown-item" href="#">19:00:00</a>
                              <a class="dropdown-item" href="#">20:00:00</a>
                              <a class="dropdown-item" href="#">21:00:00</a>
                              <a class="dropdown-item" href="#">22:00:00</a>
                              <a class="dropdown-item" href="#">23:00:00</a>
                            </div>
                        </div>
                    </div>
                    <span>-</span>
                    <div class="drop drop-block fl w160">
                        <div class="btn-group dropdown">
                            <div class="drop-input dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><a href="javascript:void(0);" class="btn-md">00:00:00</a><input type="text" class="form-control input-md" value="00:00:00" readonly /></div>
                            <div class="dropdown-menu">
                              <a class="dropdown-item" href="#">00:00:00</a>
                              <a class="dropdown-item" href="#">01:00:00</a>
                              <a class="dropdown-item" href="#">02:00:00</a>
                              <a class="dropdown-item" href="#">03:00:00</a>
                              <a class="dropdown-item" href="#">04:00:00</a>
                              <a class="dropdown-item" href="#">05:00:00</a>
                              <a class="dropdown-item" href="#">06:00:00</a>
                              <a class="dropdown-item" href="#">07:00:00</a>
                              <a class="dropdown-item" href="#">08:00:00</a>
                              <a class="dropdown-item" href="#">09:00:00</a>
                              <a class="dropdown-item" href="#">10:00:00</a>
                              <a class="dropdown-item" href="#">11:00:00</a>
                              <a class="dropdown-item" href="#">12:00:00</a>
                              <a class="dropdown-item" href="#">13:00:00</a>
                              <a class="dropdown-item" href="#">14:00:00</a>
                              <a class="dropdown-item" href="#">15:00:00</a>
                              <a class="dropdown-item" href="#">16:00:00</a>
                              <a class="dropdown-item" href="#">17:00:00</a>
                              <a class="dropdown-item" href="#">18:00:00</a>
                              <a class="dropdown-item" href="#">19:00:00</a>
                              <a class="dropdown-item" href="#">20:00:00</a>
                              <a class="dropdown-item" href="#">21:00:00</a>
                              <a class="dropdown-item" href="#">22:00:00</a>
                              <a class="dropdown-item" href="#">23:00:00</a>
                            </div>
                        </div>
                    </div>
                  </div>
                  <button type="button" class="btn btn-md btn-auxiliary">确定</button>
                  <p>说明：时间为整点</p>
                </div>
                <div class="clear h30"></div>
                <ul class="interval-list">
                  <li><span class="start-item">00:00:00</span><span class="and-txt">-</span><span class="end-item">01:00:00</span><i class="close"></i></li>
                  <li><span class="start-item">00:00:00</span><span class="and-txt">-</span><span class="end-item">01:00:00</span><i class="close"></i></li>
                  <li><span class="start-item">00:00:00</span><span class="and-txt">-</span><span class="end-item">01:00:00</span><i class="close"></i></li>
                  <li><span class="start-item">00:00:00</span><span class="and-txt">-</span><span class="end-item">01:00:00</span><i class="close"></i></li>
                  <li><span class="start-item">00:00:00</span><span class="and-txt">-</span><span class="end-item">01:00:00</span><i class="close"></i></li>
                  <li><span class="start-item">00:00:00</span><span class="and-txt">-</span><span class="end-item">01:00:00</span><i class="close"></i></li>
                  <li><span class="start-item">00:00:00</span><span class="and-txt">-</span><span class="end-item">01:00:00</span><i class="close"></i></li>
                  <li><span class="start-item">00:00:00</span><span class="and-txt">-</span><span class="end-item">01:00:00</span><i class="close"></i></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-lg-6"></div>
        </div>
    </div>
</template>

<style lang="scss">

</style>

<script>
import "@/assets/scss/Main_Interval.scss";
export default {
  name: "FlaseSaleSettings",
  props: [],
  mounted: function() {
  },
  methods: {
    
  },
};
</script>
