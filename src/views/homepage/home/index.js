
import Vue from 'vue'
import App from './indexApp'
import MintUI from 'mint-ui'

Vue.use(MintUI);
new Vue({
  render: h => h(App)
}).$mount('#app')
