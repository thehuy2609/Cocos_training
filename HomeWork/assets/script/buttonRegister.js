cc.Class({
    extends: cc.Component,

    properties: {
        usernameEditBox : cc.EditBox,
        passwordEditBox : cc.EditBox,
        registerButton: cc.Button,
        notificationRichText: cc.RichText,
        FullListRichText: cc.RichText,
        usernameLabel: cc.Label,
        passwordLabel: cc.Label,
        userScrollView : cc.ScrollView,
        userProgressBar : cc.ProgressBar,
        prefabItemScrollView: cc.Prefab,
        _validUsername: false,
        _validPassword: false,
        _successAddScrollView: false,
        _content: null,
        _firstYItem: 25,
    },

    onLoad(){
        this.registerButton.node.on('click', this.clickButtonRegister, this);
        this._content = this.userScrollView.node.getChildByName("view").getChildByName("content");
    },

    clickButtonRegister(){
        if(this._validUsername === true && this._validPassword === true){
            this.showNotification();
            this.addUserToScrollView();
            this.updateProgressBar();
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
                this.usernameLabel.string = "Username tối đa 10 ký tự và không nhập ký tự đặc biệt!!!";
                this.usernameLabel.node.active = true;
                this._validUsername = false;
            }else{
                this.usernameLabel.string = "";
                this.usernameLabel.node.active = false;
                this._validUsername = true;
            }
        }else{
            this.usernameLabel.string = "Nhập Username!!!";
            this.usernameLabel.node.active = true;
            this._validUsername = false;
        }
    },

    validatePassword(){
        let regPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{6,12}$/;
        if(this.passwordEditBox.string.length > 0){
            if(regPassword.test(this.passwordEditBox.string) === false){
                this.passwordLabel.string = "Password từ 6 - 12 ký tự và chứa ít nhất 1 chữ thường, 1 chữ in hoa và 1 số!!!";
                this.passwordLabel.node.active = true;
                this._validPassword = false;
            }else{
                this.passwordLabel.string = "";
                this.passwordLabel.node.active = false;
                this._validPassword = true;
            }
        }else{
            this.passwordLabel.string = "Nhập Password!!!";
            this.passwordLabel.node.active = true;
            this._validPassword = false;
        }
        
    },
    
    addUserToScrollView(){
        let itemScrollView = cc.instantiate(this.prefabItemScrollView);
        itemScrollView.getComponent(cc.Label).string = this.usernameEditBox.string;
        itemScrollView.parent = this._content;
        itemScrollView.y = this._firstYItem -= 25;
        this._successAddScrollView = true;
    },

    updateProgressBar(){
        if(this._successAddScrollView === true){
            if(this.userProgressBar.progress < 1){
                this.userProgressBar.progress += 0.01*(100/8);
                this._successAddScrollView = false;
            }
            if(this.userProgressBar.progress === 1){
                this.FullListRichText.node.active = true;
                this.registerButton.interactable = false;
            }
            cc.log(this.userProgressBar.progress);
        }
    },

    start () {
        //this._firstYItem = this.userScrollView.node.height/2;
        //cc.log(this._firstYItem);
    },

    // update (dt) {},
});
