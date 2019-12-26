// pages/Search/search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cancel:"取消",
    authorRanking:"热门搜索",
    authorRankingCKQB:"查看全部",
    searchHistory:"搜索历史",
    searchList:[],
    historyList:[{
      content:"人类简史"
    },
    {
      content:"斗罗大陆"
    }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.request({
      url: 'https://wujunhui.xyz/getbooks',
      success: (res) => {
        this.setData({
          searchList: res.data.slice(0 , 3)
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

  }
})