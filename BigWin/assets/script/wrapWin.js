const EventEmitter = require('eventEmitter');
cc.Class({
    extends: cc.Component,

    properties: {
        value: 0,
        coinLabel : cc.Label,
        btnClick : cc.Button,
        treasureSprite : cc.Sprite,
        coinPrefab : cc.Prefab,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad (){
        EventEmitter.instance.registerEvent("clickBtn", this.clickBtn.bind(this));
    },

    start () {

    },

    showTreasure(){
        let treasure = cc.tween()
        .to(0.5, {scale: 1})
        .to(0.5, {scale: 0.7})
        
        cc.tween(this.treasureSprite.node).then(treasure).repeatForever().start()
    },

    clickBtn(){
        cc.tween (this)
            .to(1, {value: 1000000})
            .call(this.showTreasure())
            .start()
        for (let i = 0; i < 100; i++) {
            let coin = cc.instantiate(this.coinPrefab);
            coin.setPosition(0,0);
            coin.parent = this.node;
        }
        this.btnClick.node.active = false;
    },

    randomNumber(min,max){
        return Math.random() * (max - min) + min;
    },

    update (dt) {
        this.coinLabel.string = Math.floor(this.value);
    },
});
