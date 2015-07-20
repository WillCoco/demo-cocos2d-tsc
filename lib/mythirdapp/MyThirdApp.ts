
class MyThirdApp extends CCLayerColor {

    _jetSprite:cc.Sprite;

    constructor() {
        super();
        return new (cc.LayerColor.extend(this));
    }
    
    ctor() {
	    this._super(cc.color(0,0,0,255));
        var size = cc.director.getWinSize();

        this._jetSprite = new JetSprite();

        this.setPosition(cc.p(0,0));

        this.addChild(this._jetSprite);
        this._jetSprite.setPosition(cc.p(size.width/2,size.height/2));
        this._jetSprite.scheduleUpdate();
        this.schedule(this.update);

        return true;
    }
    onEnter(){
        this._super();
    }
    update(dt){
    }
    onTouchesEnded (pTouch,pEvent){
        this._jetSprite.handleTouch(pTouch[0].getLocation());
    }
    onTouchesMoved(pTouch,pEvent){
        this._jetSprite.handleTouchMove(pTouch[0].getLocation());
    }
    onKeyUp(e){

    }
    onKeyDown(e){
        this._jetSprite.handleKey(e);
    }
}



class MyThirdAppScene extends CCScene {

    constructor() {
        super();
        return new (cc.Scene.extend(this));
    }

	onEnter(){
		this._super();
		var layer = new MyThirdApp();
		layer.init();
		this.addChild(layer);
	}
}