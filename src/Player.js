var Player = cc.Sprite.extend({
    ctor: function() {
        this._super();
        this.initWithFile( 'player/bannedstory.png' );
        this.direction = Player.DIR.UP;
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
    }
});
 
Player.DIR = {
    UP: 1,
    RIGHT: 2
};