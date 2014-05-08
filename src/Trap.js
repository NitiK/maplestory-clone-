var Trap = cc.Sprite.extend({
    ctor: function( x, y ,vx,vy,area,i) {
        this._super();
        if(i==0)
        {
        this.initWithFile( 'res/images/trap/trap1.png' );
        }
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
        
        this.openTrapAction=0;
        
        this.trapAction=this.createActionTrap(i);

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
    
    TrapAction: function(){
        if(this.openTrapAction==0)
        {
         this.runAction( this.trapAction );
         this.openTrapAction=1;    
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
        this.TrapAction();
        if(this.moveRight==this.run)
        {
          this.setFlippedX(true);    
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
          this.setFlippedX(false);    
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
        this.TrapAction();
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
    
    createActionTrap: function(i)
    {
        if(i==0)
        {
            return this.createTrap1Action();
        }
        else if(i==1)
        {
            return this.createTrap2Action();
        }
        else if(i==2)
        {
             return this.createTrap3Action();
        }
        else if(i==3)
        {
             return this.createTrap4Action();
        }
        else if(i==4)
        {
             return this.createTrap5Action();
        }
        else if(i==5)
        {
             return this.createTrap6Action();
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
    
    createTrap2Action: function() {
	var animation = new cc.Animation.create();
	animation.addSpriteFrameWithFile( 'res/images/trapanimation/trap2animation/0.png' );
	animation.addSpriteFrameWithFile( 'res/images/trapanimation/trap2animation/1.png' );
    animation.addSpriteFrameWithFile( 'res/images/trapanimation/trap2animation/2.png' );
    animation.addSpriteFrameWithFile( 'res/images/trapanimation/trap2animation/3.png' );
	console.log( animation.getDelayPerUnit() );
	animation.setDelayPerUnit( 0.2 );
	return cc.RepeatForever.create( cc.Animate.create( animation ) );
    },
    
    createTrap3Action: function() {
	var animation = new cc.Animation.create();
	animation.addSpriteFrameWithFile( 'res/images/trapanimation/trap3animation/0.png' );
	animation.addSpriteFrameWithFile( 'res/images/trapanimation/trap3animation/1.png' );
    animation.addSpriteFrameWithFile( 'res/images/trapanimation/trap3animation/2.png' );
    animation.addSpriteFrameWithFile( 'res/images/trapanimation/trap3animation/3.png' );
	console.log( animation.getDelayPerUnit() );
	animation.setDelayPerUnit( 0.2 );
	return cc.RepeatForever.create( cc.Animate.create( animation ) );
    },
    
    createTrap4Action: function() {
	var animation = new cc.Animation.create();
	animation.addSpriteFrameWithFile( 'res/images/trapanimation/trap4animation/0.png' );
	animation.addSpriteFrameWithFile( 'res/images/trapanimation/trap4animation/1.png' );
    animation.addSpriteFrameWithFile( 'res/images/trapanimation/trap4animation/2.png' );
    animation.addSpriteFrameWithFile( 'res/images/trapanimation/trap4animation/3.png' );
	console.log( animation.getDelayPerUnit() );
	animation.setDelayPerUnit( 0.2 );
	return cc.RepeatForever.create( cc.Animate.create( animation ) );
    },
    
    createTrap5Action: function() {
	var animation = new cc.Animation.create();
	animation.addSpriteFrameWithFile( 'res/images/trapanimation/trap5animation/0.png' );
	animation.addSpriteFrameWithFile( 'res/images/trapanimation/trap5animation/1.png' );
    animation.addSpriteFrameWithFile( 'res/images/trapanimation/trap5animation/2.png' );
    animation.addSpriteFrameWithFile( 'res/images/trapanimation/trap5animation/3.png' ); 
    animation.addSpriteFrameWithFile( 'res/images/trapanimation/trap5animation/4.png' );
    animation.addSpriteFrameWithFile( 'res/images/trapanimation/trap5animation/5.png' );
	console.log( animation.getDelayPerUnit() );
	animation.setDelayPerUnit( 0.2 );
	return cc.RepeatForever.create( cc.Animate.create( animation ) );
    },
    
    createTrap6Action: function() {
	var animation = new cc.Animation.create();
	animation.addSpriteFrameWithFile( 'res/images/trapanimation/trap6animation/0.png' );
	animation.addSpriteFrameWithFile( 'res/images/trapanimation/trap6animation/1.png' );
    animation.addSpriteFrameWithFile( 'res/images/trapanimation/trap6animation/2.png' );
    animation.addSpriteFrameWithFile( 'res/images/trapanimation/trap6animation/3.png' );
	console.log( animation.getDelayPerUnit() );
	animation.setDelayPerUnit( 0.2 );
	return cc.RepeatForever.create( cc.Animate.create( animation ) );
    }
});

Trap.accelRight = 1;
Trap.accelLeft = -1;
        
