let brownBunny = cc.Class({
    extends: require("bunny"),
    scaleBunny(){
        if(this.fps <= 60){
            this.node.angle+=3;
        }else if(this.fps <= 240){
            
        }else{
            this.fps = 0;
        }
    },
    update (dt) {
        this.fps++;
        this.scaleBunny();
        this.talk();
    },
    start(){
        
    }
});
