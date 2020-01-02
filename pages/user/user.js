// pages/user/user.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    signin:false,
    my:"我的",
    gwc:"购物车",
    unsignin:"请登录",
    list:[],
    shareFX:"分享",
    follow:"关注",
    like:"喜欢",
    ggsz:"设置",
    fans:"粉丝",
    followPage:"1286",
    likePage:"6673",
    fansPage:"3368",
    personalInformation:"个人信息",
    myNews:"我的消息",
    accountBalance:"账户余额",
    myComments:"我的评论",
    myNewsText:6,
    goText:"1375.00",
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.request({
      url: 'https://wujunhui.xyz/getwriters',
      success: (res) => {
        console.log(res)
        this.setData({
          list: res.data[0]
      })
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    return {
      title:"",
      desc:""
    }
  },
  signinClick: function (){
    this.setData({
      signin: true
    })
  },
  user (even){
    console.log(even)
  }
})