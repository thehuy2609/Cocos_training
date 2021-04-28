// Learn cc.Class:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] https://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        objName: "",
        weight: 0,
        height: 0,
        _male: true,
        ints: [cc.Integer],
        score:{
            default:0,
            displayName: "Score (player)",
            tooltip: "The score of player",
        },

        width:{
            type: cc.Integer,
            get: function(){
                cc.log("Getter: " + this._width);
                return this._width;
            },
            set: function(value){
                this._width = value;
                cc.log("Setter: " + this._width);
            }
        }

    },
    printInfo(){
        cc.log(this.objName + ", weight: " + this.weight + ", height: " + this.height + ", male: " + this._male );
        //cc.log(this.width);
        
    },
    // LIFE-CYCLE CALLBACKS:

    onLoad (){
        this.width = 10;
        this.node.active = false;
    },

    start () {
        this.printInfo();
        //this.width = 10;
    },

    // update (dt) {},
});
