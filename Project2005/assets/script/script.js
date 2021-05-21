const A = new cc.Class({
    name: "A",
    properties: {
        
    },

    ctor(){
        cc.log(cc.js.getClassName(this));
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {
    },

    // update (dt) {},
});

const A1 = new cc.Class({
    name: "A1",
    extends: A,
})

