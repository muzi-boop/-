//logs.js
const util = require('../../utils/util.js')
Page({
  data: {
    flag:true,
    topBoxTitle: "探索",
    messageBox:[],
    showinfo:[],
  },
  onLoad:function (){
    wx.request({
      url: 'https://wujunhui.xyz/getbooks',
      success: (res)=>{
        this.setData({
          messageBox:res.data
        })
      }
    });
    wx.request({
      url: 'https://wujunhui.xyz/getwriters',
      success : (res) => {
        this.setData({
          showinfo: res.data.slice(3, 4)
        })
      }
    })
  },
  click:function (event){
    console.log(event)
   this.setData({
     flag: false,
   })
  },
  clicks: function (){
    this.setData({
      flag: true
    })
  }
})

