var config = require("config");
var socketUtil = require("SocketUtil");
cc.Class({
    extends: cc.Component,
    properties: {
        connect: {
            default: null,
            type: cc.Label
        },

    },
    start: function () {

    },
    onEnter: function () {
    },
    enemyPool: null,
    onLoad: function () {
        Global.userInfo = sys.localStorage.getItem("userinfo");
        Global.roomInfo = sys.localStorage.getItem("roominfo");
        Global.players = sys.localStorage.getItem("players");

        this.enemyPool = new cc.NodePool()

        var bgurl = cc.url.raw("resources/music/bg.mp3");
        //加载背景音乐
        cc.audioEngine.playMusic(bgurl, true);
        cc.audioEngine.playMusic("res/music/bg", true);
        cc.audioEngine.rewindMusic();
        socketUtil.init();
    },
    update: function (dt) {
        // cc.log('定时器：' + dt);
    },

    //加载玩家请求
    initPlayer: function () {
        Global.socket.emit("leave", Global.userInfo);
        var userPrefab = cc.instantiate(this.playerPrefab);
        var userObj = JSON.parse(Global.userInfo);

        this.node.addChild(userPrefab);
        userPrefab.setPosition(-500, -100);

        var player = userPrefab.getComponent("Player");
        player.init(userObj);

    },
    showMsg: function (msg) {

        var label = this.getComponent(cc.Label);
        label.string = msg;
        this.node.addChild(label);

        var seq = cc.sequence(cc.moveBy(0.5, 200, 0), cc.moveBy(0.5, -200, 0));
        label.node.runAction(seq);


    }
});
