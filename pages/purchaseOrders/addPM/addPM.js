// pages/purchaseOrders/addPM/addPM.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    item: {
      materials: {
        title: "采购原料",
        select_all: false,//全选
        list: [
          {
            title: "李锦记生抽1750ml",
            number: "242423423525",
            price: "120",
            unit: "瓶",
            stockQuantity: "5",
            purchaseQuantity: "20",
            checked:true
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
        btnName: "确认采购"
      }
    }
  },
  jumpPage:function(){
    var that = this
    var list = that.data.item.materials.list;
    var arry=[];
    for (let i = 0; i < list.length; i++) {
      if (list[i].checked == false) {
        continue;
      } else {
        arry.push(list[i]);
      }
    }
    // var list = JSON.stringify(that.data.item.materials.list);
    var curList = JSON.stringify(arry);
    wx.navigateTo({
      url: '/pages/purchaseOrders/PODetail/PODetail?list=' + curList,
    })
  },
  checkAll:function(){
    var that = this
    var list = that.data.item.materials.list;
    list.forEach(item => {
  　  item.checked = (!that.data.item.materials.select_all)
　　 })
    // for (let i = 0; i < list.length; i++){
    //   list[i].checked = (!that.data.item.materials.select_all)
    // }
    that.setData({
      ["item.materials.list"]: list,
      ["item.materials.select_all"]: (!that.data.item.materials.select_all)
    })
  },
  checkOne:function(event){
    var that = this
    var list = that.data.item.materials.list;
    var flag=true;
    var index = event.currentTarget.dataset.index;
    list[index].checked = (!list[index].checked)
    
    for (let i = 0; i < list.length; i++) {
      if (list[i].checked==false) {
        flag = false;
        break;
      } else {
        flag = true;
      }
    }
    that.setData({
      ["item.materials.list"]: list,
      ["item.materials.select_all"]: flag
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    var list = that.data.item.materials.list;
    var flag = true;
    for (let i = 0; i < list.length; i++) {
      if (list[i].checked == false) {
        flag = false;
        break;
      } else {
        flag = true;
      }
    }
    that.setData({
      ["item.materials.select_all"]: flag
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