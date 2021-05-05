
cc.Class({
    extends: cc.Component,

    properties: {
        sprite: cc.Sprite,
        spriteFrame: cc.SpriteFrame,
        _timer: 0,
        _wasChange: false,
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {            
        
    },

    update (dt) {
        if(this._wasChange === false){
            this._timer += dt;
        }
        if(this._timer >= 3 && this._wasChange === false){
            this.sprite.spriteFrame = this.spriteFrame;
            this._wasChange = true;
        }
    },
});
