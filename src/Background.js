var Background = cc.Sprite.extend({
    ctor: function(i) {
        this._super();
        this.backgroundlength;
        this.backgroundwidth;
        if(i==0)
        {
           this.initWithFile( 'res/images/background/background0.png' ); 
        }
        else if(i==1)
        {
            this.initWithFile( 'res/images/background/background3.png' );
        }
        else if(i==2)
        {
        this.initWithFile( 'res/images/background/background1.2.png' );
        }
        else if(i==3)
        {
            this.initWithFile( 'res/images/background/background2.png' );
        }
        this.setAnchorPoint(0,0);
    },
    
    setLength: function(l)
    {
    this.backgroundlength=l;
    },
    
    setWidth: function(w)
    {
    this.backgroundwidth=w;
    },
    
    getLength: function(l)
    {
    this.backgroundlength=l;
    },
    
    getWidth: function(w)
    {
    this.backgroundwidth=w;
    }
});