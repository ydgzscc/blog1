var posts=["2024/09/06/Bing部署/","2018/05/03/Git基本使用教程/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };