// pages/homepage/homepage.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    nav:[
      {
        title:"采购单",
        iconClass:"icon-zhidingcaigoudan",
        url:"/pages/purchaseOrders/purchaseOrders"
      },
      {
        title: "收货单",
        iconClass: "icon-shouhuodan",
        url: "/pages/receivingOrders/addRecO"
      },
      {
        title: "退货单",
        iconClass: "icon-tuihuodan",
        url: "/pages/returnOrders/addRetO"
      },
      {
        title: "仓库盘点",
        iconClass: "icon-warehouse-inventory",
        url: "/pages/stockTakeOrders/addSTO"
      },
      {
        title: "当前库存",
        iconClass: "icon-dangqiankucun",
        url: "/pages/stock/stockList/stockList"
      },
      {
        title: "设置",
        iconClass: "icon-shezhi"
      },
      {
        title: "单据查询",
        iconClass: "icon-danjuchaxun",
        url: "/pages/receipt/receipt"
      },
      
    ]
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