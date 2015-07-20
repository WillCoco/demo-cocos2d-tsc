var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var JetSprite = (function (_super) {
    __extends(JetSprite, _super);
    function JetSprite() {
        _super.call(this);
        return new (cc.Sprite.extend(this));
    }
    JetSprite.prototype.ctor = function () {
        this._super("images/jet.png");
    };
    JetSprite.prototype.update = function (dt) {
        this.setRotation(this._currentRotation);
    };
    JetSprite.prototype.handleKey = function (e) {
        if (e === cc.KEY.left) {
            this._currentRotation--;
        }
        else if (e === cc.KEY.right)
            this._currentRotation++;
        if (this._currentRotation < 0)
            this._currentRotation = 360;
        if (this._currentRotation > 360)
            this._currentRotation = 0;
    };
    JetSprite.prototype.handleTouch = function (touchLocation) {
        if (touchLocation.x < 300)
            this._currentRotation = 0;
        else
            this._currentRotation = 180;
    };
    JetSprite.prototype.handleTouchMove = function (touchLocation) {
        // Gross use of hardcoded width,height params.
        var angle = Math.atan2(touchLocation.x - 300, touchLocation.y - 300);
        angle = angle * (180 / Math.PI);
        this._currentRotation = angle;
    };
    return JetSprite;
})(CCSprite);
//# sourceMappingURL=JetSprite.js.map