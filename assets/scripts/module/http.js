var config=require("config");
var http =cc.Class({
    extends: cc.Component,
  properties:{
  name:null,
  url:null ,
  socket:null
  },
  onLoad:function(){
      if(url){
       this.url=config.url;
      }
      // 判断是否是 native 环境， 如果是则不能够引用， 因为 native 提供原生的 SocketIO实现
        if (!cc.sys.isNative) {
            // 使用相对路径， 不需要包含 .js 后缀
            window.io=require('socket.io');
            cc.log("is not Native");
        }else {
            // 原生环境中 io 变量未定义， 导出的变量实际上是 SocketIO
            window.io = SocketIO;
            cc.log("isNative");
        }
        
         if (!cc.sys.isNative) {
            this.socket= io(this.url);
        }else {
        // 原生环境中 io 变量未定义， 导出的变量实际上是 SocketIO
         this.socket=io.connect(this.url);
        }
        
        this.socket.on('connect', function(){
            cc.log("connect");
        });
      
        this.socket.on('disconnect', function(){
            cc.log("disconnect");
        });
         this.socket.on('event', function(data){
            cc.log("event"+data);
        });
  }
});
 module.exports = http;
 