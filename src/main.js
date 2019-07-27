import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


//样式导入
//Elementui
// import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';
// Vue.use(ElementUI);

//mint-ui
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css'
Vue.use(Mint);

//mui
import "./css/hello-mui/css/mui.min.css"
import './css/hello-mui/css/icons-extra.css'

//icon引入
import "./assets/iconfont/iconfont.css"
import "./assets/iconfont/iconfont.ttf"


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
