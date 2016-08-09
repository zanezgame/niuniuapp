var config = require("config");
cc.Class({
    extends: cc.Component,
    socket: null,
    userinfo: null,

    init: function () {
        if (!cc.sys.isNative) {
            window.io = require('socket.io');
            cc.log("is not Native");
        } else {
            window.io = SocketIO;
            cc.log("isNative");
        }

    },
    onEnter: function () {
    },

    onLoad: function () {
        //获取用户本地存储信息
        if (!this.userinfo) {
            this.userinfo = sys.localStorage.getItem("userinfo");
        }

        var bgurl = cc.url.raw("resources/music/bg.mp3");
        //加载背景音乐
        cc.audioEngine.playMusic(bgurl, true);
        cc.audioEngine.playMusic("res/music/bg", true);
        cc.audioEngine.rewindMusic();

        if (!cc.sys.isNative) {
            this.socket = io(config.url);
        } else {
            this.socket = io.connect(config.url);
        }

        // // join和leave
        // io.on('connection', function(socket){
        //  socket.join('some room');
        //  // socket.leave('some room');


        // });


        //连接服务器成功执行
        this.socket.on('connect', function () {
            cc.log("服务器连接成功！");

        });
        //服务器默认信息
        this.socket.on('message', function (obj) {
            cc.log("message:" + obj);

        });


        //上线通知
        this.socket.on('online', function (obj) {
            cc.log("上线通知");
            var data = JSON.parse(obj);
            switch (data.type) {
                case 1:
                    cc.log("broadcast:init");
                    cc.log("playId:" + data.playId);
                    cc.log("userName:" + data.userName);
                    break;

            }
            cc.log("data:" + obj);

        });

        this.socket.on('disconnect', function () {
            cc.log("服务器断开！");
        });

        //服务器登录
        this.socket.on('login', function (data) {
            var obj = JSON.parse(data);

            cc.log("服务器登录成功返回：" + obj.msg);
            if (obj.state == 0) {
                sys.localStorage.setItem("userinfo", data);
                cc.director.loadScene('home');
            } else {
                cc.log("login:" + obj.msg);
            }
        });
    },
});
