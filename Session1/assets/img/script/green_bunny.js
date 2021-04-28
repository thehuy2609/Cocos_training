let greenBunny = cc.Class({
    extends: require("bunny"),
    scaleXBunny(){
        if(this.fps <= 30){
            this.node.scaleX += (0.5/30);
        }else if(this.fps <= 60){
            this.node.scaleX += (-1/30);
        }else if(this.fps<=120){
            
        }else{
            this.node.scaleX =1;
            this.fps = 0;
        }
    },
    update (dt) {
        this.fps++;
        this.scaleXBunny();
        this.talk();
    },
    start(){
        
    }
});
