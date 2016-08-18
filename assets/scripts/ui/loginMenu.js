var config = require("config");
var baseMenu = require("baseMenu");
baseMenu.extend({
    properties: {
        audioMng: cc.Node
    },
    // use this for initialization
    onLoad: function () {
        this._super();
    },
    weixinCallBank: function () {
        var data = {type: "weixin", dlm: "13983087661", dlip: "127.0.0.1", zhlx: 2, sjid: 0, pic: ""};
        Global.socket.emit("login", JSON.stringify(data));
        cc.log('微信登录');
    },
    mobileCallBank: function () {
        var data = {type: "phone", dlm: "13983087661", dlip: "127.0.0.1", zhlx: 2, sjid: 0, pic: ""};
        Global.socket.emit("login", JSON.stringify(data));
        cc.log('手机号登录');

    },
});
