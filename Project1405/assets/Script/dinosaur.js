
cc.Class({
    extends: cc.Component,

    properties: {
        _jumping: false,
        _movingLeft: false,
        _movingRight: false,
        _movingDown: false,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad (){
        
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
    },

    start () {
        this._status = "init";
    },

    onKeyUp(){},

    onCollisionEnter: function (other, self) {
        this._status = "idle";
        
        if(other.node.group === "enemy"){
            // this._jumping = false;
            // this._movingLeft = false;
            // this._movingRight = false;
            // this._movingDown = false;
            this.node.stopAllActions()
            cc.tween(this.node)
                .delay(0,5)
                .to(0.5, {scale: 0})
                .call(()=>{
                    cc.log('Dieeeeee!!!');
                })
                .start()
        }
    },
    
    moveLeft(){
        this._movingLeft = true;
    },

    moveRight(){
        this._movingRight = true;
    },
    jump(){
        this._jumping = true;
    },

    moveDown(){

    },

    onKeyDown: function (event) {
        switch(event.keyCode) {
            case cc.macro.KEY.w:
                {
                    this.jump();
                    break;
                }     
            case cc.macro.KEY.a:
                {
                    this.moveLeft();
                    break;
                }   
            case cc.macro.KEY.s:        
                {
                    this.moveDown();
                    break;
                }   
            case cc.macro.KEY.d:        
                {
                    this.moveRight();
                    break;
                }
            default:{}
        }
    },

    update (dt) {

        if(this._status === "init"){
            this.node.y -= dt*100;
        }

        if(this._jumping === true){
            var jumpUp = cc.tween().by(0.5, {y: 100}, {easing: 'sineOut'});
            var jumpDown = cc.tween().by(0.5, {y: -100}, {easing: 'sineIn'});
            var jump = cc.tween().sequence(jumpUp, jumpDown);
            cc.tween(this.node).then(jump).start()
            this._jumping = false;
            
        }
        if(this._movingLeft === true){
            cc.tween(this.node)
            .by(0.5, {x:-20}).start();
            this._movingLeft = false;
        }
        if(this._movingRight === true){
            cc.tween(this.node)
            .by(0.5, {x:20}).start();
            this._movingRight = false;
        }
        
    },
});
