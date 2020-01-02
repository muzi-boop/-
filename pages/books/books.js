// pages/books/books.js

const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    topBoxTitle: "书架",
    readLeft: "正在阅读",
    unreadLeft:"未读",
    wholes: "查看全部",
    readBox: [],
    unreadBox: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function() {
    wx.request({
      url: 'https://wujunhui.xyz/getbooks',
      success : (res) => {
        this.setData({
          readBox: res.data.slice(0 , 3),
          unreadBox: res.data.slice(0 , 12)
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },
  contentHttp: function (event) {
    console.log(event)
    app.globalData.indexContent = event.currentTarget.dataset.num
    console.log(app.globalData.indexContent)
  }
})