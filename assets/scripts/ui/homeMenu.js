var config = require("config");
var baseMenu = require("baseMenu");
baseMenu.extend({
    properties: {},

    // use this for initialization
    onLoad: function () {

    },

    //加入房间
    startCallback: function (event) {
        var parms = {uid: userinfoObj.id, desktype: 1, desknum: "", deskpwd: ""}
        Global.socket.emit("join", JSON.stringify(parms));
        cc.log('加入房间');

    },
//创建房间
    addCallback: function (event) {
        var userinfoObj = JSON.parse(Global.userInfo);
        var parms = {uid: userinfoObj.id, pwd: "888888"}
        Global.socket.emit("newroom", JSON.stringify(parms));
        cc.log('创建房间');
    },
});
