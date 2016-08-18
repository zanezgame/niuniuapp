cc.Class({
    extends: cc.Component,

    properties: {
        number: {
            default: null,
            type: cc.Label
        },
        nickNmae: {
            default: null,
            type: cc.Label
        },
        pic: {
            default: null,
            type: cc.Sprite
        },
        score: {
            default: null,
            type: cc.Label
        }
    },
    init: function (userinfo) {
        cc.log("UserInfo:" + JSON.stringify(userinfo));
        var self = this;
        this.number.string = "ID:" + userinfo.number;
        this.nickNmae.string = userinfo.nickName;
        this.score.string = userinfo.score;
        cc.loader.load(userinfo.pic, function (err, tex) {

            //self.playerPhoto.spriteFrame = new cc.SpriteFrame(tex);
            //self.playerPhoto.sizeMode = cc.Sprite.SizeMode.CUSTOM;
            //self.playerPhoto.setSizeWidth(140);
            //self.playerPhoto.setSizeHeight(150);
        });
    },

    onLoad: function () {

    },

});
