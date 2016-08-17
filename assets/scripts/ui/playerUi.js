var config = require("config");
var baseUi = require("baseUi");

baseUi.extend({

    properties: {},

    // use this for initialization
    onLoad: function () {
        this._super();
        if (!Global.roomInfo) {
            cc.director.loadScene('home');
            return;
        }
    },

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
