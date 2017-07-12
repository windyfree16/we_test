var postData = require('../../posts-data/data.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {


    this.setData({
      data: postData.postList
    });

  },
  onPostTap: function (event) {
    // 获取 id 值
    var postId = event.currentTarget.dataset.postid;

    // 跳转页面
    wx.navigateTo({
      url: '/pages/post-detail/post-detail?id=' + postId,
    })

  }
})