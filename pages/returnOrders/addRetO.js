// pages/returnOrders/addRetO.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    item: {
      selTitle: "从历史退货单导入",
      basicInfo: {
        title: "基本信息",
        list: [
          {
            title: "退货单号",
            content: "12412412"
          },
          {
            title: "供应商",
            content: "苏州中百"
          },
          {
            title: "退货日期",
            content: "2019-02-08"
          },
          {
            title: "退货时间",
            content: "12:00"
          },
          {
            title: "备注",
            content: "上午送货，下午不在"
          },
        ]

      },
      materials: {
        title: "退货原料",
        mUrl: "/pages/returnOrders/addRetM/addRetM",
      }
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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