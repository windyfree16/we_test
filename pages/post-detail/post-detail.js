var postData = require('../../posts-data/data.js');
Page({
  data: {

  },
  onLoad: function(options){

    var postId = options.id
    var detail = postData.postList[postId]

    this.data.currentPostId = postId

    this.setData({
      info : detail
    })

    // 取出缓存列表
    var collection_list = wx.getStorageSync('collection_list');
    if (collection_list) {
      // 缓存列表存在，则取出当前文章的收藏状态
      var collection = collection_list[postId]
      
      this.setData({
        collection  : collection
      })

    } else {
      // 缓存列表不存在
      var collection_list = {}
      collection_list[postId] = false
      wx.setStorageSync('collection_list', collection_list)
    }

  },
  onCollectionTap: function(event) {
    var collection_list = wx.getStorageSync('collection_list')
    var collection = collection_list[this.data.currentPostId]
    collection = !collection
    collection_list[this.data.currentPostId] = collection
    wx.setStorageSync('collection_list', collection_list)
    this.setData({
      collection: collection
    })
  }
})