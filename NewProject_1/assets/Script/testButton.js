
cc.Class({
    extends: cc.Component,

    properties: {
        button: cc.Button,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad: function() {
        cc.log(this.button);
        //this.button.node.on('click', this.callback, this);
    },

    callback: function(){
        cc.log("Hello World!!!");
    },

    start () {

    },

    // update (dt) {},
});
