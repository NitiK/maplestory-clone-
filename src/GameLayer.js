var GameLayer = cc.LayerColor.extend({
    init: function() {
        this._super( new cc.Color4B( 127, 127, 127, 255 ) );
        this.setPosition( new cc.Point( 0, 0 ) );
        
        this.background = new Background(0);
        this.background.setPosition(new cc.Point(0,0));
        this.addChild(this.background);
        this.background.scheduleUpdate();
        
        //this.createGround();
        this.createBlocks();
        //this.createTraps();
        this.createGate();
        
        /*this.Trap= new Trap(200,180);
        this.addChild(this.Trap);
        this.Trap.scheduleUpdate();*/

        this.jumper = new Jumper( 690, 160, 1313, 643, 0 );
        this.jumper.setBlocks( this.blocks );
        //this.jumper.setTraps(this.traps);
        this.jumper.setGates(this.gates);
        var followAction = cc.Follow.create(this.jumper, cc.rect(0, 0, 1313,643));
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
        for(var i=0;i<10;i++)
        {
            var Block1 = new Block( i*132, 0, 172, 39, 3);
            this.blocks.push( Block1 );
        }
        
        var Block1 = new Block( 360, 275, 172, 39, 4);
        this.blocks.push( Block1 );
        
        this.blocks.forEach( function( b ) {
            this.addChild( b );
        }, this );
    },
    
    createTraps: function(){
        this.traps =[];
        var Trap1 = new Trap(100,178,3,0,300,0);
        Trap1.scheduleUpdate();
        this.traps.push(Trap1);
        
        var Trap1 = new Trap(400,39,1,0,100,4);
        Trap1.scheduleUpdate();
        this.traps.push(Trap1);
        
        this.traps.forEach( function( b ) {
            this.addChild( b );
        }, this );
    },
    
    createGate: function(){
        this.gates =[];
        /*var gate1 = new Gate(1030,930);
        gate1.scheduleUpdate();
        this.gates.push(gate1);*/
        var gate1 = new Gate(650,35);
        gate1.scheduleUpdate();
        this.gates.push(gate1);
        
        this.gates.forEach( function( b ) {
            this.addChild( b ,99);
        }, this );
    },

    onKeyDown: function( e ) {
        this.jumper.handleKeyDown( e );
    },

    onKeyUp: function( e ) {
        this.jumper.handleKeyUp( e );
    }
});

var GameLayer1 = cc.LayerColor.extend({
    init: function() {
        this._super( new cc.Color4B( 127, 127, 127, 255 ) );
        this.setPosition( new cc.Point( 0, 0 ) );
        
        this.background = new Background(1);
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

        this.jumper = new Jumper( 50, 160, 1258, 1150, 1 );
        this.jumper.setBlocks( this.blocks );
        this.jumper.setTraps(this.traps);
        this.jumper.setGates(this.gates);
        var followAction = cc.Follow.create(this.jumper, cc.rect(0, 0, 1258,1150));
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
            var Block1 = new Block( i*132, 0, 132, 43, 0);
            this.blocks.push( Block1 );
        }
        var Block1 = new Block( 0, 0, 132, 43,0);
        this.blocks.push( Block1 );

        var Block1 = new Block( 200, 98, 132, 43, 0 );
        this.blocks.push( Block1 );

        var Block1 = new Block( 400, 200, 132, 43, 0 );
        this.blocks.push( Block1 );
        
        var Block1 = new Block( 600, 302, 132, 43, 0 );
        this.blocks.push( Block1 );
        
        var Block1 = new Block( 800, 400, 132, 43, 0 );
        this.blocks.push( Block1 );
        
        var Block1 = new Block( 600, 500, 132, 43, 0 );
        this.blocks.push( Block1 );
        
        var Block1 = new Block( 400, 600, 132, 43, 0 );
        this.blocks.push( Block1 );
        
        var Block1 = new Block( 200, 700, 132, 43, 0 );
        this.blocks.push( Block1 );
        
        var Block1 = new Block( 0, 800, 132, 43, 0 );
        this.blocks.push( Block1 );
        
        var Block1 = new Block( 200, 900, 66, 43, 0 );
        this.blocks.push( Block1 );
        
        var Block1 = new Block( 400, 900, 66, 43, 0 );
        this.blocks.push( Block1 );
        
        var Block1 = new Block( 600, 900, 66, 43, 0 );
        this.blocks.push( Block1 );
        
        var Block1 = new Block( 800, 900, 132, 43, 0 );
        this.blocks.push( Block1 );
        
        var Block1 = new Block( 1000, 900, 132, 43, 0 );
        this.blocks.push( Block1 );
        
        this.blocks.forEach( function( b ) {
            this.addChild( b );
        }, this );
    },
    
    createTraps: function(){
        this.traps =[];
        var Trap1 = new Trap(200,178,5,0,500,0);
        Trap1.scheduleUpdate();
        this.traps.push(Trap1);
        
        var Trap1 = new Trap(400,280,5,0,500,0);
        Trap1.scheduleUpdate();
        this.traps.push(Trap1);
        
        var Trap1 = new Trap(800,430,7,0,300,0);
        Trap1.scheduleUpdate();
        this.traps.push(Trap1);
        
        var Trap1 = new Trap(300,700,0,5,500,0);
        Trap1.scheduleUpdate();
        this.traps.push(Trap1);
        
        var Trap1 = new Trap(500,600,0,5,270,0);
        Trap1.scheduleUpdate();
        this.traps.push(Trap1);
        
        var Trap1 = new Trap(400,700,5,0,500,0);
        Trap1.scheduleUpdate();
        this.traps.push(Trap1);
        
        var Trap1 = new Trap(400,900,5,0,500,0);
        Trap1.scheduleUpdate();
        this.traps.push(Trap1);
        
        this.traps.forEach( function( b ) {
            this.addChild( b );
        }, this );
    },
    
    createGate: function(){
        this.gates =[];
        /*var gate1 = new Gate(1030,930);
        gate1.scheduleUpdate();
        this.gates.push(gate1);*/
        var gate1 = new Gate(1030,935);
        gate1.scheduleUpdate();
        this.gates.push(gate1);
        
        this.gates.forEach( function( b ) {
            this.addChild( b ,99);
        }, this );
    },

    onKeyDown: function( e ) {
        this.jumper.handleKeyDown( e );
    },

    onKeyUp: function( e ) {
        this.jumper.handleKeyUp( e );
    }
});

var GameLayer2 = cc.LayerColor.extend({
    init: function() {
        this._super( new cc.Color4B( 127, 127, 127, 255 ) );
        this.setPosition( new cc.Point( 0, 0 ) );
        
        this.background = new Background(2);
        this.background.setPosition(new cc.Point(0,0));
        this.addChild(this.background);
        this.background.scheduleUpdate();
        
        /*this.Trap= new Trap(200,180);
        this.addChild(this.Trap);
        this.Trap.scheduleUpdate();*/

        this.jumper = new Jumper( 50, 160, 1188, 2700, 2 );
        
        this.createBlocks();
        this.createTraps();
        this.createConnect();
        this.createGate();
        
        
        this.jumper.setBlocks( this.blocks );
        this.jumper.setTraps(this.traps);
        this.jumper.setGates(this.gates);
        this.jumper.setConnects(this.connects);
        var followAction = cc.Follow.create(this.jumper, cc.rect(0, 0, 1188,2700));
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
            var Block1 = new Block( i*132, 0, 132, 43, 0);
            this.blocks.push( Block1 );
        }
        var Block1 = new Block( 0, 0, 132, 43,0);
        this.blocks.push( Block1 );

        var Block1 = new Block( 200, 98, 132, 43, 0 );
        this.blocks.push( Block1 );

        var Block1 = new Block( 400, 200, 132, 43, 0 );
        this.blocks.push( Block1 );
        
        var Block1 = new Block( 600, 302, 132, 43, 0 );
        this.blocks.push( Block1 );
        
        var Block1 = new Block( 800, 400, 132, 43, 0 );
        this.blocks.push( Block1 );
        
        var Block1 = new Block( 600, 500, 132, 43, 0 );
        this.blocks.push( Block1 );
        
        var Block1 = new Block( 400, 600, 132, 43, 0 );
        this.blocks.push( Block1 );
        
        var Block1 = new Block( 200, 700, 132, 43, 0 );
        this.blocks.push( Block1 );
        
        var Block1 = new Block( 0, 800, 132, 43, 0 );
        this.blocks.push( Block1 );
        
        var Block1 = new Block( 200, 900, 66, 43, 0 );
        this.blocks.push( Block1 );
        
        var Block1 = new Block( 400, 900, 66, 43, 0 );
        this.blocks.push( Block1 );
        
        var Block1 = new Block( 600, 900, 66, 43, 0 );
        this.blocks.push( Block1 );
        
        var Block1 = new Block( 800, 900, 132, 43, 0 );
        this.blocks.push( Block1 );
        
        var Block1 = new Block( 1000, 900, 132, 43, 0 );
        this.blocks.push( Block1 );
        
        var Block1 = new Block( 800, 1000, 132, 43, 0 );
        this.blocks.push( Block1 );
        
        var Block1 = new Block( 700, 1100, 66, 43, 0 );
        this.blocks.push( Block1 );
        
        var Block1 = new Block( 500, 1100, 66, 43, 0 );
        this.blocks.push( Block1 );
        
        var Block1 = new Block( 300, 1100, 66, 43, 0 );
        this.blocks.push( Block1 );
        
         var Block1 = new Block( 100, 1200, 132, 43, 0 );
        this.blocks.push( Block1 );
        
        var Block1 = new Block( 300, 1300, 66, 43, 0 );
        this.blocks.push( Block1 );
        
        var Block1 = new Block( 400, 1400, 66, 43, 0 );
        this.blocks.push( Block1 );
        
        var Block1 = new Block( 500, 1300, 66, 43, 0 );
        this.blocks.push( Block1 );
        
        var Block1 = new Block( 600, 1400, 66, 43, 0 );
        this.blocks.push( Block1 );
        
        var Block1 = new Block( 700, 1300, 66, 43, 0 );
        this.blocks.push( Block1 );
        
        var Block1 = new Block( 800, 1400, 66, 43, 0 );
        this.blocks.push( Block1 );
        
        var Block1 = new Block( 900, 1500, 132, 43, 0 );
        this.blocks.push( Block1 );
        
        var Block1 = new Block( 1000, 1600, 132, 43, 0 );
        this.blocks.push( Block1 );
        
        var Block1 = new Block( 900, 1700, 132, 43, 0 );
        this.blocks.push( Block1 );
        
        var Block1 = new Block( 900, 1700, 132, 43, 0 );
        this.blocks.push( Block1 );
        
        var Block1 = new Block( 768, 1700, 132, 43, 0 );
        this.blocks.push( Block1 );
        
        var Block1 = new Block( 636, 1700, 132, 43, 0 );
        this.blocks.push( Block1 );
        
        var Block1 = new Block( 504, 1700, 132, 43, 0 );
        this.blocks.push( Block1 );
        
        var Block1 = new Block( 372, 1700, 132, 43, 0 );
        this.blocks.push( Block1 );
        
        var Block1 = new Block( 240, 1700, 132, 43, 0 );
        this.blocks.push( Block1 );
        
        var Block1 = new Block( 0, 1700, 132, 43, 0 );
        this.blocks.push( Block1 );
        
        var Block1 = new Block( 0, 1867, 132, 43, 0 );
        this.blocks.push( Block1 );

        this.blocks.forEach( function( b ) {
            this.addChild( b );
        }, this );
    },
    
    createTraps: function(){
        this.traps =[];
        var Trap1 = new Trap(200,178,5,0,500,0);
        Trap1.scheduleUpdate();
        this.traps.push(Trap1);
        
        var Trap1 = new Trap(400,280,5,0,500,0);
        Trap1.scheduleUpdate();
        this.traps.push(Trap1);
        
        var Trap1 = new Trap(800,430,7,0,300,0);
        Trap1.scheduleUpdate();
        this.traps.push(Trap1);
        
        var Trap1 = new Trap(300,700,0,5,500,0);
        Trap1.scheduleUpdate();
        this.traps.push(Trap1);
        
        var Trap1 = new Trap(500,600,0,5,270,0);
        Trap1.scheduleUpdate();
        this.traps.push(Trap1);
        
        var Trap1 = new Trap(400,700,5,0,500,0);
        Trap1.scheduleUpdate();
        this.traps.push(Trap1);
        
        var Trap1 = new Trap(400,900,5,0,500,0);
        Trap1.scheduleUpdate();
        this.traps.push(Trap1);
        
        var Trap1 = new Trap(400,1100,4,0,500,0);
        Trap1.scheduleUpdate();
        this.traps.push(Trap1);
        
        var Trap1 = new Trap(300,1400,7,0,500,0);
        Trap1.scheduleUpdate();
        this.traps.push(Trap1);
        
        var Trap1 = new Trap(900,1780,0,5,500,0);
        Trap1.scheduleUpdate();
        this.traps.push(Trap1);
        
        var Trap1 = new Trap(800,1780,0,5,500,0);
        Trap1.scheduleUpdate();
        this.traps.push(Trap1);
        
        var Trap1 = new Trap(700,1780,0,5,500,0);
        Trap1.scheduleUpdate();
        this.traps.push(Trap1);
        
        var Trap1 = new Trap(600,1780,0,5,500,0);
        Trap1.scheduleUpdate();
        this.traps.push(Trap1);
        
        var Trap1 = new Trap(400,1780,7,0,500,0);
        Trap1.scheduleUpdate();
        this.traps.push(Trap1);
        
        this.traps.forEach( function( b ) {
            this.addChild( b );
        }, this );
    },
    
    createGate: function(){
        this.gates =[];
        var gate1 = new Gate(0,1735);
        gate1.scheduleUpdate();
        this.gates.push(gate1);
        /*var gate1 = new Gate(0,35);
        gate1.scheduleUpdate();
        this.gates.push(gate1);*/
        
        this.gates.forEach( function( b ) {
            this.addChild( b,99 );
        }, this );
    },
    
    createConnect: function(){
        this.connects =[];
        var connect1 = new Connect(66,1750,22,167);
        connect1.scheduleUpdate();
        this.connects.push(connect1);
        /*var gate1 = new Gate(0,35);
        gate1.scheduleUpdate();
        this.gates.push(gate1);*/
        
        this.connects.forEach( function( b ) {
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

var GameLayer3 = cc.LayerColor.extend({
    init: function() {
        this._super( new cc.Color4B( 127, 127, 127, 255 ) );
        this.setPosition( new cc.Point( 0, 0 ) );
        
        this.background = new Background(3);
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

        this.jumper = new Jumper( 50, 160, 1874, 1400, 3 );
        this.jumper.setBlocks( this.blocks );
        this.jumper.setTraps(this.traps);
        this.jumper.setGates(this.gates);
        var followAction = cc.Follow.create(this.jumper, cc.rect(0, 0, 1874,1400));
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
        for(var i=0;i<5;i++)
        {
            if(i!=2)
            {
            var Block1 = new Block( i*289, 0, 289, 103, 1);
            this.blocks.push( Block1 );
            }
        }
        
        var Block1 = new Block( 1700, 0, 289, 103, 1 );
        this.blocks.push( Block1 );
        
        var Block1 = new Block( 200, 150, 237, 45, 2 );
        this.blocks.push( Block1 );

        var Block1 = new Block( 500, 250, 66, 43, 2 );
        this.blocks.push( Block1 );
        
        var Block1 = new Block( 400, 355, 66, 43, 2 );
        this.blocks.push( Block1 );
        
        var Block1 = new Block( 300, 460, 66, 43, 2 );
        this.blocks.push( Block1 );
        
        var Block1 = new Block( 0, 550, 237, 45, 2 );
        this.blocks.push( Block1 );
        
        var Block1 = new Block( 0, 650, 66, 45, 2 );
        this.blocks.push( Block1 );
        
        var Block1 = new Block( 100, 750, 66, 45, 2 );
        this.blocks.push( Block1 );
        
        var Block1 = new Block( 200, 850, 66, 45, 2 );
        this.blocks.push( Block1 );
        
        var Block1 = new Block( 300, 950, 237, 45, 2 );
        this.blocks.push( Block1 );
        
        var Block1 = new Block( 650, 950, 237, 45, 2 );
        this.blocks.push( Block1 );
        
        var Block1 = new Block( 887, 950, 237, 45, 2 );
        this.blocks.push( Block1 );
        
        var Block1 = new Block(1124, 950, 237, 45, 2 );
        this.blocks.push( Block1 );
        
        var Block1 = new Block(1361, 950, 237, 45, 2 );
        this.blocks.push( Block1 );
        
        var Block1 = new Block(1598, 950, 237, 45, 2 );
        this.blocks.push( Block1 );
        
        var Block1 = new Block(1808, 850, 66, 45, 2 );
        this.blocks.push( Block1 );
        
        var Block1 = new Block(1708, 750, 166, 45, 2 );
        this.blocks.push( Block1 );
        
        var Block1 = new Block(1600, 750, 166, 45, 2 );
        this.blocks.push( Block1 );
        
        var Block1 = new Block(1400, 750, 237, 45, 2 );
        this.blocks.push( Block1 );
        
        var Block1 = new Block(1200, 750, 237, 45, 2 );
        this.blocks.push( Block1 );
        
        var Block1 = new Block(1000, 750, 237, 45, 2 );
        this.blocks.push( Block1 );
        
        var Block1 = new Block(900, 650, 66, 45, 2 );
        this.blocks.push( Block1 );
        
        var Block1 = new Block(800, 545, 66, 45, 2 );
        this.blocks.push( Block1 );
        
        var Block1 = new Block(900, 440, 66, 45, 2 );
        this.blocks.push( Block1 );
        
        var Block1 = new Block(800, 335, 66, 45, 2 );
        this.blocks.push( Block1 );
        
        var Block1 = new Block(900, 250, 66, 45, 2 );
        this.blocks.push( Block1 );
        
        var Block1 = new Block(800, 150, 66, 45, 2 );
        this.blocks.push( Block1 );
        
        var Block1 = new Block(1000, 100, 237, 45, 2 );
        this.blocks.push( Block1 );
        
         var Block1 = new Block(1400, 150, 66, 45, 2 );
        this.blocks.push( Block1 );
        
        var Block1 = new Block(1300, 250, 66, 45, 2 );
        this.blocks.push( Block1 );
        
        var Block1 = new Block(1400, 350, 66, 45, 2 );
        this.blocks.push( Block1 );
        
        var Block1 = new Block(1300, 450, 66, 45, 2 );
        this.blocks.push( Block1 );
        
        var Block1 = new Block(1200, 545, 237, 45, 2 );
        this.blocks.push( Block1 );
        
        var Block1 = new Block(1400, 545, 237, 45, 2 );
        this.blocks.push( Block1 );
        
        var Block1 = new Block(1500, 545, 237, 45, 2 );
        this.blocks.push( Block1 );
        
        var Block1 = new Block(1600, 545, 66, 45, 2 );
        this.blocks.push( Block1 );
        
        var Block1 = new Block(1800, 550, 66, 45, 2 );
        this.blocks.push( Block1 );
        
        var Block1 = new Block(1700, 450, 66, 45, 2 );
        this.blocks.push( Block1 );
        
        var Block1 = new Block(1800, 350, 66, 45, 2 );
        this.blocks.push( Block1 );
        
        var Block1 = new Block(1700, 250, 66, 45, 2 );
        this.blocks.push( Block1 );
        
        var Block1 = new Block(1800, 150, 66, 45, 2 );
        this.blocks.push( Block1 );

        this.blocks.forEach( function( b ) {
            this.addChild( b );
        }, this );
    },
    
    createTraps: function(){
        this.traps =[];
        var Trap1 = new Trap(220,195,1,0,220,1);
        Trap1.scheduleUpdate();
        this.traps.push(Trap1);
        
        var Trap1 = new Trap(220,195,2,0,220,5);
        Trap1.scheduleUpdate();
        this.traps.push(Trap1);
        
        var Trap1 = new Trap(400,330,5,0,400,0);
        Trap1.scheduleUpdate();
        this.traps.push(Trap1);
        
        var Trap1 = new Trap(300,435,5,0,400,0);
        Trap1.scheduleUpdate();
        this.traps.push(Trap1);
        
        var Trap1 = new Trap(0,595,2,0,220,1);
        Trap1.scheduleUpdate();
        this.traps.push(Trap1);
        
        var Trap1 = new Trap(0,695,5,0,500,0);
        Trap1.scheduleUpdate();
        this.traps.push(Trap1);
        
         var Trap1 = new Trap(130,840,0,5,400,0);
        Trap1.scheduleUpdate();
        this.traps.push(Trap1);
        
        var Trap1 = new Trap(230,940,0,6,400,0);
        Trap1.scheduleUpdate();
        this.traps.push(Trap1);
        
        var Trap1 = new Trap(300,995,2,0,220,2);
        Trap1.scheduleUpdate();
        this.traps.push(Trap1);
        
        var Trap1 = new Trap(900,1050,3,0,800,3);
        Trap1.scheduleUpdate();
        this.traps.push(Trap1);
        
        var Trap1 = new Trap(700,995,3,0,600,5);
        Trap1.scheduleUpdate();
        this.traps.push(Trap1);
        
        var Trap1 = new Trap(1400,995,2,0,400,2);
        Trap1.scheduleUpdate();
        this.traps.push(Trap1);
        
        var Trap1 = new Trap(1300,995,3,0,400,5);
        Trap1.scheduleUpdate();
        this.traps.push(Trap1);
        
        var Trap1 = new Trap(1000,795,3,0,970,5);
        Trap1.scheduleUpdate();
        this.traps.push(Trap1);
        
        var Trap1 = new Trap(1060,595,0,3,300,0);
        Trap1.scheduleUpdate();
        this.traps.push(Trap1);
        
        var Trap1 = new Trap(1190,595,0,3,300,0);
        Trap1.scheduleUpdate();
        this.traps.push(Trap1);
        
        var Trap1 = new Trap(1320,595,0,3,300,0);
        Trap1.scheduleUpdate();
        this.traps.push(Trap1);
        
        var Trap1 = new Trap(1450,595,0,3,300,0);
        Trap1.scheduleUpdate();
        this.traps.push(Trap1);
        
        var Trap1 = new Trap(1580,595,0,3,300,0);
        Trap1.scheduleUpdate();
        this.traps.push(Trap1);
        
        var Trap1 = new Trap(700,630,7,0,700,0);
        Trap1.scheduleUpdate();
        this.traps.push(Trap1);
        
        var Trap1 = new Trap(700,525,3,0,400,0);
        Trap1.scheduleUpdate();
        this.traps.push(Trap1);
        
        var Trap1 = new Trap(1100,145,0.5,0,30,4);
        Trap1.scheduleUpdate();
        this.traps.push(Trap1);
        
        var Trap1 = new Trap(1250,295,5,0,500,0);
        Trap1.scheduleUpdate();
        this.traps.push(Trap1);
        
        var Trap1 = new Trap(1250,495,5,0,500,0);
        Trap1.scheduleUpdate();
        this.traps.push(Trap1);
        
        var Trap1 = new Trap(1500,630,7,0,500,0);
        Trap1.scheduleUpdate();
        this.traps.push(Trap1);
        
        this.traps.forEach( function( b ) {
            this.addChild( b );
        }, this );
    },
    
    createGate: function(){
        this.gates =[];
        /*var gate1 = new Gate(1030,930);
        gate1.scheduleUpdate();
        this.gates.push(gate1);*/
        var gate1 = new Gate(1750,90);
        gate1.scheduleUpdate();
        this.gates.push(gate1);
        
        this.gates.forEach( function( b ) {
            this.addChild( b ,99);
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




GameLayer.create = function (stage) {
    if(stage==0)
    {
    var sg = new GameLayer1();
    sg.init();
    return sg;
    }
    else if(stage==1)
    {
     var sg = new GameLayer2();
    sg.init();
    return sg;
    }
    else if(stage==2)
    {
     var sg = new GameLayer3();
    sg.init();
    return sg;
    }
    else if(stage==3)
    {
     var sg = new GameLayer();
    sg.init();
    return sg;
    }
};
 
GameLayer.scene = function (stage) {
    
        var scene = cc.Scene.create();
        var layer = GameLayer.create(stage);
        scene.addChild(layer);
        return scene;
};
