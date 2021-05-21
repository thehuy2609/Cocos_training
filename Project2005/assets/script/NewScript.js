const classA = new cc.Class({
    name: "nameA",
    
    ctor(){
        cc.log(cc.js.getClassName(this));
    },
    
    init(nameInput){
        this.name = nameInput;
    }
});

const classA1 = new cc.Class({
    name: "nameA1",
    extends: classA,
})

const classA2 = new cc.Class({
    name: "nameA2",
    extends: classA,
})

cc.Class({
    extends: cc.Component,

    onLoad () {
        let objA = new classA();
        let objA1 = new classA1();
        let objA2 = new classA2();

        objA.init("new name");
        cc.log(objA);
    },

    start(){
    }

    // update (dt) {},
});
