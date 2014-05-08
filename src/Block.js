var Block = cc.Sprite.extend({
    ctor: function( x1, y1, x2, y2 ,i) {
        this._super();
        
        if(i==0)
        {
        this.initWithFile( 'res/images/block1.png',
                           cc.rect( 0, 0, x2, y2 ) );
        }
        else if(i==1)
        {
          this.initWithFile( 'res/images/background/ground/ground2.png',
                           cc.rect( 0, 0, x2, y2 ) );
        }
        else if(i==2)
        {
            this.initWithFile( 'res/images/background/block/block2.png',
                           cc.rect( 0, 0, x2, y2 ) );
        }
        else if(i==3)
        {
            this.initWithFile( 'res/images/background/block/block0.png',
                           cc.rect( 0, 0, x2, y2 ) );
        }
        else if(i==4)
        {
            this.initWithFile( 'res/images/background/block/block0.2.png',
                           cc.rect( 0, 0, x2, y2 ) );
        }
        this.setAnchorPoint( cc.p( 0, 0 ) );
        this.setPosition( cc.p( x1, y1 ) );
    },

    getTopY: function() {
        return cc.rectGetMaxY( this.getBoundingBox() );
    },

    hitTop: function( oldRect, newRect ) {
        var brect = this.getBoundingBoxToWorld();
        if ( cc.rectGetMinY( oldRect ) >= cc.rectGetMaxY( brect ) ) {
            var loweredNewRect = cc.rect( newRect.x,
                                          newRect.y - 1,
                                          newRect.width,
                                          newRect.height + 1 );
            var uRect = cc.rectUnion( oldRect, loweredNewRect );
            return cc.rectIntersectsRect( uRect, brect );
        }
        return false;
    },

    onTop: function( rect ) {
        var brect = this.getBoundingBoxToWorld();
        var bminx = cc.rectGetMinX( brect );
        var bmaxx = cc.rectGetMaxX( brect );
        var minx = cc.rectGetMinX( rect );
        var maxx = cc.rectGetMaxX( rect );
        return ( minx <= bmaxx ) && ( bminx <= maxx );
    }
});

