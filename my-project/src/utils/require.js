
export function require(option) {
    var { url, method, data } = option;

    wx.showLoading({
      title: 'Loading...', //提示的内容,
      mask: true, //显示透明蒙层，防止触摸穿透,
    });

    return new Promise((resolve, reject) => {
        wx.request({
            url,
            method,
            success: res => {
                wx.hideLoading();
                console.log(res.data);
                resolve(res.data);
            },
            fail: (err) => {
                wx.hideLoading();
                wx.showToast({
                  title: '请求失败', //提示的内容,
                  mask: true, //显示透明蒙层，防止触摸穿透,
                });
            },
            complete: () => {
                wx.hideLoading();
            }
            
        });
    })


}

