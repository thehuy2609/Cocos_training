const Emitter = require("eventEmitter");

cc.Class({
    extends: cc.Component,

    properties: {
        prefabItemScrollView : cc.Prefab,
        _content : null,
        _firstYItem : 25,
    },

    // LIFE-CYCLE CALLBACKS:
    
    addUserToScrollView(data){
        
        let itemScrollView = cc.instantiate(this.prefabItemScrollView);
        itemScrollView.getComponent(cc.Label).string = data;
        itemScrollView.parent = this._content;
        itemScrollView.y = this._firstYItem -= 25;
    },

    onLoad () {
        Emitter.instance.registerEvent("addUserToScrollView", this.addUserToScrollView.bind(this));
        this._content = this.node.getChildByName("view").getChildByName("content");
    },

    start () {

    },

    // update (dt) {},
});
