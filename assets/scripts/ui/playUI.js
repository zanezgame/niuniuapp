cc.Class({
    extends: cc.Component,

    properties: {
        cardPrefab:cc.Prefab,
        
    },

    // use this for initialization
    onLoad: function () {
        
        var data={mainpic:'fangkuai_big',suit:'fangkuai_small',point:'3'};
        
        var item = cc.instantiate(this.cardPrefab);
         this.node.addChild(item);
          item.getComponent('cardPrefab').init({
                mainpic: data.mainpic,
                suit: data.suit,
                point: data.point
            });

    },

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
 