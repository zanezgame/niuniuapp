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
        if (!Global.userInfo) {
            cc.director.loadScene('login');
        }

    },

    onLoad: function () {
        this._super();
        var self = this;
        cc.log("Global.roomInfo:" + Global.roomInfo);

        cc.log("sys.localStorage:" + sys.localStorage.getItem("roominfo"));
        if (!Global.roomInfo) {
            cc.director.loadScene('home');
            return;
        }
        this.init();

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
    init: function () {
        //this.showMsg("数据加载中...")
        //if (!Global.players) {
        //    this.showMsg("数据加载中...")
        //}
        /// this.init();


        //var userPrefab = cc.instantiate(this.playerPrefab);
        //var userObj = JSON.parse(Global.userInfo);
        //userPrefab.setPosition(0, 0);
        //this.node.addChild(userPrefab);
        //userPrefab.setPosition(0, 0);
        //
        //var player = userPrefab.getComponent("Player");
        //player.init(userObj);
        //if (!Global.userInfo) {
        //    cc.director.loadScene('login');
        //    return;
        //}

    },
});
