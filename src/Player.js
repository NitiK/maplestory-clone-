var Player = cc.Sprite.extend({
    ctor: function(x,y) {
        this._super();
        this.initWithFile( 'player/player.png' );
        this.x=x;
        this.y=y;
        
        this.maxVx = 3;
        this.accX = 2;
        this.backAccX = 2;
        this.jumpV = 10;
        this.g = -0.5;
        
        this.vx = 0;
        this.vy = 0;

        this.moveLeft = false;
        this.moveRight = false;
        this.jump = false;

        this.ground = true;
        this.updatePosition();
    },
    updatePosition: function() {
        this.setPosition( cc.p( Math.round( this.x ),
                                Math.round( this.y ) ) );
    },

    update: function() {
        var oldRect = this.getBoundingBoxToWorld();
        var oldX = this.x;
        var oldY = this.y;
        
        this.updateYMovement();
        this.updateXMovement();

        var dX = this.x - oldX;
        var dY = this.y - oldY;
        
        var newRect = cc.rect( oldRect.x + dX,
                               oldRect.y + dY - 1,
                               oldRect.width,
                               oldRect.height + 1 );

       
        this.updatePosition();
    },

    updateXMovement: function() {
        if ( this.ground ) {
            if ( ( !this.moveLeft ) && ( !this.moveRight ) ) {
                this.autoDeaccelerateX();
            } else if ( this.moveRight ) {
                this.accelerateX( Player.accelRight );
            } else {
                this.accelerateX( Player.accelLeft );
            }
        }
        this.x += this.vx;
        /*if ( this.x < 0 ) {
            this.x += 640;
        }
        if ( this.x > 640 ) {
            this.x -= 640;
        }*/
    },
    jumpUp: function(){
                this.vy = this.jumpV;
                this.y = 112 + this.vy;
                this.ground = null;
    },
    fallDown: function(){
            this.vy += this.g;
            this.y += this.vy;
    },
    updateYMovement: function() {
        if ( this.ground ) {
            this.vy = 0;
            if ( this.jump ) {
                this.jumpUp();
            }
        }
        else if(this.y>112){
            this.fallDown();
        }
        else{
           this.vy=0;
            this.ground=true;
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
    handleKeyDown: function( e ) {
        if ( Player.KEYMAP[ e ] != undefined ) {
            this[ Player.KEYMAP[ e ] ] = true;
        }
    },

    handleKeyUp: function( e ) {
        if ( Player.KEYMAP[ e ] != undefined ) {
            this[ Player.KEYMAP[ e ] ] = false;
        }
    }
    ,createStandingAction: function() {
	var animation = new cc.Animation.create();
	animation.addSpriteFrameWithFile( 'playeranimation/standing1/standing1.png' );
	animation.addSpriteFrameWithFile( 'playeranimation/standing1/standing2.png' );
    animation.addSpriteFrameWithFile( 'playeranimation/standing1/standing3.png' );
	console.log( animation.getDelayPerUnit() );
	animation.setDelayPerUnit( 0.2 );
	return cc.RepeatForever.create( cc.Animate.create( animation ) );
    }
    ,createMovingAction: function() {
	var animation = new cc.Animation.create();
	animation.addSpriteFrameWithFile( 'playeranimation/walking1/walking1.png' );
	animation.addSpriteFrameWithFile( 'playeranimation/walking1/walking2.png' );
    animation.addSpriteFrameWithFile( 'playeranimation/walking1/walking3.png' );
    animation.addSpriteFrameWithFile( 'playeranimation/walking1/walking4.png' );
	console.log( animation.getDelayPerUnit() );
	animation.setDelayPerUnit( 0.2 );
	return cc.RepeatForever.create( cc.Animate.create( animation ) );
    }
});

Player.accelRight = 1;
Player.accelLeft = -1;
Player.KEYMAP = {}
Player.KEYMAP[cc.KEY.left] = 'moveLeft';
Player.KEYMAP[cc.KEY.right] = 'moveRight';
Player.KEYMAP[cc.KEY.space] = 'jump';