//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },

  onLoad: function () {
    
  },
  getUserInfo: function(e) {
    
  },
  onDateOfBirth: function (e) {
    console.log(e.detail.date);
    // this.setData({
    //   dateOfBirth: e.detail.date
    // })
  },
})
