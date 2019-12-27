// pages/Recharge/recharge.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    focus:true,
    rechargeBoxTopText:"充值",
    recharge:"充值余额(元)",
    rmb:"￥",
    confrim:"确认付款(元)",
    next:"支付",
    inputVal:"",
    bankStyle:"中国银行卡",
    bankNumB:"0288",
    recharges:"充值",
    raymet:"付款方式",
    payStateTExt:"指纹验证或",
    payStateA:"输入密码",
    confrimRmb:"250.00",
    orderinfor:"订单信息",
    payBox: true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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

  },
  pay: function (){
    this.setData({
      payBox: false
    })
  },
  vv (e){
    this.setData({
      inputVal: e.detail.value 
    })
  },
  over (){
    this.setData({
      payBox: true
    })
  }
})