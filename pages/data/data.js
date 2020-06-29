Page({


  //Fetch data from API
  fetchData: function () {
    wx.request({
      url: 'http://lab.isaaclin.cn/nCoV/api/overall',
      success: (res) => {
        let results = res.data.results[0];
        console.log(results)

        let utcTime = res.data.results[0].updateTime;
        let dateNormal = new Date(utcTime);

        let dateString = dateNormal.toLocaleDateString();
        results.updateTime = dateString; 
        
        this.setData({ results })
    
        }
    })
  },

  //Display data when MP loads
  onLoad: function () {
    this.fetchData();
  }
})