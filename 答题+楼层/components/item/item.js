// components/item/item.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    tiList : null,
    curIndex : Number
  },

  /**
   * 组件的初始数据
   */
  data: {
    
  },

  /**
   * 组件的方法列表
   */
  methods: {
    selectChange: function ({detail}) {
      console.log(this.data.tiList);
      this.triggerEvent('getVal',detail)
    }
  }
})
