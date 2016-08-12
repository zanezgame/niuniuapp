var config = require("config");
cc.Class({
    extends: cc.Component,
    start: function () {

    },
    onEnter: function () {
    },

    onLoad: function () {

        Global.userInfo = sys.localStorage.getItem("userinfo");
        Global.roomInfo = sys.localStorage.getItem("roominfo");

        var bgurl = cc.url.raw("resources/music/bg.mp3");
        //加载背景音乐
        cc.audioEngine.playMusic(bgurl, true);
        cc.audioEngine.playMusic("res/music/bg", true);
        cc.audioEngine.rewindMusic();
        if (Global.socket == null) {
            this.initSocket();
        }
    },
    update: function (dt) {
        // cc.log('定时器：' + dt);
    },
    initSocket: function () {

        if (!cc.sys.isNative) {
            window.io = require('socket.io');
            cc.log("is not Native");
        } else {
            window.io = SocketIO;
            cc.log("isNative");
        }

        if (!cc.sys.isNative) {
            Global.socket = io(config.url);
        } else {
            Global.socket = io.connect(config.url);
        }

        //连接中
        Global.socket.on('connecting', function () {
            cc.log("服务器连接中...");

        });
        //连接成功
        Global.socket.on('connect', function () {
            cc.log("服务器连接成功！");

        });
        //连接失败
        Global.socket.on('connect_failed', function () {
            cc.log("连接失败！");

        });
        //正在重连
        Global.socket.on('reconnecting', function () {
            cc.log("正在重连！");

        });
        //成功重连
        Global.socket.on('reconnect', function () {
            cc.log("成功重连！");

        });
        //重连失败
        Global.socket.on('reconnect_failed', function () {
            cc.log("成功重连！");

        });
        //服务器默认信息
        Global.socket.on('message', function (data) {
            // cc.log("message:" + data);

        });

        //广播信息，根据不同的广播类型进行不同的业务处理
        Global.socket.on('broadcast', function (data) {
            var obj = JSON.parse(data);
            cc.log("广播信息");
            switch (obj.type) {
                case "online":
                    cc.log(obj.data.name + "上线通知");
                    break;
                case "offline":
                    cc.log(obj.data.name + "下线通知");
                    break;
                case "intoroom":
                    cc.log(obj.data.name + "进入房间");
                    break;
                case "leaveroom":
                    cc.log(obj.data.name + "离开房间");
                    break;
            }

        });


        //登录成功
        Global.socket.on('login', function (data) {
            cc.log("Login服务端返回:" + data);
            var obj = JSON.parse(data);
            sys.localStorage.setItem("userinfo", JSON.stringify(obj.data));
            Global.userInfo = sys.localStorage.getItem("userinfo");
            cc.director.loadScene(obj.scene);

        });


        //加入房间
        Global.socket.on('join', function (data) {
            cc.log("join服务端返回:" + data);
            var obj = JSON.parse(data);
            sys.localStorage.setItem("roominfo", obj.data);
            cc.director.loadScene(obj.scene);
        });


        //离开房间
        Global.socket.on('leave', function (data) {
            cc.log("leave服务端返回:" + data);
            var obj = JSON.parse(data);
            sys.localStorage.remove("roominfo");
            cc.director.loadScene(obj.scene);
        });


        //场景切换
        Global.socket.on('scene', function (data) {
            cc.log("scene服务端返回:" + data);
            switch (parseInt(data)) {
                case 0:
                    cc.director.loadScene("banker");
                    cc.log("正在加载banker");
                    break;
                case 1:
                    cc.director.loadScene("betting");
                    cc.log("正在加载betting");
                    break;
                case 2:
                    cc.director.loadScene("player");
                    cc.log("正在加载player");
                    break;
                case 3:
                    cc.director.loadScene("score");
                    cc.log("正在加载score");
                    break;
                case 4:
                    cc.director.loadScene("banker");
                    cc.log("正在加载banker");
                    break;
            }


        });

        //场景切换
        Global.socket.on('logout', function (data) {
            cc.log("logout服务端返回:" + data);
            var obj = JSON.parse(data);
            sys.localStorage.removeItem("userinfo");
            cc.director.loadScene(obj.scene);
        });

    }
});
