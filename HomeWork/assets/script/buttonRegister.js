cc.Class({
    extends: cc.Component,

    properties: {
        usernameEditBox : cc.EditBox,
        passwordEditBox : cc.EditBox,
        registerButton: cc.Button,
        notificationRichText: cc.RichText,
        userScrollView : cc.ScrollView,
        
    },

    onLoad(){
        this.registerButton.node.on('click', this.clickButtonRegister, this);
    },

    clickButtonRegister(){
        this.showNotification();
        this.addUserToScrollView();
    },

    showNotification(){
        let timeNow = new Date(Date.now()).toLocaleTimeString('it-IT');
        this.notificationRichText.string = "Chào mừng <color=#FF0000><u>" + this.usernameEditBox.string + "</></> đã gia nhập <color=#FFFF00><i>" + timeNow + "</></>";        
    },

    addUserToScrollView(){
        
    },

    start () {
        //cc.log(Date());
    },

    // update (dt) {},
});
