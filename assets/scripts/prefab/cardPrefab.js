cc.Class({
    extends: cc.Component,

    properties: {
      mainpic:cc.Sprite,
      suit:cc.Sprite,
      point:cc.Label,
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

    // use this for initialization
    onLoad: function () {

    },
    init:function(obj){
        
        this.mainpic.spriteFrame=new cc.SpriteFrame(obj.mainpic);
        this.suit.SpriteFrame=new cc.SpriteFrame(obj.suit);
        this.point.string=obj.point;
        if (obj.mainpic.indexOf("fangkuai")||obj.mainpic.indexOf("heitao")) {
               this.point.color='red';
        }
    },
 
});
