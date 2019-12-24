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
    circulars: true,
    lengths: 3.5,
    hotlengths: 1.05,
    hot: "热门搜索",
    hotListRanking: "热销榜",
    hotListRankingCKQB: "查看全部",
    date: [{
      url: "https://wujunhui.xyz/fenlei1.png",
      http: "",
      title: "科幻"
    }, {
      url: "https://wujunhui.xyz/fenlei2.png",
      http: "",
      title: "生活"
    }, {
      url: "https://wujunhui.xyz/fenlei3.png",
      http: "",
      title: "露营"
    }, {
      url: "https://wujunhui.xyz/fenlei1.png",
      http: "",
      title: "职场"
    }, {
      url: "https://wujunhui.xyz/fenlei2.png",
      http: "",
      title: "爱好"
    }],


    author: [{
      url: "https://wujunhui.xyz/zz-lcx.png",
      http: "",
      title: "刘慈欣"
    }, {
      url: "https://wujunhui.xyz/zz-txh.png",
      title: "田小花"
    }, {
      url: "https://wujunhui.xyz/zz-meks.png",
      title: "马尔克斯"
    }, {
      url: "https://wujunhui.xyz/fenlei1.png",
      title: "余秋雨"
    }, {
      url: "https://wujunhui.xyz/zz-yqy.png",
      title: "爱好"
    }],

    sixDiagram: [{
        http: "",
        url: "https://wujunhui.xyz/book-santi.png",
        title: "三体：死神永生",
        name: "刘慈欣"
      }, {
        http: "",
        url: "https://wujunhui.xyz/book-rljs.png",
        title: "人类简史",
        name: "尤瓦尔·郝拉利"
      }, {
        http: "",
        url: "https://wujunhui.xyz/book-xsgmxj.png",
        title: "许三观卖血记",
        name: "余华"
      },
      {
        http: "",
        url: "https://wujunhui.xyz/book-wljs.png",
        title: "未来简史",
        name: "尤瓦尔·郝拉利"
      }, {
        http: "",
        url: "https://wujunhui.xyz/book-zsdjy.png",
        title: "自私的基因",
        name: "理查德·道金斯"
      }, {
        http: "",
        url: "https://wujunhui.xyz/book-bngd.png",
        title: "百年孤独",
        name: "马尔克斯"
      }
    ],

    hotlist: [{
      content: "2018排行榜",
      http: "",
      bordercolor: "#ab4065",
      hotcolor: "#ab4065"
    }, {
      content: "职场热门",
      http: "",
      bordercolor: "#00aaff",
        hotcolor: "#00aaff"
    }, {
      content: "都是言情",
      http: "",
      bordercolor: "#aa00ff",
        hotcolor: "#aa00ff"
    }, {
      content: "哈弗大学经济管理类",
      http: "",
        bordercolor: "#aaff00",
        hotcolor: "#aaff00"
    }, {
      content: "领导才能",
      http: "",
        bordercolor: "#dac0ff",
        hotcolor: "#dac0ff"
    }],

    hotListBox: [{
      imgUrl: " https://wujunhui.xyz/book-santi.png",
      title: "三体：死神永生",
      name: "作者：刘慈欣",
      content: "刘慈欣创作的系列长篇科幻小说地球往事三部曲的第三部作品"
    }, {
      imgUrl: " https://wujunhui.xyz/book-santi.png",
      title: "三体：死神永生",
      name: "作者：刘慈欣",
      content: "刘慈欣创作的系列长篇科幻小说地球往事三部曲的第三部作品"
    }, {
      imgUrl: " https://wujunhui.xyz/book-santi.png",
      title: "三体：死神永生",
      name: "作者：刘慈欣",
      content: "刘慈欣创作的系列长篇科幻小说地球往事三部曲的第三部作品"
    }, {
      imgUrl: " https://wujunhui.xyz/book-santi.png",
      title: "三体：死神永生",
      name: "作者：刘慈欣",
      content: "刘慈欣创作的系列长篇科幻小说地球往事三部曲的第三部作品"
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {},

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

  colorth: function() { //十六进制颜色随机
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    var color = '#' + r.toString(16) + g.toString(16) + b.toString(16);
    return color;
  }
})