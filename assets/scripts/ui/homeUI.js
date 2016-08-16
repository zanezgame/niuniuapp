var config = require("config");
var baseUi = require("baseUi");
baseUi.extend({
    properties: {
        playerPrefab: {
            default: null,
            type: cc.Prefab
        },
    },

    start: function () {
        this._super();
        var self = this;
    },
    onEnter: function () {

        this._super();

    },

    onLoad: function () {
        this._super();
        var self = this;
        if (!Global.userInfo) {
            cc.director.loadScene('login');
            return;
        }
        this.initUser();


        //var btnSet = cc.find("Canvas/btn/set");
        //btnSet.on('mousedown', function (event) {
        //    var addDialog = cc.find("Canvas/UI/addDialog");
        //    //var addDialog = this.node.getChildByName("UI").getChildByName("addDialog");
        //    // 创建一个移动动作
        //    var actionBy = cc.moveTo(0.5, cc.p(0, 0));
        //    addDialog.runAction(actionBy);
        //}, this);


        // var te = cc.loader.loadRes(userObj.head, cc.SpriteFrame, function (err, spriteFrame) {
        //     return spriteFrame;
        // });
        // this.head.spriteFrame = te;
        //
        // this.head.Texture = realUrl;


    },
    initUser: function () {
        var userPrefab = cc.instantiate(this.playerPrefab);
        var userObj = JSON.parse(Global.userInfo);
        cc.log(userObj.playerName);
        userPrefab.setPositionX(-50);
        userPrefab.setPositionY(-500);
        this.node.addChild(userPrefab);
        var player = userPrefab.getComponent("Player");
        player.init(userObj);

    },

})
;
