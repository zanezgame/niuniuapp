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
        //判断原来是否在房间里
        if (!Global.userInfo) {
            cc.director.loadScene("login");

        }
        //判断原来是否在房间里
        if (!Global.roomInfo) {
            Global.socket.emit("join", Global.userInfo);
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
        userPrefab.parent = this.node;
        userPrefab.position = cc.p(-120, -500)

        var player = userPrefab.getComponent("Player");
        var userInfoObj = JSON.parse(Global.userInfo);
        player.init(userInfoObj);

    },

})
;
