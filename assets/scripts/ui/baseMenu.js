var socketUtil = require("SocketUtil");
cc.Class({
    extends: cc.Component,

    properties: {},

    // use this for initialization
    onLoad: function () {
        socketUtil.init();
    },

    bettingCallback: function (event) {
        Global.socket.emit("online", "{state:1}");
        cc.log('开注界面');
        cc.director.loadScene('player');
    },
    //退出房间
    logoutRoomCallback: function (event) {
        Global.socket.emit("leave", Global.userInfo);

    },
//退出登录
    logoutCallback: function (event) {
        Global.socket.emit("logout", Global.userInfo);
        cc.log('系统退出');
    }
});
