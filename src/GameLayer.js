var GameLayer = cc.LayerColor.extend({
    onKeyDown: function( e ) {
	console.log( 'Down: ' + e );
        this.player.move(e);
    },
    onKeyUp: function( e ) {
	console.log( 'Up: ' + e );
        this.player.move(e);
    },
    init: function() {
        this._super( new cc.Color4B( 127, 127, 127, 255 ) );
        this.setPosition( new cc.Point( 0, 0 ) );
        this.background = new Background();
        this.background.setPosition(new cc.Point(434,200));
        this.background.scheduleUpdate();
        this.addChild(this.background);
        this.player = new Player();
        this.player.setPosition(new cc.Point(250,380));
        this.player.scheduleUpdate();
        this.addChild(this.player);
        this.setKeyboardEnabled( true );
        return true;
    }
});
var StartScene = cc.Scene.extend({
    onEnter: function() {
        this._super();
        var layer = new GameLayer();
        layer.init();
        this.addChild( layer );
    }
});
