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
        cc.log('微信登录');
        var data = {type: "mobile", value: "2"};
        cc.director.loadScene("home");
        // Global.socket.emit("login", JSON.stringify(data));
    },
    mobileCallBank: function () {
        cc.log('手机号登录');
        var data = {type: "mobile", value: "2"};
        Global.socket.emit("login", JSON.stringify(data));
    },
});
