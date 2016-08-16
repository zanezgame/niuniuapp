cc.Class({
    extends: cc.Component,

    properties: {
        id: {
            default: null,
            type: cc.Label
        },
        playerName: {
            default: null,
            type: cc.Label
        },
        playerPhoto: {
            default: null,
            type: cc.Sprite
        },
        integral: {
            default: null,
            type: cc.Label
        }
    },
    init: function (userinfo) {
        cc.log("initUserinf");
        var self = this;
        this.id.string = "ID:" + userinfo.id;
        this.playerName.string = userinfo.playerName;
        this.integral.string = userinfo.integral;

        cc.loader.load(userinfo.playerPhoto, function (err, tex) {
            self.playerPhoto.spriteFrame = new cc.SpriteFrame(tex);
        });
    },
    onLoad: function () {

    },

});
