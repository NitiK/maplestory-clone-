var Jumper = cc.Sprite.extend({
    ctor: function( x, y ) {
        this._super();
        this.initWithFile( 'res/images/player/jumper2.png' );
        this.setAnchorPoint( cc.p( 0.5, 0 ) );
        this.x = x;
        this.y = y;

        this.maxVx = 3;
        this.accX = 2;
        this.backAccX = 1;
        this.jumpV = 10;
        this.g = -0.5;
        this.run=1;
        this.stop=0;
        
        this.vx = 0;
        this.vy = 0;

        this.moveLeft = false;
        this.moveRight = false;
        this.jump = false;
        this.onFloor = false;
        
        this.openOnFloorAction=0;
        this.openStandingAction=0;
        this.openWalkingAction=0;
        this.openJumpAction=0;
        
        this.onFloorAction=this.createOnFloorAction();
        this.standingAction=this.createStandingAction();
        this.walkingAction=this.createWalkingAction();
        this.jumpAction=this.createJumpAction();

        this.ground = null;

        this.blocks = [];
        this.traps = [];
        this.gates = [];

        this.updateSpritePosition();
    },

    updateSpritePosition: function() {
        this.setPosition( cc.p( Math.round( this.x ),
                                Math.round( this.y ) ) );
    },

    getPlayerRect: function() {
        var spriteRect = this.getBoundingBoxToWorld();
        var spritePos = this.getPosition();

        var dX = this.x - spritePos.x;
        var dY = this.y - spritePos.y;
        return cc.rect( spriteRect.x + dX,
                        spriteRect.y + dY,
                        spriteRect.width,
                        spriteRect.height );
    },
    
    update: function() {
        var currentPositionRect = this.getPlayerRect();

        this.updateYMovement();
        this.updateXMovement();

        var newPositionRect = this.getPlayerRect();
        this.handleCollision( currentPositionRect,
                              newPositionRect );

        this.updateSpritePosition();
    },
    
    isNotMove: function(){
        return ( !this.moveLeft ) && ( !this.moveRight );
    },
    
    TouchTraps: function(i){
        var spirteTrap = this.traps[i].getPosition();
        /*this.traps.forEach( function( b ) {
            var spriteTrap=b.getPosition();
        }, this );*/
        if(this.onFloor)
        {
           if((spirteTrap.x<=this.x+30&&spirteTrap.x>=this.x-30)&&         (spirteTrap.y<=this.y+30&&spirteTrap.y>=this.y-60))
           {
               return true;
           }
            else
            {
                return false;
            }
        }
        else if((spirteTrap.x<=this.x+30&&spirteTrap.x>=this.x-30)&&         (spirteTrap.y<=this.y+60&&spirteTrap.y>=this.y-60))
        {
            
            return true;
        }
        else{
            return false;
        }
    },
    
    bounceOff: function(i){
        
        if( this.traps[i].getMoveRight()==this.run )
        {
            this.x=500;
            this.y=50;
        }
        else if( this.traps[i].getMoveLeft()==this.run )
        {
            this.x=500;
            this.y=50;
        }
        else if( this.traps[i].getMoveUp()==this.run )
        {
            this.x=500;
            this.y=50;
        }
        else if( this.traps[i].getMoveDown()==this.run )
        {
            this.x=500;
            this.y=50;
        }
    },

    updateXMovement: function() {
            for(var i=0;i<7;i++)
            {
              if(this.TouchTraps(i))
              {
                    this.bounceOff(i);
              }
            }
            if ( this.ground ) {
               if ( this.isNotMove() ) {

                   this.StopWalkingAction();
                  if(this.onFloor)
                  {
                    this.StopStandingAction();
                    this.OnFloorAction();
                  }
                  else{
                    this.StopOnFloorAction();
                    this.StandingAction();
                   this.autoDeaccelerateX();
                  }
            } else if ( this.moveRight ) {
                this.WalkingAction();
                this.accelerateX( Jumper.accelRight );
                this.setFlippedX(true);
            } else if ( this.moveLeft ){
                this.WalkingAction();
                this.accelerateX( Jumper.accelLeft );
                this.setFlippedX(false);
            } 
        }
        if ( this.x < 20 && this.moveLeft) {
            
          this.vx=0;
        }
        else if ( this.x > 1168 && this.moveRight ) {
            this.vx=0;
        }
        this.x += this.vx;
    },
    
    JumpAction: function(){
        if(this.openJumpAction==0)
        {
         this.runAction( this.jumpAction );
         this.openJumpAction=1;    
        }
    },
    
    StopJumpAction: function(){
        if(this.openJumpAction==1)
        {
            this.stopAction(this.jumpAction);
            this.openJumpAction=0;
        }
    },
    
    WalkingAction: function(){
        if(this.openWalkingAction==0)
        {
         this.runAction( this.walkingAction );
         this.openWalkingAction=1;    
        }
    },
    
    StopWalkingAction: function(){
        if(this.openWalkingAction==1)
        {
            this.stopAction(this.walkingAction);
            this.openWalkingAction=0;
        }
    },
    
    OnFloorAction: function(){
        if(this.openOnFloorAction==0)
        {
         this.runAction( this.onFloorAction );
         this.openOnFloorAction=1;    
        }
    },
    
    StopOnFloorAction: function(){
        if(this.openOnFloorAction==1)
        {
            this.stopAction(this.onFloorAction);
            this.openOnFloorAction=0;
        }
    },
    
    StandingAction: function(){
        if(this.openStandingAction==0)
        {
            this.runAction( this.standingAction ); 
            this.openStandingAction=1;
        }
    },
    
     StopStandingAction: function(){
        if(this.openStandingAction==1)
        {
            this.stopAction(this.standingAction);
            this.openStandingAction=0;
        }
    },
    
    jumpUp: function(){
        this.vy = this.jumpV;
        this.y = this.ground.getTopY() + this.vy;
        this.ground = null;
    },
    
    fallDown: function(){
        this.vy += this.g;
        this.y += this.vy;
    },

    updateYMovement: function() {
        if ( this.ground ) {
            this.vy = 0;
            this.StopJumpAction();
            if ( this.jump ) {
                this.StopOnFloorAction();
                this.StopWalkingAction();
                this.StopStandingAction();
                this.JumpAction();
                this.jumpUp();        
            }
        } else {
            this.fallDown();
        }
    },

    isSameDirection: function( dir ) {
        return ( ( ( this.vx >=0 ) && ( dir >= 0 ) ) ||
                 ( ( this.vx <= 0 ) && ( dir <= 0 ) ) );
    },

    accelerateX: function( dir ) {
        if ( this.isSameDirection( dir ) ) {
            this.vx += dir * this.accX;
            if ( Math.abs( this.vx ) > this.maxVx ) {
                this.vx = dir * this.maxVx;
            }
        } else {
            if ( Math.abs( this.vx ) >= this.backAccX ) {
                this.vx += dir * this.backAccX;
            } else {
                this.vx = 0;
            }
        }
    },
    
    autoDeaccelerateX: function() {
        if ( Math.abs( this.vx ) < this.accX ) {
            this.vx = 0;
        } else if ( this.vx > 0 ) {
            this.vx -= this.accX;
        } else {
            this.vx += this.accX;
        }
    },

    handleCollision: function( oldRect, newRect ) {
        if ( this.ground ) {
            if ( !this.ground.onTop( newRect ) ) {
                this.ground = null;
            }
        } else {
            if ( this.vy <= 0 ) {
                var topBlock = this.findTopBlock( this.blocks,
                                                  oldRect,
                                                  newRect );
                
                if ( topBlock ) {
                    this.ground = topBlock;
                    this.y = topBlock.getTopY();
                    this.vy = 0;
                }
            }
        }
    },
    
    findTopBlock: function( blocks, oldRect, newRect ) {
        var topBlock = null;
        var topBlockY = -1;
        
        blocks.forEach( function( b ) {
            if ( b.hitTop( oldRect, newRect ) ) {
                if ( b.getTopY() > topBlockY ) {
                    topBlockY = b.getTopY();
                    topBlock = b;
                }
            }
        }, this );
        
        return topBlock;
    },
    
    handleKeyDown: function( e ) {
        if ( Jumper.KEYMAP[ e ] != undefined ) {
            this[ Jumper.KEYMAP[ e ] ] = true;
        }
    },

    handleKeyUp: function( e ) {
        if ( Jumper.KEYMAP[ e ] != undefined ) {
            this[ Jumper.KEYMAP[ e ] ] = false;
        }
    },

    setBlocks: function( blocks ) {
        this.blocks = blocks;
    },
    
    setTraps: function( traps ) {
        this.traps = traps;
    },
    
    setGates: function( gates ) {
        this.gates = gates;
    },
    
    createOnFloorAction: function() {
	var animation = new cc.Animation.create();
	animation.addSpriteFrameWithFile( 'res/images/player/Onfloor.png' );
	console.log( animation.getDelayPerUnit() );
	animation.setDelayPerUnit( 0.2 );
	return cc.RepeatForever.create( cc.Animate.create( animation ) );
    },
    
    createJumpAction: function() {
	var animation = new cc.Animation.create();
	animation.addSpriteFrameWithFile( 'res/images/playeranimation/jump/0.png' );
	console.log( animation.getDelayPerUnit() );
	animation.setDelayPerUnit( 0.2 );
	return cc.RepeatForever.create( cc.Animate.create( animation ) );
    },
    
    createStandingAction: function() {
	var animation = new cc.Animation.create();
	animation.addSpriteFrameWithFile( 'res/images/playeranimation/standing1/standing1.png' );
	animation.addSpriteFrameWithFile( 'res/images/playeranimation/standing1/standing2.png' );
    animation.addSpriteFrameWithFile( 'res/images/playeranimation/standing1/standing3.png' );
	console.log( animation.getDelayPerUnit() );
	animation.setDelayPerUnit( 0.4 );
	return cc.RepeatForever.create( cc.Animate.create( animation ) );
    },
    
    createWalkingAction: function() {
	var animation = new cc.Animation.create();
	animation.addSpriteFrameWithFile( 'res/images/playeranimation/walking1/walking1.png' );
	animation.addSpriteFrameWithFile( 'res/images/playeranimation/walking1/walking2.png' );
    animation.addSpriteFrameWithFile( 'res/images/playeranimation/walking1/walking3.png' );
    animation.addSpriteFrameWithFile( 'res/images/playeranimation/walking1/walking4.png' );
	console.log( animation.getDelayPerUnit() );
	animation.setDelayPerUnit( 0.1 );
	return cc.RepeatForever.create( cc.Animate.create( animation ) );
    }
});

Jumper.accelRight = 1;
Jumper.accelLeft = -1;
Jumper.KEYMAP = {}
Jumper.KEYMAP[cc.KEY.left] = 'moveLeft';
Jumper.KEYMAP[cc.KEY.right] = 'moveRight';
Jumper.KEYMAP[cc.KEY.space] = 'jump';
Jumper.KEYMAP[cc.KEY.down] = 'onFloor';
        
