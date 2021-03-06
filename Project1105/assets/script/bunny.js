const EventEmitter = require('eventEmitter');
cc.Class({
    extends: cc.Component,

    properties: {
        _action : null,
        _moveUpAction: null,
        _moveDownAction: null,
        _moveRotateAction: null,
    },

    moveBunny(){
        // cc.tween(this.node)
        //     .by(1, {angle: 360})
        //     .call(()=>{
        //         cc.log('Hello World!!!')
        //     })
        //     .by(1, {scale: 0.5})
        //     .call(()=>{
        //         cc.log('Hello World Again!!!')
        //     })
        //     .start()
        let obj = { a : 0}
        
        cc.tween(obj)
            .by(1, { a : 100})
            .call(()=>{
                cc.log(obj);
            })
            .start();
    },

    stopBunny(){
        this.node.stopAction(this._action);
    },

    speak(){
        cc.log('Hello!!!');
    },

    jumpBunny(){
        let spawn = cc.spawn(this._moveDownAction, this._moveRotateAction);
        this._action = cc.sequence(this._moveUpAction, cc.removeSelf(), spawn, cc.delayTime(0.5)).repeat(3);
        this.node.runAction(this._action);
    },
    // LIFE-CYCLE CALLBACKS:

    onLoad (){
        EventEmitter.instance.registerEvent("moveBunny", this.moveBunny.bind(this));
        EventEmitter.instance.registerEvent("stopBunny", this.stopBunny.bind(this));
        EventEmitter.instance.registerEvent("jumpBunny", this.jumpBunny.bind(this));
    },

    start () {
        
        let action = cc.moveTo(2, 200, 0);
        this._action = action.easing(cc.easeBounceOut(3,0));
        this._moveUpAction = cc.moveBy(2, 0, 100);
        this._moveDownAction = cc.moveBy(2, 0, -100);
        this._moveRotateAction = cc.rotateBy(2, 360);
    },

    // update (dt) {},
});
