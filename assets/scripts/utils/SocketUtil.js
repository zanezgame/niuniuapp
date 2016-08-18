var config = require("config");
var socketUtil = {
    init: function () {
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
            cc.log("broadcast:" + data);
            var obj = JSON.parse(data);
            switch (obj.type) {
                case "login":
                    cc.log(obj.data.nickNmae + "上线通知");
                    break;
                case "online":
                    cc.log(obj.data.nickNmae + "上线通知");
                    break;
                case "offline":
                    cc.log(obj.data.nickNmae + "下线通知");
                    break;
                case "join":
                    cc.log(obj.data.nickNmae + "进入房间");
                    break;
                case "leave":
                    cc.log(obj.data.nickNmae + "离开房间");
                    break;
                case "logout"://用户退出广播
                    cc.log(obj.data.nickNmae + "退出登录");
                    break;
            }

        });


        //场景切换广播
        Global.socket.on('scene1', function (data) {
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


        //登录成功
        Global.socket.on('login', function (data) {
            cc.log("Login服务端返回:" + data);
            var obj = JSON.parse(data);
            sys.localStorage.setItem("userinfo", JSON.stringify(obj.data));
            Global.userInfo = sys.localStorage.getItem("userinfo");
            cc.director.loadScene("home");

        });


        //上线通知
        Global.socket.on('online', function (data) {
            cc.log("online:" + data);
            var obj = JSON.parse(data);
            cc.log(obj.data.nickNmae + "上线通知");

        });
        //下线通知
        Global.socket.on('offline', function (data) {
            var obj = JSON.parse(data);
            cc.log(obj.data.nickNmae + "上线通知");

        });


        //加入房间
        Global.socket.on('join', function (data) {
            cc.log("join服务端返回:" + data);
            var obj = JSON.parse(data);
            Global.roomInfo = obj.roominfo;
            Global.players = obj.players;
            sys.localStorage.setItem("roominfo", JSON.stringify(obj.roominfo));
            sys.localStorage.setItem("players", JSON.stringify(obj.players));
            switch (parseInt(obj.roominfo.state)) {
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


        //离开房间
        Global.socket.on('leave', function (data) {
            cc.log("leave服务端返回:" + data);
            var obj = JSON.parse(data);
            Global.roomInfo = null;
            if (sys.localStorage.getItem("roominfo")) {
                sys.localStorage.removeItem("roominfo");
            }
            cc.director.loadScene("home");
        });


        //系统退出
        Global.socket.on('logout', function (data) {
            cc.log("logout服务端返回:" + data);
            Global.userInfo = null;
            Global.roomInfo = null;
            sys.localStorage.removeItem("userinfo");
            sys.localStorage.removeItem("roominfo");
            cc.director.loadScene("login");
        });
    }
};

module.exports = socketUtil;

