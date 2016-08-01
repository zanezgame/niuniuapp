cc.Class({
    extends: cc.Component,

    properties: {
    
    },

    // use this for initialization
    onLoad: function () {
    
    },
    
    loginCallback:function(event){
        this.node.active = false;
        var home=this.getComponent('home');
        home.register.node.active = true;
        
        var node = event.target;
    var button = node.getComponent(cc.Button);
   cc.log(node.string);
       cc.log(button.Normal);
    },
 
});
