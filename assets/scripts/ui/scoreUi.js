var config = require("config");
var baseUi = require("baseUi");

baseUi.extend({
    properties: {
        bankerPrefab: {
            default: null,
            type: cc.Prefab
        },
        playerCarPrefab: {
            default: null,
            type: cc.Prefab
        },
        mePrefab: {
            default: null,
            type: cc.Prefab
        },
    },

    // use this for initialization
    onLoad: function () {
        this._super();
        if (!Global.roomInfo) {
            cc.director.loadScene('home');
            return;
        }
        this.initPlayer();
    },

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },

    initBanker: function () {
        var players = cc.find("Canvas/ui/playerList").getComponent(cc.Layout);

    },

    initMe: function () {

        var userPrefab = cc.instantiate(this.playerPrefab);
        userPrefab.parent = this.node;
        userPrefab.position = cc.p(-120, -500)

        var player = userPrefab.getComponent("Player");
        var userInfoObj = JSON.parse(Global.userInfo);
        player.init(userInfoObj);

    },
    initPlayer: function () {
        for (var i = 0; i < 26; i++) {
            var userObj = JSON.parse(Global.userInfo);
            userObj.number = i;
            var userPrefab = cc.instantiate(this.playerCarPrefab);
            userPrefab.parent = this.node;
            userPrefab.position = cc.p(-100, 100 + i * 10)

            var player = userPrefab.getComponent("Player");
            player.init(userObj);
        }

    },
});
