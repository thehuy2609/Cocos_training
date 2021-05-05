
cc.Class({
    extends: cc.Component,

    properties: {
        editBoxFrameName : cc.EditBox,
        editBoxUserName : cc.EditBox,
        editBoxMoney : cc.EditBox,
        buttonClick : cc.Button,
        richText : cc.RichText,
    },

    showRichText(){
        cc.log(this.editBoxFrameName.string);
        this.richText.string = "<img src=" + this.editBoxFrameName.string +"/><color=#FF0000><size=14>" + this.editBoxUserName.string + "</></> <color=#FFFFFF><size=12>vừa thắng </></><color=#FFFF00><size=18>" + this.editBoxMoney.string + "</></>";
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {
        cc.log(this.editBoxFrameName.string);
    },

    // update (dt) {},
});
