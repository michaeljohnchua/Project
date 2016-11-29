var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    var Enemy = (function (_super) {
        __extends(Enemy, _super);
        function Enemy(imageString, position) {
            _super.call(this, imageString, "");
            this.timer = 800;
            this.aimBool = false;
            this.rangeBool = false;
            this.hitBool = false;
            this._shots = [];
            this.name = imageString;
            this.position = position;
            this.x = this.position.x;
            this.y = this.position.y;
            this._speed = .25;
        }
        Object.defineProperty(Enemy.prototype, "getShots", {
            get: function () {
                return this._shots;
            },
            enumerable: true,
            configurable: true
        });
        Enemy.prototype.update = function () {
            _super.prototype.update.call(this);
            this.position.y += this._speed;
            this.timer += createjs.Ticker.interval;
            if (this.aimBool && this.rangeBool && this.timer > 2000 && this.hitBool == false) {
                var newLaser = new objects.EnemyLaser();
                newLaser.setPosition(new objects.Vector2((this.position.x + (this.getBounds().width / 2) - 3), this.position.y + 30));
                this._shots.push(newLaser);
                this.timer = 0.0;
            }
            for (var _i = 0, _a = this._shots; _i < _a.length; _i++) {
                var laser = _a[_i];
                laser.update();
            }
        };
        return Enemy;
    }(objects.GameObject));
    objects.Enemy = Enemy;
})(objects || (objects = {}));
//# sourceMappingURL=enemy.1.js.map