//index.js
//获取应用实例
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    sortRanking: "分类排行",
    authorRanking: "作者排行",
    sortRankingCKQB: "查看全部",
    authorRankingCKQB: "查看全部",
    newReleaseRanking: "新发布",
    newReleaseRankingCKQB: "查看全部",
    slidingDirection: false,
    circulars: false,
    lengths: 3.5,
    hotlengths: 1.05,
    hot: "热门搜索",
    hotListRanking: "热销榜",
    hotListRankingCKQB: "查看全部",
    searchText:"搜索...",
    bordercolors: [],
    date: [],
    author: [],
    khurl:['/pages/Kh/Kh',''],
    sixDiagram: [],
    searchUrl:"/pages/Search/search",
    hotlist: [{
      title: "2018排行榜",
      http: "",
    }, {
        title: "职场热门",
      http: "",
    }, {
        title: "都是言情",
      http: "",
    }, {
        title: "哈弗大学经济管理类",
      http: "",
    }, {  
        title: "领导才能",
      http: "",
      }, {
        title: "2020清华大学录取线",
        http: "",
      }],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function() {
    var srr = this.bordercolor();
    console.log(srr);
    this.setData({
      bordercolors: srr.sort((a, b) => {
        return Math.random() - 0.5;
      })
    });
    wx.request({
      url: 'https://wujunhui.xyz/getfenleilist',
      success: (res) =>{
        this.setData({
          date: res.data
        })
      }
    });
    wx.request({
      url: 'https://wujunhui.xyz/getwriters',
      success: (res) => {
        this.setData({
          author : res.data
        })
      }
    });
    wx.request({
      url: 'https://wujunhui.xyz/getbooks',
      success : (res) => {
        this.setData({
          sixDiagram: res.data.slice(0 , 6)
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
  bordercolor: function() { //十六进制颜色随机
    var arr = [];
    var fun = function() {
      var r = Math.floor(Math.random() * 256);
      var g = Math.floor(Math.random() * 256);
      var b = Math.floor(Math.random() * 256);
      var color = '#' + r.toString(16) + g.toString(16) + b.toString(16);
      if (color === "#21272e" || color === "#000000"){
        color = "#ffffff";
        return color
      }else{
        return color;
      }
    }
    for (var i = 0; i < this.data.hotlist.length; i++) {
      arr.push(fun())
    }
    return arr;
  },
  contentHttp: function (event){
    console.log(event) 
      app.globalData.indexContent = event.currentTarget.dataset.num
    console.log(app.globalData.indexContent)
  }
})