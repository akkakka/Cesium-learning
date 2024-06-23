Cesium.Ion.defaultAccessToken='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJiNDBjNjg0ZC1iODNlLTQ3NTMtOTU1Ny02NzVjMzI0ZDMyNTUiLCJpZCI6NTkxNTQsImlhdCI6MTY0MDY5ODIyNn0.JFAkOoVRCkKM-25T3oX5XxbPXk6RCIuTCLpVdvv4AoU';
var viewer = new Cesium.Viewer('cesiumContainer', {
  animation: false,//控制视图动画的播放速度
  timeline: false,//时间线，指示当前时间
  homeButton: true,//视角返回初始位置
  navigationHelpButton: false,//导航帮助按钮
  geocoder:false,//查找工具
  sceneModePicker:true, //选择视角模式
  fullscreenButton:false,//全屏按钮
  baseLayerPicker:true,//图层按钮
  
});

