
cc.Class({
    extends: cc.Component,

    properties: {
        buttonA: cc.Button,
        label: cc.Label,
        sprite: cc.Sprite,
        spriteFrame: cc.SpriteFrame,
        newText: "Hello World!!!",
        _canClickA: true,
        _clickB: false,
        _timer : 0,
    },

    onLoad(){
        this.buttonA.node.on('click', this.callbackA, this);
    },

    callbackA(){
        if(this.buttonA.interactable === true){
            this.label.string = this.newText;
        }
    },
    
    callbackB(){
        //this.sprite.spriteFrame = this.spriteFrame;
        this.buttonA.interactable = false;
        this._clickB = true;
    },

    start () {
        
    },

    update (dt) {
        if(this._clickB === true){
            this._timer += dt;
            this.buttonA.interactable = false;
            this.label.string = Math.round(3 - this._timer);
            if(this._timer >=3){
                this.sprite.spriteFrame = this.spriteFrame;
                this.label.string = 0;
                this._clickB = false;
                this._timer = 0;
                this.buttonA.interactable = true;
            }
        }
    },
});
