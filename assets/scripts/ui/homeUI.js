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
        var self = this;
        var userObj = JSON.parse(Global.userInfo);
        cc.loader.load(userObj.head, function (err, tex) {

            cc.textureCache.addImage(userObj.head);

            var sf = new cc.SpriteFrame(tex);
            self.head.spriteFrame = sf;
        });

        this.username.string = userObj.name;
        this.integral.string = "积分：" + userObj.integral;
        //cc.find("Cannons/addDialog", this.node); //


    },
    onEnter: function () {

        this._super();

    },

    onLoad: function () {
        cc.log("-----------------UI-HOME");
        this._super();
        var self = this;
        if (!Global.userInfo) {
            cc.director.loadScene('login');
            return;
        }


        var btnSet = cc.find("Canvas/UI/btn/set");
        btnSet.on('mousedown', function (event) {
            var addDialog = cc.find("Canvas/UI/addDialog");
            //var addDialog = this.node.getChildByName("UI").getChildByName("addDialog");
            // 创建一个移动动作
            var actionBy = cc.moveTo(0.5, cc.p(0, 0));
            addDialog.runAction(actionBy);
        }, this);


        // var te = cc.loader.loadRes(userObj.head, cc.SpriteFrame, function (err, spriteFrame) {
        //     return spriteFrame;
        // });
        // this.head.spriteFrame = te;
        //
        // this.head.Texture = realUrl;


    },

//加入房间
    startCallback: function (event) {
        cc.log('加入房间');
        Global.socket.emit("join", sys.localStorage.getItem("userinfo"));

    },
//创建房间
    addCallback: function (event) {
        Global.socket.emit("event", "Hello");
        cc.log('创建房间');
    },
//退出登录
    logoutCallback: function (event) {
        Global.socket.emit("online", "{state:1}");
        cc.log('系统退出');
        cc.director.loadScene('login');
    }
})
;
