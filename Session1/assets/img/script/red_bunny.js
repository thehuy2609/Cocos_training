let redBunny = cc.Class({
    extends: require("bunny"),
    skewBunny(){
        if(this.fps <= 30){
            this.node.skewX -= 1;
        }else if(this.fps <= 60){
            this.node.skewX += 2;
        }else if(this.fps <= 90){
            this.node.skewX -= 1;
        }else if(this.fps <= 150){
            
        }else{
            this.fps =0;
        }
    },
    update (dt) {
        this.fps++;
        this.skewBunny();
        this.talk();
    },
    start(){
        
    }
});
