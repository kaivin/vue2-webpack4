import Vue from 'vue'
import Index from 'views/Index'
import router from '@/router/router'

import '@/assets/scss/custom.scss'
import "@/assets/scss/Public.scss";
import '@/assets/scss/ResetBootstrapStyle.scss'
import '@/assets/scss/iconfont.css'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(Index)
}).$mount('#app');

