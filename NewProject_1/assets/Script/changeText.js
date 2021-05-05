
cc.Class({
    extends: cc.Component,

    properties: {
        editBox : cc.EditBox,
        textLabel : cc.Label,
        button : cc.Button,
    },

    showTextLabel(){
        this.textLabel.node.active = true;
    },

    showButton(){
        this.button.node.active = true;
    },

    showPhoneNumber(){
        // this.textLabel.string = this.editBox.string;
        // this.textLabel.node.active = true;
        cc.log(this.editBox.string);
    },

    checkEditBox(){
        //cc.log(this.editBox.string.length);
        if(this.editBox.string.length >= 10){
            //this.editBox.string = this.editBox.string[09]; 
            this.textLabel.node.active = false;
        }
    },

    // onLoad () {},

    start () {
        //cc.log(this.editBox.string);
    },

    // update (dt) {},
});
