var Gate = cc.Sprite.extend({
    ctor: function( x, y) {
        this._super();
        this.initWithFile( 'res/images/helper/gate.png' );
        this.setAnchorPoint( cc.p( 0, 0 ) );
        this.setPosition( cc.p( x, y ) );
        
        this.openGateAction=0;
        
        this.gateAction=this.createGateAction();
    },
    
    update: function() {
        this.GateAction();
        
    },
    
    GateAction: function(){
        if(this.openGateAction==0)
        {
         this.runAction( this.gateAction );
         this.openGateAction=1;    
        }
    },
    
    createGateAction: function() {
	var animation = new cc.Animation.create();
	animation.addSpriteFrameWithFile( 'res/images/helperanimation/gateanimation/0.png' );
    animation.addSpriteFrameWithFile( 'res/images/helperanimation/gateanimation/1.png' );
    animation.addSpriteFrameWithFile( 'res/images/helperanimation/gateanimation/2.png' );
    animation.addSpriteFrameWithFile( 'res/images/helperanimation/gateanimation/3.png' );
    animation.addSpriteFrameWithFile( 'res/images/helperanimation/gateanimation/4.png' );
    animation.addSpriteFrameWithFile( 'res/images/helperanimation/gateanimation/5.png' );
    animation.addSpriteFrameWithFile( 'res/images/helperanimation/gateanimation/6.png' );
    animation.addSpriteFrameWithFile( 'res/images/helperanimation/gateanimation/7.png' );
	console.log( animation.getDelayPerUnit() );
	animation.setDelayPerUnit( 0.2 );
	return cc.RepeatForever.create( cc.Animate.create( animation ) );
    }
});