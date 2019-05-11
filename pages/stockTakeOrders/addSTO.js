// pages/stockTakeOrders/addSTO.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    item: {
      basicInfo: {
        title: "基本信息",
        list: [
         
          {
            title: "盘点仓库",
            content: "分仓"
          },
          {
            title: "按库位分区盘点",
  
          },
        ]

      },
      materials: {
        title: "盘点原料",
        mUrl: "/pages/stockTakeOrders/addSTM/addSTM",
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