var config = require("config");
var baseUi = require("baseUi");
baseUi.extend({
    properties: {},

    start: function () {
        this._super();
    },
    onEnter: function () {
        this._super();
    },

    onLoad: function () {
        this._super();
        //var btnWeixin = cc.find("Canvas/btn/mobile").addComponent(cc.bottom);
        //btnWeixin.on('mousedown', function (event) {
        //    cc.log('微信登录');
        //    var data = {openid: 123};
        //    Global.socket.emit("login", JSON.stringify(data));
        //}, this);

    },



});
