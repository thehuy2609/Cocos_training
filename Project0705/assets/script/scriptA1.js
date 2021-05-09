const mEmitter = require('emitter');
cc.Class({
    extends: cc.Component,

    properties: {
        
    },

    tenHam(){
        mEmitter.instance.emit("tanSoTao", "nội dung kênh");
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {
        cc.log(mEmitter.instance);
        this.tenHam();
    },

    // update (dt) {},
});
