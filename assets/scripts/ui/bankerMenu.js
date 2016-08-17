var config = require("config");
var baseMenu = require("baseMenu");
baseMenu.extend({

    properties: {},

    // use this for initialization
    onLoad: function () {

    },

//抢庄
    grabCallback: function (event) {
        cc.log('抢庄');
        //Global.socket.emit("grab", sys.localStorage.getItem("userinfo"));
        cc.director.loadScene("betting");

    },
//放弃
    noGrabCallback: function (event) {
        Global.socket.emit("noGrab", "Hello");
        cc.log('放弃');
    },
//退出房间
    logoutCallback: function (event) {
        Global.socket.emit("online", "{state:1}");
        cc.log('退出房间');
        cc.director.loadScene('login');
    }
});
