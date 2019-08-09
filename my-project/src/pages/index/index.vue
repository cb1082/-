<template>
  <div class="home">
        <div class="imgbox">
          <img src="/static/images/imgs/guide_bg.jpg" alt="">
        </div>
        <button open-type="getUserInfo" lang="zh_CN" @getuserinfo="getUserInfo">开始学习</button>
  </div>
</template>

<script>
export default {
    methods: {
      getUserInfo(e){
        console.log(e.mp.detail.userInfo);
        if(e.mp.detail.userInfo){
          this.$store.dispatch('getUser',e.mp.detail.userInfo);
          this.$store.dispatch('getisAuthenticated',true);
        }
        this.getcode();
      },
      getcode(){
        wx.login({
          success: res => {
            console.log(res.code);
              this.getOpenId(res.code)
          }
        });
      },
      getOpenId(code){
        const appid='wx675ab5105eface13';
        const secret='e448a071b720fa7e7d1033c8f65cdd0d';
        const url=this.$interface.getOpenid+appid+'/'+secret+'/'+code;
         this.$require({
           url,
           method:'GET'
         }).then(res=>{
              this.$store.dispatch('getopenId',res.openid);
              wx.navigateTo({ url: '/pages/home/main' });
              
         })
      }
    },


}
</script>

 <style scoped>


.home{
    height: 100%;
    position: relative;
    
}
.imgbox{
  height: 100%;
}
div img{
    width: 100%;
    height: 100%;
    display: block;
}
.home button{
    position: absolute;
    bottom: 50px;
    left: 0;
    right: 0;
    margin: auto;
    display: block;
    width: 200px;
    height: 50px;
    background: blue;
    color: white;
    line-height: 50px;
}

</style>


