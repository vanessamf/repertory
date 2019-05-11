// pages/stock/stockList/stockList.js
var util = require('../../../utils/util.js') 
Page({

  /**
   * 页面的初始数据
   */
  data: {
    item: {
      url: "../StockDetail/StockDetail",
      materials: {
        title: "收货原料",
        select_all: false,//全选
        list: [
          {
            title: "李锦记生抽1750ml",
            number: "242423423525",
            price: "120",
            unit: "瓶",
            stockQuantity: "5",
            purchaseQuantity: "20",
            checked: true
          },
          {
            title: "西红柿",
            number: "242423868423525",
            price: "1.2",
            unit: "斤",
            stockQuantity: "500",
            purchaseQuantity: "100",
            checked: true
          },
          {
            title: "芹菜",
            number: "24242168423525",
            price: "1.2",
            unit: "斤",
            stockQuantity: "500",
            purchaseQuantity: "100",
            checked: true
          },
          {
            title: "蒜苔",
            number: "242423868423525",
            price: "1.2",
            unit: "斤",
            stockQuantity: "500",
            purchaseQuantity: "100",
            checked: true
          },
          {
            title: "西红柿",
            number: "242423868423525",
            price: "1.2",
            unit: "斤",
            stockQuantity: "500",
            purchaseQuantity: "100",
            checked: true
          },
          {
            title: "西红柿",
            number: "242423868423525",
            price: "1.2",
            unit: "斤",
            stockQuantity: "500",
            purchaseQuantity: "100",
            checked: true
          },
        ],
        btnName: "确认收货"
      },
      isHidden: true,
      currentDate: util.formatTime2(new Date),
      dayStyle: [
        // { 
        //   month: 'current', day: new Date().getDate(), color: 'white', background: '#AAD4F5'
        // }, 
        {
          month: 'current', day: new Date().getDate(), color: 'white', background: '#16c4bb'
        }
      ]
    }
  },
  toggleCalendar: function () {
    let isHidden = this.data.item.isHidden;
    if (isHidden) {
      this.setData({
        ["item.isHidden"]: false
      })
    } else {
      this.setData({
        ["item.isHidden"]: true
      })
    }
  },
  hiddenCalendar: function (event) {
    let isHidden = this.data.item.isHidden;
    this.setData({
      ["item.isHidden"]: true
    })

  },
  methods: {

  },

  //给点击的日期设置一个背景颜色 
  dayClick: function (event) {
    let that = this;
    let currentDate = that.data.item.currentDate;
    let changeDate = "item.currentDate";
    let year = event.detail.year;
    let month = event.detail.month > 9 ? event.detail.month : "0" + event.detail.month;
    let day = event.detail.day > 9 ? event.detail.day : "0" + event.detail.day;
    let clickDate = year + "-" + month + "-" + day;
    let clickDay = event.detail.day;
    let dayStyle = that.data.item.dayStyle;
    let changeDay = "item.dayStyle[" + 0 + "].day";
    let changeBg = "item.dayStyle[" + 0 + "].background";
    dayStyle.push({
      month: 'current', day: clickDay, color: 'white', background: '#84e7d0'
    });

    that.setData({
      // ["item.dayStyle"]: dayStyle,
      [changeDay]: clickDay,
      [changeBg]: "#16c4bb",
      [changeDate]: clickDate,
      ["item.isHidden"]: true
    })
  },
  stopPropagation: function () {
    // 阻止冒泡
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // var that = this;
    // var list = JSON.parse(options.list);
    // var listItem = [{
    //   "number": list[0].content,
    //   "supplier": list[1].content,
    //   "deliveryDate": "",
    //   "applicationDate": "",
    //   "flag": options.flag,
    // }]
    // var curList = listItem.concat(this.data.item.orders.list);
    // that.setData({
    //   ["item.orders.list"]: curList ? curList : null
    // })
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