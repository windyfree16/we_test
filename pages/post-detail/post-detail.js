var postData = require('../../posts-data/data.js');
Page({
  data: {

  },
  onLoad: function(options){

    var postId = options.id
    var detail = postData.postList[postId]

    this.setData({
      info : detail
    })
    
  }
})