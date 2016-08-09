var config = require("config");
var baseUI = require("BaseUi");
baseUI.extend({
    properties: {
        connect: {
            default: null,
            type: cc.Label
        },
        head: {
            default: null,
            type: cc.Sprite
        },
        username: {
            default: null,
            type: cc.Label
        },
        integral: {
            default: null,
            type: cc.Label
        }
    },
    init: function () {
        this._super();

    },
    onEnter: function () {
        this._super();
        var label = new cc.LabelTTF("test", "", 36);
        this.addChild(label);
        label.setPosition(cc.winSize.width / 2, cc.winSize.height / 2);
    },

    onLoad: function () {
        this._super();
        if (!this.userinfo) {
            cc.director.loadScene('login');
        }
        var userObj = JSON.parse(this.userinfo);
        var realUrl = cc.url.raw(userObj.data.head);
        var txt = cc.loader.load(userObj.data.head, function (err, tex) {
            // return tex;
            var sp = new spriteFrame(tex);
            Node.addChild(sp)
            cc.log('Should load a texture from external url: ' + (tex instanceof cc.Texture2D));
        });
        // var te = cc.loader.loadRes(userObj.data.head, cc.SpriteFrame, function (err, spriteFrame) {
        //     return spriteFrame;
        // });
        // this.head.spriteFrame = te;
        //
        // this.head.Texture = realUrl;
        this.username.string = userObj.data.name;
        this.integral.string = userObj.data.integral;

    },

    //加入房间
    startCallback: function (event) {
        cc.director.loadScene('play');
        cc.log('start');
    },
    //创建房间
    addCallback: function (event) {
        this.socket.emit("event", "Hello");
        cc.log('add');
    },
    //退出登录
    logoutCallback: function (event) {
        this.socket.emit("online", "{state:1}");
        cc.log('系统退出');
        cc.director.loadScene('login');
    },
});
