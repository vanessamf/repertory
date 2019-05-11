// pages/stockTakeOrders/STODetail/STODetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    item: {
      flag: null,//未提交
      basicInfo: {
        title: "基本信息",
        list: [
          {
            title: "盘点仓库",
            content: "分仓"
          },
          {
            title: "盈亏金额",
            content: "0.00"
          },
        ]

      },
      materials: {
        title: "盘点原料",
        mUrl: "/pages/stockTakeOrders/addSTOM/addSTOM",
        list: [
          {
            title: "AA李锦记生抽1750ml",
            number: "242423423525",
            price: "120",
            unit: "瓶",
            stockQuantity: "5",
            purchaseQuantity: "20"
          }
        ]
      }
    }
  },
  jumpToHomepage: function () {
    wx.reLaunch({
      url: '/pages/homepage/homepage'
    })
  },
  jumpPage: function () {
    var that = this
    var flag = that.data.item.flag;
    var list = that.data.item.basicInfo.list;
    var curList = JSON.stringify(list)
    wx.navigateTo({
      url: '/pages/stockTakeOrders/STOList/STOList?list=' + curList + '&flag=' + flag,
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    var list = JSON.parse(options.list ? options.list : null);
    var curList;
    if (list != null) {
      curList = that.data.item.materials.list.concat(list);
    } else {
      curList = that.data.item.materials.list
    }

    // console.log(curList);
    that.setData({
      ["item.flag"]: options.flag ? options.flag : 0,
      ["item.materials.list"]: curList ? curList : null
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

  }
})