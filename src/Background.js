var Background = cc.Sprite.extend({
    ctor: function(e) {
        this._super();
        if( e == 1) this.initWithFile( 'background/background1.png' );
        else this.initWithFile( 'background/background2.png' );
    }
});