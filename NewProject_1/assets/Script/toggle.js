
cc.Class({
    extends: cc.Component,

    properties: {
        toggle : cc.Toggle,
    },

    checkStatus(){
        cc.log(this.toggle.isChecked);
    },

    onLoad: function() {
        this.toggle.node.on('toggle', this.checkStatus, this);
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {

    },

    // update (dt) {},
});
