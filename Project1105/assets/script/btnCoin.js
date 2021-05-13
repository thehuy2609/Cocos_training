const EventEmitter = require('eventEmitter');
cc.Class({
    extends: cc.Component,

    properties: {
        _coin :0,

    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {

    },

    clickBtn(){
        cc.tween(this._coin)
            .to(1, {a:100})
            .start()
    },
    // update (dt) {},
});
