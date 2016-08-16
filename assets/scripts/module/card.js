var Suit = cc.Enum({
    Spade: 1,   // 黑桃
    Heart: 2,   // 红桃
    Club: 3,    // 梅花(黑)
    Diamond: 4, // 方块(红)
});
var A2_10JQK = 'NAN,A,2,3,4,5,6,7,8,9,10,J,Q,K'.split(',');

cc.Class({
    extends: cc.Component,

    properties: {
        mainpic: cc.Sprite,
        suit: cc.Sprite,
        point: cc.Label,
        texFaces: {
            default: [],
            type: cc.SpriteFrame
        },
        texSuitBig: {
            default: [],
            type: cc.SpriteFrame
        },
        texSuitSmall: {
            default: [],
            type: cc.SpriteFrame
        }
    },

    onLoad: function () {

    },
    init: function (point, suit) {

        this.mainpic.spriteFrame = new cc.SpriteFrame(obj.mainpic);
        this.suit.SpriteFrame = new cc.SpriteFrame(this.texSuitBig[suit]);
        this.point.string = A2_10JQK[point];
    },

});
