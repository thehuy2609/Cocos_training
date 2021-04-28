cc.Class({
    extends: cc.Component,

    properties: {
        objName: "Bunny",
        fps: 0,
        jumpRange: 5,
    },

    talk(){
        if(this.fps === 60){
            cc.log('Alo Alo!!!');
        }
    },

    jump(){
        if(this.fps <= 30){
            this.node.y += this.jumpRange;
        }
        else if(this.fps <= 60){
            this.node.y -= this.jumpRange;
        }
    },

    start(){

    },

    update(dt){
        this.fps++;
        this.talk();
        this.jump();
        if(this.fps > 60){
            this.fps =0;
        }
        
    }

});
