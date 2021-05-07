
cc.Class({
    extends: cc.Component,

    properties: {
        enable: true,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad (){
        //this.node.on('mousedown', this.sayHello, this);
        this.node.on("say-hello",function(msg){
            cc.log(msg);
        })
    },

    buttonClick(){
        //this.node.off('mousedown', this.sayHello, this);
        this.node.emit("say-hello", "Hello World!!!");
    },

    start (){
        
    },

    // update (dt) {},
});
