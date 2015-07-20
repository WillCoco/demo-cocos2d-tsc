class JetSprite extends CCSprite {
    
    public _currentRotation:number;

    constructor() {
        super();
        return new (cc.Sprite.extend(this));
    }
    ctor(){
        this._super("images/jet.png");
    }
    update(dt){
        this.setRotation(this._currentRotation);
    }
    handleKey(e)
    {
	    if(e === cc.KEY.left)
	    {
            this._currentRotation--;

	    }
        else if(e === cc.KEY.right)
            this._currentRotation++;

        if(this._currentRotation < 0) this._currentRotation = 360;
        if(this._currentRotation > 360) this._currentRotation = 0;
    }
    handleTouch(touchLocation)
    {
        if(touchLocation.x < 300)
            this._currentRotation = 0;
        else
            this._currentRotation = 180;
    }
    handleTouchMove(touchLocation){
        // Gross use of hardcoded width,height params.
        var angle = Math.atan2(touchLocation.x-300,touchLocation.y-300);

        angle = angle * (180/Math.PI);
        this._currentRotation = angle;

    }
}