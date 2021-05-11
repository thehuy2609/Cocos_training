const Emitter = require("eventEmitter");

cc.Class({
    extends: cc.Component,

    properties: {
        usernameEditBox : cc.EditBox,
        passwordEditBox : cc.EditBox,
        notificationRichText: cc.RichText,
        FullListRichText: cc.RichText,
        userScrollView : cc.ScrollView,
        userProgressBar : cc.ProgressBar,
        prefabItemScrollView: cc.Prefab,
        registerButton : cc.Button,
        _validUsername: false,
        _validPassword: false,
        _username: null,
        _content: null,
        _firstYItem: 35,
    },

    // LIFE-CYCLE CALLBACKS:

    validateUsername(){
        let regUsername = /^[A-Za-z0-9]{1,10}$/;
        let usernameLabel = this.usernameEditBox.node.getChildByName("usernameLabel");
        this._username = this.usernameEditBox.string;
        
        if(this.usernameEditBox.string.length > 0){
            if(regUsername.test(this.usernameEditBox.string) === false){
                usernameLabel.getComponent(cc.Label).string = "Username tối đa 10 ký tự và không nhập ký tự đặc biệt!!!";
                this._validUsername = false;
            }else{
                usernameLabel.getComponent(cc.Label).string = "Username hợp lệ!!!";
                this._validUsername = true;
            }
        }else{
            usernameLabel.getComponent(cc.Label).string = "Nhập Username!!!";
            this._validUsername = false;
        }
    },

    validatePassword(){
        let regPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{6,12}$/;
        let passwordLabel = this.passwordEditBox.node.getChildByName("passwordLabel");
        if(this.passwordEditBox.string.length > 0){
            if(regPassword.test(this.passwordEditBox.string) === false){
                passwordLabel.getComponent(cc.Label).string = "Password từ 6 - 12 ký tự và chứa ít nhất 1 chữ thường, 1 chữ in hoa và 1 số!!!";
                this._validPassword = false;
            }else{
                passwordLabel.getComponent(cc.Label).string = "Mật khẩu hợp lệ!!!";
                this._validPassword = true;
            }
        }else{
            passwordLabel.getComponent(cc.Label).string = "Nhập Password!!!";
            this._validPassword = false;
        }
    },
    
    clickButtonRegister(){
        if(this._validUsername === true && this._validPassword === true){
            this.showNotification();
            Emitter.instance.emit('addUserToScrollView', this._username);
            this.updateProgressBar();
        }
        if(this.userProgressBar.progress === 1){
            this.FullListRichText.node.active = true;
            this.registerButton.interactable = false;
        }
    },

    showNotification(){
        let timeNow = new Date(Date.now()).toLocaleTimeString('it-IT');
        this.notificationRichText.string = "Chào mừng <color=#FF0000><u>" + this.usernameEditBox.string + "</></> đã gia nhập <color=#FFFF00><i>" + timeNow + "</></>";
    },

    updateProgressBar(){
        if(this.userProgressBar.progress < 1){
            this.userProgressBar.progress += 1/8;
        }
    },

    onLoad (){
        Emitter.instance = new Emitter();
    },

    start () {

    },

    // update (dt) {},
});
