const mEmitter = require('test4');

cc.Class({
    extends: cc.Component,

    properties: {
        
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad (){
        
    },

    start () {
        cc.log(mEmitter.instance);
    },

    // update (dt) {},
});
