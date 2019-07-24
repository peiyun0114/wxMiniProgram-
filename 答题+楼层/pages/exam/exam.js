import examData from '../../utils/mockList'
console.log(examData);
// pages/exam/exam.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    examData : examData.mocklist,
    curdataIndex : 0
  },
  changeCur : function(e) {
    let {curdataIndex}= this.data;
    curdataIndex = e.currentTarget.dataset.flag === "true" ? curdataIndex + 1 : curdataIndex - 1
    this.setData({ curdataIndex: curdataIndex})
  },
  showVal : function(e) {
    let {examData,curdataIndex} = this.data;
    console.log(e.detail);
    if(examData[curdataIndex].type === 'radio') {
      examData[curdataIndex].optionSelect.forEach(item => {
        item.xh === e.detail.value ? item.flag = true : item.flag = false
      })
      console.log(examData);
      this.setData({examData : examData})
    } else if (examData[curdataIndex].type === 'checkout') {
      examData[curdataIndex].optionSelect.forEach(item => {
        e.detail.value.join("").includes(item.xh) ? item.flag = true : item.flag = false
      })
      this.setData({ examData: examData })
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