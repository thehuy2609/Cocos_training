
cc.Class({
    extends: cc.Component,

    properties: {
        value: 0,
        nextValue : 0,
        coinLabel : cc.Label,
        coinEditBox : cc.EditBox,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad (){
        
    },

    start () {

    },

    clickBtn(){
        this.nextValue = parseInt(this.coinEditBox.string);
        cc.tween (this)
            .to(3, {value: this.nextValue})
            // .call(()=>{
            //     this.coinLabel.string = this.value;
            //     cc.log(this.value);
            // })
            .start()
    },

    update (dt) {
        
        this.coinLabel.string = Math.floor(this.value);
    },
});
