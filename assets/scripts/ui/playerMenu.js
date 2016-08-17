var config = require("config");
var baseMenu = require("baseMenu");
baseMenu.extend({

    properties: {
        // foo: {
        //    default: null,      // The default value will be used only when the component attaching
        //                           to a node for the first time
        //    url: cc.Texture2D,  // optional, default is typeof default
        //    serializable: true, // optional, default is true
        //    visible: true,      // optional, default is true
        //    displayName: 'Foo', // optional
        //    readonly: false,    // optional, default is false
        // },
        // ...
    },

    // use this for initialization
    onLoad: function () {

    },

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
    //退出房间
    logoutCallback: function (event) {
        Global.socket.emit("online", "{state:1}");
        cc.log('系统退出');
        cc.director.loadScene('home');
    },
    //成绩公布
    scoreCallback: function (event) {
        Global.socket.emit("online", "{state:1}");
        cc.log('系统退出');
        cc.director.loadScene('score');
    }
});
