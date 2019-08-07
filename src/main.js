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


//导入vue-resource
import VueResource from 'vue-resource'
Vue.use(VueResource)

//设置请求的根路径
Vue.http.options.root = 'http://www.liulongbin.top:3005'

//导入格式化时间的插件
import moment from "moment"
//定义全局的过滤器
Vue.filter('dataFormat',function(dataStr,pattern="YYYY-MM-DD HH:mm:ss"){
 return moment(dataStr).format(pattern)
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
