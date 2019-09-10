// components/like/index.js
Component({

  properties:{
    like:{
      type:Boolean
    },
    count:{
      type:Number
    }
  },

  /**
   * 页面的初始数据
   */
  data: {
    yesSrc: "images/like.png",
    noSrc: "images/like@dis.png"
  },

  methods: {
    onLike: function (event) {
      let like = this.properties.like
      let count = this.properties.count

      count = like?count-1:count+1

      this.setData({
        count:count,
        like:!like
      })

    }
  }
})