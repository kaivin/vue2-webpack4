<template>
    <div class="container-fluid router-panel">
        <div class="mock-nav">
            <div class="mock-nav-item"><router-link to="/MockDataTest/NavDataList">导航数据</router-link></div>
        </div>
        <div class="mock-panel"><router-view/></div>
    </div>
</template>

<script>
import "@/assets/scss/Mock.scss";
export default {
  name: "MockDataTest",
  data: function() {
    return {};
  },
  methods: {},
  mounted: function() {}
};
</script>
