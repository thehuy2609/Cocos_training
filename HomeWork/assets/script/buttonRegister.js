cc.Class({
    extends: cc.Component,

    properties: {
        usernameEditBox : cc.EditBox,
        passwordEditBox : cc.EditBox,
        registerButton: cc.Button,
        notificationRichText: cc.RichText,
        notificationLabel: cc.Label,
        userScrollView : cc.ScrollView,
        prefabItemScrollView: cc.Prefab,
        _validUsername: false,
        _validPassword: false,
        _content: null,
    },

    onLoad(){
        this.registerButton.node.on('click', this.clickButtonRegister, this);
        this._content = this.userScrollView.node.getChildByName("view").getChildByName("content");
        
    },

    clickButtonRegister(){
        if(this._validUsername === true && this._validPassword === true){
            this.showNotification();
            this.addUserToScrollView();
        }
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
                this._validUsername = false;
            }else{
                this.notificationLabel.string = "";
                this.notificationLabel.node.active = false;
                this._validUsername = true;
            }
        }else{
            this.notificationLabel.string = "Nhập Username!!!";
            this.notificationLabel.node.active = true;
            this._validUsername = false;
        }
    },

    validatePassword(){
        let regPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{6,12}$/;
        if(this.passwordEditBox.string.length > 0){
            if(regPassword.test(this.passwordEditBox.string) === false){
                this.notificationLabel.string = "Password từ 6 - 12 ký tự và chứa ít nhất 1 chữ thường, 1 chữ in hoa và 1 số!!!";
                this.notificationLabel.node.active = true;
                this._validPassword = false;
            }else{
                this.notificationLabel.string = "";
                this.notificationLabel.node.active = false;
                this._validPassword = true;
            }
        }else{
            this.notificationLabel.string = "Nhập Password!!!";
            this.notificationLabel.node.active = true;
            this._validPassword = false;
        }
        
    },
    
    addUserToScrollView(){
        //this.prefabItemScrollView.string = this.usernameEditBox.string;
        let itemScrollView = cc.instantiate(this.prefabItemScrollView);
        itemScrollView.string = this.usernameEditBox.string;
        itemScrollView.parent = this._content;
        this._content.children[this._content.children.length-1].string = this.usernameEditBox.string;
        cc.log(this._content.children[0].string);
    },

    start () {
        //cc.log(Date());
    },

    // update (dt) {},
});
