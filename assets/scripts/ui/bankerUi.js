var config = require("config");
var baseUi = require("baseUi");

baseUi.extend({
    properties: {
        connect: {
            default: null,
            type: cc.Label
        },
        playerPrefab: {
            default: null,
            type: cc.Prefab
        },
    },
    start: function () {
        this._super();
        var self = this;
        if (!Global.userInfo) {
            cc.director.loadScene('login');
        }

    },

    onLoad: function () {
        this._super();
        var self = this;
        //this.initUser();
        var userPrefab = cc.instantiate(this.playerPrefab);
        var userObj = JSON.parse(Global.userInfo);
        userPrefab.setPosition(0, 0);
        this.node.addChild(userPrefab);
        userPrefab.setPosition(0, 0);

        var player = userPrefab.getComponent("Player");
        player.init(userObj);
        if (!Global.userInfo) {
            cc.director.loadScene('login');
            return;
        }
        //var txtTime = cc.find("Canvas/ui/time/text").getComponent(cc.Label);
        //
        //var interval = parseInt(txtTime.string);
        ////  txtTime.string ="23";
        //this.scheduleOnce(function () {
        //    txtTime.string = interval;
        //    interval--;
        //    if (interval == 0) {
        //
        //    }
        //}, 1);

    },
    initUser: function () {
        var userPrefab = cc.instantiate(this.playerPrefab);
        var userObj = JSON.parse(Global.userInfo);

        this.node.addChild(userPrefab);
        userPrefab.setPosition(-500, -100);

        var player = userPrefab.getComponent("Player");
        player.init(userObj);

    },
});
