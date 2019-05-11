// pages/stock/stockDetail/stockDetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    item: {
      title: "原料名称",
      content: "大虾",
      basicInfo: {
        title: "基本信息",
        list: [
          {
            title: "收货单号",
            content: "12312124"
          },
          {
            title: "供应商",
            content: "苏州中百"
          },
          {
            title: "收货日期",
            content: "2019-02-08"
          },
          {
            title: "收货时间",
            content: "12:00"
          },
          {
            title: "备注",
            content: "上午送货，下午不在"
          },
        ]

      },
      materials: {
        title: "各仓库库存信息",
        mUrl: "/pages/receivingOrders/addRecM/addRecM",
        list: [
          {
            title: "AA仓库",
            number: "242423423525",
            price: "120",
            unit: "瓶",
            stockQuantity: "5",
            purchaseQuantity: "20"
          },
          {
            title: "BBBBB仓库",
            number: "242423SD423525",
            price: "1200",
            unit: "瓶",
            stockQuantity: "5",
            purchaseQuantity: "20"
          },
        ]
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