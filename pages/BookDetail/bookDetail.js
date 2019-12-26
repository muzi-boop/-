// pages/BookDetail/bookDetail.js
const app = getApp()


Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:null,
    collection:"收藏",
    share:"分享",
    book:"书籍",
    detail:"详情",
    cataLeft:"查看目录",
    commmentLeftText:"评论",
    commmentLeftA:"215 条评论",
    comment:[{
      img:"https://wujunhui.xyz/zz-zdh.png",
      nickName:"你个废物",
      about:"听不懂，听不到，淘宝店，特别多，逃不掉，听不懂，听不到，淘宝店，特别多，逃不掉，听不懂，听不到，淘宝店，特别多，逃不掉，听不懂，听不到，淘宝店，特别多，逃不掉，听不懂，听不到，淘宝店，特别多，逃不掉，听不懂，听不到，淘宝店，特别多，逃不掉，听不懂，听不到，淘宝店，特别多，逃不掉，听不懂，听不到，淘宝店，特别多，逃不掉，听不懂，听不到，淘宝店，特别多，逃不掉，到，淘宝店，特别多，逃不掉，听不懂，听不到，淘宝店，特别多，逃不掉，听不懂，听不到，淘宝店，特别多，逃不掉，听不懂，听不到，淘宝店，特别多，逃不掉，听不懂，听不到，淘宝店，特别多，逃不掉，听不懂，听不到，淘宝店，特别多，逃不掉",
      datas:"12-04 21:20",
      num1:"134",
      num2:"89"
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    this.setData({
      list: app.globalData.indexContent
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

  }
})