//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    copyTxt: "需要复制的测试内容"
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  textPaste() {

    wx.setClipboardData({
      data: this.data.copyTxt,
      success: (res) => {
        wx.getClipboardData({
          //复制成功
          success: (res) => {
            wx.showToast({
              title: '复制成功',
            })
          }
        })
      }
    })
  }
})