var GameLayer = cc.LayerColor.extend({
    init: function() {
        this._super( new cc.Color4B( 127, 127, 127, 255 ) );
        this.setPosition( new cc.Point( 0, 0 ) );
        
        this.background = new Background();
        this.background.setAnchorPoint(0,0);
        this.background.setPosition(new cc.Point(0,0));
        this.addChild(this.background);
        this.background.scheduleUpdate();
        
        //this.createGround();
        this.createBlocks();
        this.createTraps();
        this.createGate();
        
        /*this.Trap= new Trap(200,180);
        this.addChild(this.Trap);
        this.Trap.scheduleUpdate();*/

        this.jumper = new Jumper( 50, 160 );
        this.jumper.setBlocks( this.blocks );
        this.jumper.setTraps(this.traps);
        this.jumper.setGates(this.gates);
        var followAction = cc.Follow.create(this.jumper, cc.rect(0, 0, 1188,2000));
        this.runAction(followAction);
        this.addChild( this.jumper );
        
        this.scheduleOnce(function() {
            this.jumper.scheduleUpdate();
        }, 1);
        
        this.setKeyboardEnabled( true );

        this.scheduleUpdate();
        
        return true;
    },
    
    /*createGround: function() {
        this.blocks = [];
        for(var i=1;i<5;i++)
        {
            var Block1 = new Block( i*132, 0, 132, 43);
            this.blocks.push( Block1 );
        }

        this.blocks.forEach( function( b ) {
            this.addChild( b );
        }, this );
    },*/

    createBlocks: function() {
        this.blocks = [];
        for(var i=1;i<9;i++)
        {
            var Block1 = new Block( i*132, 0, 132, 43);
            this.blocks.push( Block1 );
        }
        var Block1 = new Block( 0, 0, 132, 43);
        this.blocks.push( Block1 );

        var Block1 = new Block( 200, 100, 132, 43 );
        this.blocks.push( Block1 );

        var Block1 = new Block( 400, 200, 132, 43 );
        this.blocks.push( Block1 );
        
        var Block1 = new Block( 600, 300, 132, 43 );
        this.blocks.push( Block1 );
        
        var Block1 = new Block( 800, 400, 132, 43 );
        this.blocks.push( Block1 );
        
        var Block1 = new Block( 600, 500, 132, 43 );
        this.blocks.push( Block1 );
        
        var Block1 = new Block( 400, 600, 132, 43 );
        this.blocks.push( Block1 );
        
        var Block1 = new Block( 200, 700, 132, 43 );
        this.blocks.push( Block1 );
        
        var Block1 = new Block( 0, 800, 132, 43 );
        this.blocks.push( Block1 );
        
        var Block1 = new Block( 200, 900, 66, 43 );
        this.blocks.push( Block1 );
        
        var Block1 = new Block( 400, 900, 66, 43 );
        this.blocks.push( Block1 );
        
        var Block1 = new Block( 600, 900, 66, 43 );
        this.blocks.push( Block1 );
        
        var Block1 = new Block( 800, 900, 132, 43 );
        this.blocks.push( Block1 );
        
        var Block1 = new Block( 1000, 900, 132, 43 );
        this.blocks.push( Block1 );

        this.blocks.forEach( function( b ) {
            this.addChild( b );
        }, this );
    },
    
    createTraps: function(){
        this.traps =[];
        var Trap1 = new Trap(200,180,5,0,500);
        Trap1.scheduleUpdate();
        this.traps.push(Trap1);
        
        var Trap1 = new Trap(400,280,5,0,500);
        Trap1.scheduleUpdate();
        this.traps.push(Trap1);
        
        var Trap1 = new Trap(800,430,7,0,300);
        Trap1.scheduleUpdate();
        this.traps.push(Trap1);
        
        var Trap1 = new Trap(300,700,0,5,500);
        Trap1.scheduleUpdate();
        this.traps.push(Trap1);
        
        var Trap1 = new Trap(500,600,0,5,300);
        Trap1.scheduleUpdate();
        this.traps.push(Trap1);
        
        var Trap1 = new Trap(400,700,5,0,500);
        Trap1.scheduleUpdate();
        this.traps.push(Trap1);
        
        var Trap1 = new Trap(400,900,5,0,500);
        Trap1.scheduleUpdate();
        this.traps.push(Trap1);
        
        this.traps.forEach( function( b ) {
            this.addChild( b );
        }, this );
    },
    
    createGate: function(){
        this.gates =[];
        var gate1 = new Gate(1030,930);
        gate1.scheduleUpdate();
        this.gates.push(gate1);
        
        this.gates.forEach( function( b ) {
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

