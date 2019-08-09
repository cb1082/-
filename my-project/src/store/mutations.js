export default{
    setUser(state,params){
        console.log(params);
        state.userInfo=params;

    },
    setisAuthenticated(state,params){
        state.isAuthenticated=params;
    },
    setopenId(state,params){
        state.openId=params;
    }
}