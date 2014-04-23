var GameLayer = cc.LayerColor.extend({
    init: function() {
        this._super( new cc.Color4B( 127, 127, 127, 255 ) );
        this.setPosition( new cc.Point( 0, 0 ) );

        this.createBlocks();

        this.jumper = new Jumper( 50, 160 );
        this.jumper.setBlocks( this.blocks );
        var followAction = cc.Follow.create(this.jumper, cc.rect(0, 0, 200,200));
        this.runAction(followAction);
        this.addChild( this.jumper );
        this.scheduleOnce(function() {
            this.jumper.scheduleUpdate();
        }, 1);
        
        this.setKeyboardEnabled( true );

        this.scheduleUpdate();
        
        return true;
    },

    createBlocks: function() {
        this.blocks = [];
        var Block1 = new Block( 0, 0, 132, 43);
        this.blocks.push( Block1 );

        var Block2 = new Block( 200, 200, 332, 243 );
        this.blocks.push( Block2 );

        var Block3 = new Block( 400, 400, 532, 443 );
        this.blocks.push( Block3 );
        
        var Block4 = new Block( 600, 600, 732, 643 );
        this.blocks.push( Block4 );

        this.blocks.forEach( function( b ) {
            this.addChild( b );
        }, this );
    },

    onKeyDown: function( e ) {
        this.jumper.handleKeyDown( e );
    },

    onKeyUp: function( e ) {
        this.jumper.handleKeyUp( e );
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

