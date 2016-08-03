var config = require("config");


cc.Class({
    extends: cc.Component,

    properties: {
        connect:{
            default:null,
            type:cc.Label
        },
    },
    socket:null,
    data:{name:'wuhong',age:23},
    ctro:function(){
        if (!cc.sys.isNative) {
            window.io=require('socket.io');
            cc.log("is not Native");
        }else {
            window.io = SocketIO;
            cc.log("isNative");
        }
    },

    onLoad: function () {
        
        if (!cc.sys.isNative) {
            this.socket= io(config.url);
        }else {
            this.socket=io.connect(config.url);
        }
         
        this.socket.on('connection', function(socket){
            cc.log("connect");
        });
        this.socket.on('connect', function(){
            cc.log("connect");
        });
      
        this.socket.on('disconnect', function(){
            cc.log("disconnect");
        });
         this.socket.on('event', function(data){
            cc.log("hh:"+data);
        });
         this.socket.on('login', function(data){
            cc.log("login:"+data);
        });
      
 
    },
    button_callback:function(){
       
        this.socket.emit("login",'wuhong');
    }

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
