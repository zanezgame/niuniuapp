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
        if (!Global.userInfo) {
            cc.director.loadScene('login');
        }
        var userObj = JSON.parse(Global.userInfo);
        cc.loader.load(userObj.head, function (err, tex) {
            cc.textureCache.addImage(userObj.head);
            var sf = new cc.SpriteFrame(tex);
            self.head.spriteFrame = sf;
        });
        this.username.string = userObj.name;
        this.integral.string = "积分：" + userObj.integral;
    },

    onLoad: function () {
        this._super();
        var self = this;
        if (!Global.userInfo) {
            cc.director.loadScene('login');
            return;
        }
        var txtTime = cc.find("Canvas/ui/time/text").getComponent(cc.Label);

        var interval = parseInt(txtTime.string);
        //  txtTime.string ="23";
        this.scheduleOnce(function () {
            txtTime.string = interval;
            interval--;
            if (interval == 0) {

            }
        }, 1);

    }
});
