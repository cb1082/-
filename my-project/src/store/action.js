export default{
      getUser({commit},params){
            commit('setUser',params);

      },
      getisAuthenticated({commit},params){
          commit('setisAuthenticated',params);
      },
      getopenId({commit},params){
            commit('setopenId',params);
            
      }
}