import vue from  'vue';
import vuex from  'vuex';
import actions from './action';
import getters from './getter';
import mutations from './mutations';

const state ={
    userInfo:{},
    isAuthenticated:false,
    openId:'',

}
vue.use(vuex);
export default new vuex.Store({
    state,
    actions,
    getters,
    mutations
})
