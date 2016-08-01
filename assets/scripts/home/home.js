cc.Class({
    extends: cc.Component,

    properties: {
      register:cc.Node,
       loading:cc.Node,
       login:cc.Node,
      
    },

    // use this for initialization
    onLoad: function () {
    this.register.active = false;
    this.loading.active = false;
    this.login.active = true;
    },

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
