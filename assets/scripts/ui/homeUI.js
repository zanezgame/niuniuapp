var config = require("config");
var baseUi = require("baseUi");
baseUi.extend({
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

    start: function () {
        this._super();
        cc.log("-----------------start");
        var self = this;
        if (!this.userinfo) {
            cc.director.loadScene('login');
        }
        var userObj = JSON.parse(this.userinfo);
        cc.loader.load(userObj.data.head, function (err, tex) {

            cc.textureCache.addImage(userObj.data.head);

            var sf = new cc.SpriteFrame(tex);
            self.head.spriteFrame = sf;


        });

        this.username.string = userObj.data.name;
        this.integral.string = "积分：" + userObj.data.integral;
    },
    onEnter: function () {
        cc.log("-----------------onEnter");
        this._super();
        var label = new cc.LabelTTF("test", "", 36);
        this.addChild(label);
        label.setPosition(cc.winSize.width / 2, cc.winSize.height / 2);
    },

    onLoad: function () {
        cc.log("-----------------onLoad");
        var self = this;
        this._super();

        // var te = cc.loader.loadRes(userObj.data.head, cc.SpriteFrame, function (err, spriteFrame) {
        //     return spriteFrame;
        // });
        // this.head.spriteFrame = te;
        //
        // this.head.Texture = realUrl;


    },

    //加入房间
    startCallback: function (event) {
        cc.director.loadScene('banker');
        this.socket.emit("join", "{state:1}");
        cc.log('加入房间');
    },
    //创建房间
    addCallback: function (event) {
        this.socket.emit("event", "Hello");
        cc.log('创建房间');
    },
    //退出登录
    logoutCallback: function (event) {
        this.socket.emit("online", "{state:1}");
        cc.log('系统退出');
        cc.director.loadScene('login');
    },
});
