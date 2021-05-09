const mEmitter = require('emitter');
cc.Class({
    extends: cc.Component,

    properties: {
        
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad (){
        mEmitter.instance = new mEmitter();
        mEmitter.instance.registerEvent("tanSoTao", this.onHello, this);
        
    },

    onHello(data){
        cc.log('hello', data);
    },

    start () {
        //cc.log(mEmitter.instance);
    },

    // update (dt) {},
});
