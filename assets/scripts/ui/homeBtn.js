cc.Class({
    extends: cc.Component,

    properties: {
    
    },

    // use this for initialization
    onLoad: function () {
    
    },
    
    startCallback:function(event){
        cc.director.loadScene('play');
        cc.log('start');
    },
    addCallback:function(event){
        
       cc.log('add');
    },
    
    
 
});
