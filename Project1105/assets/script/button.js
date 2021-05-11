const EventEmitter = require('eventEmitter');
cc.Class({
    extends: cc.Component,

    properties: {
        
    },

    moveBunny(){
        EventEmitter.instance.emit('moveBunny');
    },

    stopBunny(){
        EventEmitter.instance.emit('stopBunny');
    },

    jumpBunny(){
        EventEmitter.instance.emit('jumpBunny');
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        //this.node.on("click", this.moveBunny.bind(this));
    },

    start () {
        
    },

    // update (dt) {},
});
