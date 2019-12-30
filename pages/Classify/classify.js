// pages/Classify/classify.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    is:false,
    searchText:"搜索...",
    list:[],
    num:5.3,
    aa: 0,
    sortRanking:"新上架",
    sortRankingCKQB:"查看全部",
    sixDiagram:[],
    sixDiagrams:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.request({
      url: 'https://wujunhui.xyz/getfenleilist',
      success: (res) => {
        this.setData({
          list: res.data
        })
      }
    });
    wx.request({
      url: 'https://wujunhui.xyz/getbooks',
      success: (res) => {
        this.setData({
          sixDiagram: res.data.slice(0 ,3),
          sixDiagrams: res.data.slice(0 , 6)
        })
      }
    });
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
  click (e) {
    this.setData({
      aa: e.currentTarget.dataset.a
    })
  }
})