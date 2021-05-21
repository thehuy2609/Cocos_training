const animal = new cc.Class({
    name: "animal",
})

const bunny = new cc.Class({
    extends: animal,
    name: "bunnyName",
})

const bear = new cc.Class({
    extends: animal,
    name: "bearName",
})

cc.Class({
    extends: cc.Component,

    properties: {
        prefabBunny : cc.Prefab,
        prefabBear : cc.Prefab,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        let xCreate =-320;
        for (let i = 0; i < 20; i++) {

            let randomNumber = Math.random();
            let newAnimal;
            if(randomNumber<=0.5){
                newAnimal = new bunny();
            }else{
                newAnimal = new bear();
            }

            let itemCreate = cc.instantiate(newAnimal);
            //itemCreate.setPosition(xCreate, 0);
            itemCreate.parent = this.node;

            xCreate +=100;
        }
    },

    start () {

    },

    // update (dt) {},
});
