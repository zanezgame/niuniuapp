var config = require("config");
cc.extend({
    extends: cc.Component,
    properties: {},

    start: function () {
        this._super();
    },
    onEnter: function () {
        this._super();
    },

    onLoad: function () {
        this._super();
        Global.userInfo = sys.localStorage.getItem("userinfo");
        Global.roomInfo = sys.localStorage.getItem("roominfo");
        if (Global.userInfo) {
            cc.director.loadScene("home");
            return;
        }

        //var btnWeixin = cc.find("Canvas/btn/mobile").addComponent(cc.bottom);
        //btnWeixin.on('mousedown', function (event) {
        //    cc.log('微信登录');
        //    var data = {openid: 123};
        //    Global.socket.emit("login", JSON.stringify(data));
        //}, this);

    },


});
