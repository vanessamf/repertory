// pages/purchaseOrders/purchaseOrders.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    item: {
      selTitle: "选择采购模板",
      basicInfo: {
        title: "基本信息",
        list: [
          {
            title: "采购单号",
            content: "124214214124124"
          },
          {
            title: "供应商",
            content: "苏州中百"
          },
          {
            title: "要求收货日期",
            content: "2019-02-08"
          },
          {
            title: "备注",
            content: "上午送货，下午不在"
          },
        ]

      },
      materials: {
        title: "采购原料",
        mUrl:"/pages/purchaseOrders/addPM/addPM",
        // list: [
        //   {
        //     title: "李锦记生抽1750ml",
        //     number: "242423423525",
        //     price: "120",
        //     unit: "瓶",
        //     stockQuantity: "5",
        //     purchaseQuantity: "20"
        //   },
        //   {
        //     title: "西红柿",
        //     number: "242423868423525",
        //     price: "1.2",
        //     unit: "斤",
        //     stockQuantity: "500",
        //     purchaseQuantity: "100"
        //   }
        // ]
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