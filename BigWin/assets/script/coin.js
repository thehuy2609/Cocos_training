const EventEmitter = require('eventEmitter');
cc.Class({
    extends: cc.Component,

    properties: {
        
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad (){
        this.createCoin();
    },

    start () {
        
    },

    createCoin(){
        //let coin = this.node;
        cc.tween(this.node)
            .to(1, {x: this.randomNumber(-this.node.parent.width/2, this.node.parent.width/2), y:this.randomNumber(-this.node.parent.height/2, this.node.parent.height/2)}, { easing: 'bounceOut'})
            .start()
        
        let flipCoin = cc.tween()
        .to(0.5, {scaleX: -1})
        .to(0.5, {scaleX: 1})
        
        cc.tween(this.node).then(flipCoin).repeatForever().start()
        
    },

    randomNumber(min,max){
        return Math.random() * (max - min) + min;
    },

    update (dt) {
        //cc.log(this.node.scaleX);
    },
});
