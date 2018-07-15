<template>
    <div class="container-fluid router-panel bg-graylight">
        <div class="clear h30"></div>
        <div class="row interval-wrapper">
          <div class="col-lg-6">
            <div class="row">
              <div class="col-lg-2 title-panel">价格区间：</div>
              <div class="col-lg-10 interval-panel">
                <button type="button" class="btn btn-md btn-auxiliary">区间添加</button>
                <div class="clear h30"></div>
                <div class="interval-wrap">
                  <div class="interval-select">
                    <div class="btn-group w160 fl">
                      <input type="text" class="form-control input-md" value="100" />
                    </div>
                    <span>-</span>
                    <div class="btn-group w160 fl">
                      <input type="text" class="form-control input-md" value="200" />
                    </div>
                  </div>
                  <button type="button" class="btn btn-md btn-auxiliary">确定</button>
                  <p>说明：时间为整点</p>
                </div>
                <div class="clear h30"></div>
                <ul class="interval-list">
                  <li><span class="start-item">100</span><span class="and-txt">-</span><span class="end-item">200</span><i class="close"></i></li>
                  <li><span class="start-item">200</span><span class="and-txt">-</span><span class="end-item">300</span><i class="close"></i></li>
                  <li><span class="start-item">300</span><span class="and-txt">-</span><span class="end-item">800</span><i class="close"></i></li>
                  <li><span class="start-item">800</span><span class="and-txt">-</span><span class="end-item">1500</span><i class="close"></i></li>
                  <li><span class="start-item">1500</span><span class="and-txt">-</span><span class="end-item">2500</span><i class="close"></i></li>
                  <li><span class="start-item">2500</span><span class="and-txt">-</span><span class="end-item">5000</span><i class="close"></i></li>
                  <li><span class="start-item">5000</span><span class="and-txt">-</span><span class="end-item">8000</span><i class="close"></i></li>
                  <li><span class="start-item">8000</span><span class="and-txt">-</span><span class="end-item">12000</span><i class="close"></i></li>
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
  name: "FilterPriceRangeSettings",
  props: [],
  mounted: function() {
  },
  methods: {
    
  },
};
</script>
