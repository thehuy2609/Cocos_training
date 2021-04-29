let brownBunny = cc.Class({
    extends: require("bunny"),
    properties: {
        _timerAngle : 0,
        
    },
    
    update (dt) {
        this._timerAngle += dt;
        this._timerTalk += dt;
        this.talk();
        
        if(this._timerAngle <= 1){
            this.node.angle += 180/(1/dt);
        }else if(this._timerAngle <= 4){
            this.node.angle = Math.round(this.node.angle / 180) * 180;   
        }else{
            this._timerAngle = 0;
        }
    },
    
    start(){
        
    },
});
