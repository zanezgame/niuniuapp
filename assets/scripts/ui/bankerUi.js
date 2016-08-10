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

    onLoad: function () {

    },

});
