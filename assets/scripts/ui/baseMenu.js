cc.Class({
    extends: cc.Component,

    properties: {},

    // use this for initialization
    onLoad: function () {

    },

    //加入房间
    startCallback: function (event) {
        cc.log('加入房间');
        //cc.director.loadScene("banker");
        Global.socket.emit("join", sys.localStorage.getItem("userinfo"));

    },
//创建房间
    addCallback: function (event) {
        Global.socket.emit("event", "Hello");
        cc.log('创建房间');
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
