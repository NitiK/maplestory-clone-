var GameLayer = cc.LayerColor.extend({
    onKeyDown: function( e ) {
        this.player.handleKeyDown( e );
    },

    onKeyUp: function( e ) {
        this.player.handleKeyUp( e );
    },
    init: function() {
        this._super( new cc.Color4B( 127, 127, 127, 255 ) );
        this.setPosition( new cc.Point( 0, 0 ) );
        this.background0 = new Background(2);
        this.background0.setAnchorPoint(0,0);
        this.addChild(this.background0);
        this.background = new Background(1);
        this.background.setAnchorPoint(0,0);
        this.background.setPosition(new cc.Point(0,0));
        this.background.scheduleUpdate();
        this.addChild(this.background);
        this.player = new Player(250,75);
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
