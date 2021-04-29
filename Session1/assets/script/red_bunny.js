let redBunny = cc.Class({
    extends: require("bunny"),
    properties: {
        _timerSkewX : 0,
    },

    update (dt) {
        this._timerSkewX += dt;
        this._timerTalk += dt;
        this.talk();
        
        if(this._timerSkewX <= 1/2){
            this.node.skewX -= 1;
        }else if(this._timerSkewX <= 1){
            this.node.skewX += 2;
        }else if(this._timerSkewX <= 1.5){
            this.node.skewX -= 1;
        }else if(this._timerSkewX <= 2.5){
            this.node.skewX =0;    
        }else{
            this._timerSkewX =0;
        }
    },
    start(){
        
    }
});
