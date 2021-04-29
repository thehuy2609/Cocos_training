cc.Class({
    extends: cc.Component,
    _ctor(){
        this._firstPos
    },
    properties: {
        objName: "Bunny",
        _jumpRange: 0,
        _timerTalk: 0,
        _timerJump: 0,
        
    },

    talk(){
        if(this._timerTalk >= 1){
            cc.log('Alo Alo!!!');
            this._timerTalk = 0;
        }
    },

    start(){
        this._firstPos = this.node.y;
    },

    update(dt){
        this._timerTalk += dt;
        this.talk();
        this._timerJump += dt;
        if(this._timerJump <= 1/2){
            this._jumpRange = 5;    
        }
        else if(this._timerJump <= 1){
            this._jumpRange = -5;
        }
        
        if(this._timerJump > 1){
            this._timerJump =0;
            this.node.y = this._firstPos;
        }
        
        this.node.y += this._jumpRange;
    }

});
