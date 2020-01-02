// pages/BookDetail/bookDetail.js
const app = getApp()


Page({

  /**
   * 页面的初始数据
   */
  data: {
    stateX:false,
    stateF:false,
    stateS:false,
    disK:false,
    share:false,
    list:null,
    closeShare:"/image/x.png",
    pYq:"/image/pengyouquan.png",
    kJ:"/image/kongjian.png",
    vB:"/image/weibo.png",
    qQ:"/image/QQ.png",
    libOk:"好的",
    libarText:"已经将这本书加入到个人书架",
    collection:"收藏",
    shAre:"分享",
    book:"书籍",
    detail:"详情",
    cataLeft:"查看目录",
    commmentLeftText:"评论",
    commmentLeftA:"215 条评论",
    bookBottomLeft:"试看",
    bookBottomright:"购买",
    commentA:"/pages/Comment/comment",
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

  },

  collXClick: function (){
    this.setData({
      stateX : !this.data.stateX
    })
  },
  collFClick : function (){
    this.setData({
      share: true
    })
  },
  collSClick:function () {
    this.setData({
      disK : true
    })
  },
  libarOk: function (){
    this.setData({
      disK:false
    })
  },
  shareBox: function (){
    this.setData({
      share: false
    })
  },
  ex (){
    this.setData({
      disK:false
    })
  },
  mpo(e){
    console.log(e);
  }
})