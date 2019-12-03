//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    userInfo: null,
    latitude: 23.099994,
    longitude: 113.324520,
    markers: [{
      id: 1,
      latitude: 23.099994,
      longitude: 113.324520,
      name: 'T.I.T 创意园'
    }],
    covers: [{
      latitude: 23.099994,
      longitude: 113.344520,
      iconPath: '/image/location.png'
    }, {
      latitude: 23.099994,
      longitude: 113.304520,
      iconPath: '/image/location.png'
    }]
  },
  getCenterLocation: function () {
    this.mapCtx.getCenterLocation({
      success: function(res){
        console.log(res.longitude)
        console.log(res.latitude)
      }
    })
  },
  moveToLocation: function () {
    this.mapCtx.moveToLocation()
  },
  translateMarker: function() {
    this.mapCtx.translateMarker({
      markerId: 1,
      autoRotate: true,
      duration: 1000,
      destination: {
        latitude:23.10229,
        longitude:113.3345211,
      },
      animationEnd() {
        console.log('animation end')
      }
    })
  },
  includePoints: function() {
    this.mapCtx.includePoints({
      padding: [10],
      points: [{
        latitude:23.10229,
        longitude:113.3345211,
      }, {
        latitude:23.00229,
        longitude:113.3345211,
      }]
    })
  },

  // getUserInfo() {
  //   if (!this.$parent.globalData.userInfo) {
  //     wepy.getUserInfo({
  //       success: res => {
  //         console.log(123, res)
  //         // this.userInfo = this.$parent.globalData.userInfo = res.userInfo
  //         // this.$apply()
  //       },
  //       fail: err => {
  //         console.log(34, err)
  //       }
  //     })
  //   } else {
  //     this.userInfo = this.$parent.globalData.userInfo
  //   }
  // }

  getLocationInfo () {
    wx.getLocation({
      type: 'wgs84',
      success: (res) => {
        this.latitude = res.latitude
        this.longitude = res.longitude
        this.speed = res.speed
        this.accuracy = res.accuracy
        this.mapCtx = wx.createMapContext('myMap')
      }
    })
  },

  onLoad () {
    // this.getUserInfo()
    this.getLocationInfo()
  }
})
