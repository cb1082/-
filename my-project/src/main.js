import Vue from 'vue'
import App from './App'
import store from './store/index'
import face from './utils/interface'
import { require }  from './utils/require'
console.log(face);
Vue.prototype.$store=store;
Vue.prototype.$require=require;
Vue.prototype.$interface=face.interfaces;
Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue(App)
app.$mount()
