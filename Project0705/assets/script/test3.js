
cc.Class({
    extends: cc.Component,

    properties: {
        usernameEditBox : cc.EditBox,
        passwordEditBox : cc.EditBox,
        _username: null,
        _password: null,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.node.dispatchEvent( new cc.Event.EventCustom('setData', 'username', this.usernameEditBox));
    },

    onClick(){
        
    },

    start () {

    },

    // update (dt) {},
});
