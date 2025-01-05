var posts=["2024/09/06/Bing部署/","2018/05/03/Git基本使用教程/","2024/09/17/本地运行大语言模型/","2024/11/10/救赎/","2024/11/23/不是哥们零成本搭建/","2025/01/05/CNN/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };