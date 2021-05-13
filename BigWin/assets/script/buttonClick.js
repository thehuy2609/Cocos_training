const EventEmitter = require('eventEmitter');
cc.Class({
    extends: cc.Component,

    properties: {
        
    },

    onLoad (){
        this.node.on("click", this.clickBtn.bind(this));
    },

    start () {

    },

    clickBtn(){
        EventEmitter.instance.emit('clickBtn');
    },

    // update (dt) {},
});
