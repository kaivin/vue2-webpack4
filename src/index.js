import Vue from 'vue'
import Index from 'views/Index/app'


Vue.config.productionTip = false

new Vue({
  render: h => h(Index)
}).$mount('#app');

