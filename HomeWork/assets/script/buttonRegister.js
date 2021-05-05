cc.Class({
    extends: cc.Component,

    properties: {
        usernameEditBox : cc.EditBox,
        passwordEditBox : cc.EditBox,
        registerButton: cc.Button,
        notificationRichText: cc.RichText,
        userScrollView : cc.ScrollView,
        _time: new Date().toLocaleTimeString(),
    },

    onLoad(){
        this.registerButton.node.on('click', this.clickButtonRegister, this);
    },

    clickButtonRegister(){
        this.showNotification();
        this.addUserToScrollView();
    },

    showNotification(){
        this.notificationRichText.string = "Chào mừng <color=#FF0000><u>" + this.usernameEditBox.string + "</></> đã gia nhập <color=#FFFF00><i>" + this._time + "</></>";        
    },

    addUserToScrollView(){
        
    },

    start () {
        
    },

    // update (dt) {},
});
