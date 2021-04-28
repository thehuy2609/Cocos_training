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
        // foo: {
        //     // ATTRIBUTES:
        //     default: null,        // The default value will be used only when the component attaching
        //                           // to a node for the first time
        //     type: cc.SpriteFrame, // optional, default is typeof default
        //     serializable: true,   // optional, default is true
        // },
        // bar: {
        //     get () {
        //         return this._bar;
        //     },
        //     set (value) {
        //         this._bar = value;
        //     }
        // },
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {
        var bunny = cc.Class({
            properties:{
                name: "First Bunny",
                weight: "5kg",
                height: 20,
            },
            // ctor(){
            //     this.name = "First Bunny";
            // },
            jump(){
                cc.log(this.name + " jump! " + ", weight: " + this.weight + ", height: " + this.height);
                
            }
        });

        var brownBunny = cc.Class({
            extends: bunny,
            properties:{
                
            },
            ctor(){
                this.name = "Second Bunny";
            },
            drinkVodka(){
                cc.log(this.name + " drink Vodka");
            }
        })

        var bunny1 = new bunny();
        bunny1.jump();
        cc.log(this.node);
        var bunny2 = new brownBunny();
        bunny2.drinkVodka();
        bunny2.jump();
        //cc.log(obj instanceof Bunny);

    },

    // update (dt) {},
});
