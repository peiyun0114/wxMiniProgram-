/**
 * 楼层效果，数据为自己写的后台
 * 无排版
 */
Page({
  /**
   * 页面的初始数据
   */
  data: {
    carList : {},
    toId : "A",
    classkey : "A",
    saveTitle : []
  },
  // 利用scroll-into-view="{{toId}}"属性
  toViewFn : function(e) {
    console.log(e.target.id)
    this.setData({ 
      toId: e.target.id,
      classkey : e.target.id
    })
  },
  // 获取数据时，遍历数据改变classkey
  handleScroll : function(e) {
    let event = e;
    let {saveTitle} = this.data;
      let eTop = event.detail.scrollTop;
    saveTitle.forEach((item,ind) => {
      if(eTop > item.top && eTop <= saveTitle[ind+1].top) {
        this.setData({
          classkey : item.id
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let _this = this
    wx.request({
      url: "http://localhost:3001/api/cardata",
      success(res) {
        console.log(res);
        _this.setData({carList : res.data},() => {
          // 获取每一项的scroll高
          const query = wx.createSelectorQuery();
          query.selectAll('.countList').boundingClientRect(el => {
            let len = el.length - 1;
            el.push({
              "top": el[len].top + el[len].height,
              "id" : el[len].id 
            });
            console.log(el);
            _this.setData({ saveTitle : el})
          }).exec();
        })
      }
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