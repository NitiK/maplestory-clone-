var Player = cc.Sprite.extend({
    ctor: function() {
        this._super();
        this.initWithFile( 'player/bannedstory.png' );
        this.direction = Player.DIR.UP;
        this.standingAction = this.createStandingAction();
        this.movingAction = this.createMovingAction();
        this.runAction( this.standingAction );
        this.g = 9.8;
        this.pos;
    }
    ,update: function() {
    }
    ,move: function(e) {
    var pos = this.getPosition();
        if(e==39)
        {
            this.setPosition(new cc.Point(pos.x+10,pos.y));
        }
        else if(e==37)
        {
            this.setPosition(new cc.Point(pos.x-10,pos.y));
        }
        else if(e==32)
        {
            this.setPosition(new cc.Point(pos.x,pos.y+50));
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
	console.log( animation.getDelayPerUnit() );
	animation.setDelayPerUnit( 0.2 );
	return cc.RepeatForever.create( cc.Animate.create( animation ) );
    }
});
 
Player.DIR = {
    UP: 1,
    RIGHT: 2
};