cc.Class({
    extends: cc.Component,

    properties: {
        usernameEditBox : cc.EditBox,
        passwordEditBox : cc.EditBox,
        registerButton: cc.Button,
        notificationRichText: cc.RichText,
        notificationLabel: cc.Label,
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

    validateUsername(){
        let regUsername = /^[A-Za-z0-9]{1,10}$/;
        
        if(this.usernameEditBox.string.length > 0){
            if(regUsername.test(this.usernameEditBox.string) === false){
                this.notificationLabel.string = "Username tối đa 10 ký tự và không nhập ký tự đặc biệt!!!";
                this.notificationLabel.node.active = true;
            }else{
                this.notificationLabel.string = "";
                this.notificationLabel.node.active = false;
            }
        }else{
            this.notificationLabel.string = "Nhập Username!!!";
            this.notificationLabel.node.active = true;
        }
    },

    validatePassword(){
        let regPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{6,12}$/;
        if(this.passwordEditBox.string.length > 0){
            if(regPassword.test(this.passwordEditBox.string) === false){
                this.notificationLabel.string = "Password từ 6 - 12 ký tự và chứa ít nhất 1 chữ thường, 1 chữ in hoa và 1 số!!!";
                this.notificationLabel.node.active = true;
            }else{
                this.notificationLabel.string = "";
                this.notificationLabel.node.active = false;
            }
        }else{
            this.notificationLabel.string = "Nhập Password!!!";
            this.notificationLabel.node.active = true;
        }
        
    },
    
    addUserToScrollView(){
        
    },

    start () {
        //cc.log(Date());
    },

    // update (dt) {},
});
