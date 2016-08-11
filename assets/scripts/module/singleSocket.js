var single = function () {

    var singleSocket;

    function getInstance() {

        if (singleSocket === undefined) {
            singleSocket = new socketObj();
        }

        return singleSocket;

    }


    function socketObj() {
        if (this.socket != null) {
            return;
        }

        if (!cc.sys.isNative) {
            window.io = require('socket.io');
            cc.log("is not Native");
        } else {
            window.io = SocketIO;
            cc.log("isNative");
        }

        if (!cc.sys.isNative) {
            this.socket = io(config.url);
        } else {
            this.socket = io.connect(config.url);
        }


        //连接服务器成功执行
        this.socket.on('connect', function () {
            cc.log("服务器连接成功！");

        });
        //服务器默认信息
        this.socket.on('message', function (obj) {
            cc.log("message:" + obj);

        });


        //加入房间成功
        this.socket.on('join', function (data) {
            console.log("传入参数：" + data);
            sys.localStorage.setItem("roominfo", data);
            cc.director.loadScene('banker');
        });

        //离开房间
        this.socket.on('leave', function (data) {
            console.log("传入参数：" + data);
            sys.localStorage.remove("roominfo");
            cc.director.loadScene('home');

        });


        //广播信息，根据不同的广播类型进行不同的业务处理
        this.socket.on('broadcast', function (data) {
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


        this.socket.on('scene', function (data) {
            switch (data) {
                case 1://抢庄
                    cc.director.loadScene('banker');
                    break;
                case 2://投注
                    cc.director.loadScene('betting');
                    break;
                case 3://开奖
                    cc.director.loadScene('player');
                    break;
                case 4://成绩
                    cc.director.loadScene('score');
                    break;
                default://主页
                    cc.director.loadScene('home');
                    break;
            }

        });

        this.socket.on('logout', function () {
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

    }

    return {
        getInstance: getInstance
    }

}