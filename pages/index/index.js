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
    bordercolors: [],
    date: [{
      touxiang: "https://wujunhui.xyz/fenlei1.png",
      http: "",
      type: "科幻"
    }, {
      touxiang: "https://wujunhui.xyz/fenlei2.png",
      http: "",
      type: "生活"
    }, {
      touxiang: "https://wujunhui.xyz/fenlei3.png",
      http: "",
      type: "露营"
    }, {
      touxiang: "https://wujunhui.xyz/fenlei1.png",
      http: "",
      type: "职场"
    }, {
      touxiang: "https://wujunhui.xyz/fenlei2.png",
      http: "",
      type: "言情"
    }, {
      touxiang: "https://wujunhui.xyz/fenlei3.png",
      http: "",
      type: "艺术"
    }, {
      touxiang: "https://wujunhui.xyz/fenlei1.png",
      http: "",
      type: "军事"
    }, {
      touxiang: "https://wujunhui.xyz/fenlei2.png",
      http: "",
      type: "科学"
    }],


    author: [{
      touxiang: "https://wujunhui.xyz/zz-lcx.png",
      http: "",
      name: "刘慈欣"
    }, {
        touxiang: "https://wujunhui.xyz/zz-txh.png",
      name: "田小花"
    }, {
        touxiang: "https://wujunhui.xyz/zz-meks.png",
      name: "马尔克斯"
    }, {
        touxiang: "https://wujunhui.xyz/fenlei1.png",
      name: "余秋雨"
    }, {
        touxiang: "https://wujunhui.xyz/zz-wzj.png",
      name: "王中军"
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
      title: "2018排行榜",
      http: "",
      id: 1,
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

    hotListBox: [{
      imgUrl: " https://wujunhui.xyz/book-santi.png",
      title: "三体：死神永生",
      name: "作者：刘慈欣",
      content: "刘慈欣创作的系列长篇科幻小说地球往事三部曲的第三部作品"
    }, {
      imgUrl: " https://wujunhui.xyz/book-wljs.png",
      title: "未来简史",
      name: "作者：刘慈欣",
      content: "刘慈欣创作的系列长篇科幻小说地球往事三部曲的第三部作品"
    }, {
      imgUrl: " https://wujunhui.xyz/book-xcjs.png",
      title: "乡村教师",
      name: "作者：刘慈欣",
      content: "刘慈欣创作的系列长篇科幻小说地球往事三部曲的第三部作品"
    }, {
      imgUrl: " https://wujunhui.xyz/book-pfdsj.png",
      title: "平凡的世界",
      name: "作者：刘慈欣",
      content: "刘慈欣创作的系列长篇科幻小说地球往事三部曲的第三部作品"
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function() {
    var srr = this.bordercolor();
    console.log(srr)
    this.setData({
      bordercolors: srr.sort((a, b) => {
        return Math.random() - 0.5;
      })
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
  }
})