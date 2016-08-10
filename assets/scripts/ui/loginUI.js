var config = require("config");
var baseUi = require("baseUi");
baseUi.extend({
    properties: {},

    init: function () {
        this._super();

    },
    onEnter: function () {
        this._super();
    },

    onLoad: function () {
        this._super();

    },
    weixinCallBank: function () {
        cc.log('微信登录');
        var data = {type: "weixin", value: "1"};
        this.socket.emit("login", JSON.stringify(data));
    },
    mobileCallBank: function () {
        cc.log("本地存储：" + this.userinfo);
        cc.log('手机号登录');
        var data = {type: "mobile", value: "2"};
        this.socket.emit("register", JSON.stringify(data));
    },

});
