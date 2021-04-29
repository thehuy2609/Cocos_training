let greenBunny = cc.Class({
    extends: require("bunny"),
    properties: {
        _timerScaleX : 0,
    },

    update (dt) {
        this._timerScaleX += dt;
        this._timerTalk += dt;
        this.talk();
        
        if(this._timerScaleX < 1/2){
            this.node.scaleX += (0.5/(1/(2*dt)));
        }else if(this._timerScaleX <= 1){
            this.node.scaleX += (-1/(1/(2*dt)));
        }else if(this._timerScaleX <= 2){
            
        }else{
            this.node.scaleX =1;
            this._timerScaleX = 0;
        }
    },
    start(){
        
    }
});
