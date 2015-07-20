var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var MyThirdApp = (function (_super) {
    __extends(MyThirdApp, _super);
    function MyThirdApp() {
        _super.call(this);
        return new (cc.LayerColor.extend(this));
    }
    MyThirdApp.prototype.ctor = function () {
        this._super(cc.color(0, 0, 0, 255));
        var size = cc.director.getWinSize();
        this._jetSprite = new JetSprite();
        this.setPosition(cc.p(0, 0));
        this.addChild(this._jetSprite);
        this._jetSprite.setPosition(cc.p(size.width / 2, size.height / 2));
        this._jetSprite.scheduleUpdate();
        this.schedule(this.update);
        return true;
    };
    MyThirdApp.prototype.onEnter = function () {
        this._super();
    };
    MyThirdApp.prototype.update = function (dt) {
    };
    MyThirdApp.prototype.onTouchesEnded = function (pTouch, pEvent) {
        this._jetSprite.handleTouch(pTouch[0].getLocation());
    };
    MyThirdApp.prototype.onTouchesMoved = function (pTouch, pEvent) {
        this._jetSprite.handleTouchMove(pTouch[0].getLocation());
    };
    MyThirdApp.prototype.onKeyUp = function (e) {
    };
    MyThirdApp.prototype.onKeyDown = function (e) {
        this._jetSprite.handleKey(e);
    };
    return MyThirdApp;
})(CCLayerColor);
var MyThirdAppScene = (function (_super) {
    __extends(MyThirdAppScene, _super);
    function MyThirdAppScene() {
        _super.call(this);
        return new (cc.Scene.extend(this));
    }
    MyThirdAppScene.prototype.onEnter = function () {
        this._super();
        var layer = new MyThirdApp();
        layer.init();
        this.addChild(layer);
    };
    return MyThirdAppScene;
})(CCScene);
//# sourceMappingURL=MyThirdApp.js.map