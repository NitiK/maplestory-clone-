var Trap = cc.Sprite.extend({
    ctor: function( x, y ,vx,vy,area) {
        this._super();
        this.initWithFile( 'res/images/trap/trap1.png' );
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
        
        this.vx = vx;
        this.vy = vy;
        
        this.zonex=0;
        this.zoney=0;
        this.area=area;
        
        if(this.vx!=0)
        {
        this.moveLeft = this.run;
        this.moveRight = this.run;
        }
        else{
        this.moveLeft = this.stop;
        this.moveRight = this.stop;
        }
        
        if(this.vy!=0)
        {
        this.moveUp= this.run;
        this.moveDown= this.run;
        }
        else{
        this.moveUp= this.stop;
        this.moveDown= this.stop;
        }
        
        this.openTrap1Action=0;
        
        this.trap1Action=this.createTrap1Action();

        this.ground = null;

        this.blocks = [];

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

        
        this.updateXMovement();
        this.updateYMovement();

       

        this.updateSpritePosition();
    },
    
    isNotMove: function(){
        return ( !this.moveLeft ) && ( !this.moveRight );
    },
    
    Trap1Action: function(){
        if(this.openTrap1Action==0)
        {
         this.runAction( this.trap1Action );
         this.openTrap1Action=1;    
        }
    },
    
    getMoveRight: function(){
        return this.moveRight;
    },
    
    getMoveLeft: function(){
        return this.moveLeft;
    },
    
    getMoveUp: function(){
        return this.moveUp;
    },
    
    getMoveDown: function(){
        return this.moveDown;
    },
    
    updateXMovement: function() {
        this.Trap1Action();
        if(this.moveRight==this.run)
        {
          if(this.zonex<this.area)
          {
              this.x+=this.vx;
              this.zonex+=this.vx;
          }
          else
          {
              this.moveRight=this.stop;
              this.moveLeft=this.run;
              this.zonex=0;
          }
        }
        else if(this.moveLeft==this.run){
          if(this.zonex<this.area)
          {
              this.x-=this.vx;
              this.zonex+=this.vx;
          }
          else
          {
              this.moveLeft=this.stop;
              this.moveRight=this.run;
              this.zonex=0;
          }   
        }
        /*if ( this.x < 0 ) {
            this.x += screenWidth;
        }
        if ( this.x > screenWidth ) {
            this.x -= screenWidth;
        }*/
    },
    
    updateYMovement: function() {
        this.Trap1Action();
        if(this.moveUp==this.run)
        {
          if(this.zoney<this.area)
          {
              this.y+=this.vy;
              this.zoney+=this.vy;
          }
          else
          {
              this.moveUp=this.stop;
              this.moveDown=this.run;
              this.zoney=0;
          }
        }
        else if(this.moveDown==this.run){
          if(this.zoney<this.area)
          {
              this.y-=this.vy;
              this.zoney+=this.vy;
          }
          else
          {
              this.moveDown=this.stop;
              this.moveUp=this.run;
              this.zoney=0;
          }   
        }
        /*if ( this.x < 0 ) {
            this.x += screenWidth;
        }
        if ( this.x > screenWidth ) {
            this.x -= screenWidth;
        }*/
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
    
    createTrap1Action: function() {
	var animation = new cc.Animation.create();
	animation.addSpriteFrameWithFile( 'res/images/trapanimation/trap1animation/0.png' );
    animation.addSpriteFrameWithFile( 'res/images/trapanimation/trap1animation/1.png' );
    animation.addSpriteFrameWithFile( 'res/images/trapanimation/trap1animation/2.png' );
	console.log( animation.getDelayPerUnit() );
	animation.setDelayPerUnit( 0.01 );
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
    }
});

Trap.accelRight = 1;
Trap.accelLeft = -1;
        
