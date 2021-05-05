
cc.Class({
    extends: cc.Component,

    properties: {
        progressBar : cc.ProgressBar,
        _speed: 0,
        _timer:0,
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    _updateProgressBar(progressBar,dt) {
        this._timer += dt;
        
        let progress = progressBar.progress;
        let conLai = 1 - progress;
        cc.log(conLai);
        if(progress < 1.0){
            //this.speed = 3*(1-progress); 
            progress += dt * this._speed;
        }else{
            //progress = dt * this.speed;
        }
        progressBar.progress = progress;
    },

    start () {

    },

    update (dt) {
        this._updateProgressBar(this.progressBar, dt);
    },
});
