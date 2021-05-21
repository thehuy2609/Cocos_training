const command = new cc.Class({
    __ctor__(target){
        this.target = target;
    },
    execute(){
        this.target.runAction(cc.callFunc(() => {
            cc.log('Hello World!!!');
        }))
    }
});

const jump = new cc.Class({
    extends: command,
    __ctor__(target){
        this.target = target;
    },
    execute(){
        this.target.runAction(cc.callFunc(() => {
            let jumpUp = cc.tween().by(0.5, {y: 100}, {easing: 'sineOut'});
            let jumpDown = cc.tween().by(0.5, {y: -100}, {easing: 'sineIn'});
            let jump = cc.tween().sequence(jumpUp, jumpDown);
            cc.tween(this.target).then(jump).start()
        }))
    }
});

const hop = new cc.Class({
    extends: command,
    __ctor__(target){
        this.target = target;
    },
    execute(){
        this.target.runAction(cc.callFunc(() => {
            
            let jumpUp = cc.tween().by(0.5, {y: 100}, {easing: 'sineOut'});
            let jumpDown = cc.tween().by(0.5, { y: -100}, {easing: 'sineIn'});
            let jumpRight = cc.tween().by(0.5, {x: 50});

            let jump1 = cc.tween().parallel(jumpUp, jumpRight);
            let jump2 = cc.tween().parallel(jumpDown, jumpRight);

            let jump = cc.tween().sequence(jump1, jump2);

            cc.tween(this.target).then(jump).start()
        }))
    }
});

cc.Class({
    extends: cc.Component,
    
    properties: {
        
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        this.spaceEvent = new jump(this.node);
        this.wEvent = new hop(this.node);
    },

    start () {

    },

    onKeyDown(event) {
        switch(event.keyCode) {
            case cc.macro.KEY.space:
                {
                    this.spaceEvent.execute();
                    break;
                }     
            case cc.macro.KEY.w:
                {
                    this.wEvent.execute();
                    break;
                }
            default: 
                cc.log('do nothing');
                break;
        }
    },

    // update (dt) {},
});