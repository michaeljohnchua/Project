var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    var EnemyBoss = (function (_super) {
        __extends(EnemyBoss, _super);
        function EnemyBoss(imageString, position, life) {
            _super.call(this, imageString, "");
            this.timer = 800;
            this.aimBool = false;
            this.rangeBool = false;
            this.hitBool = false;
            this.level = 0;
            this._shots = [];
            this.name = imageString;
            this.position = position;
            this.x = this.position.x;
            this.y = this.position.y;
            this._speed = 2;
            this.life = life;
        }
        Object.defineProperty(EnemyBoss.prototype, "getShots", {
            get: function () {
                return this._shots;
            },
            enumerable: true,
            configurable: true
        });
        EnemyBoss.prototype.update = function () {
            _super.prototype.update.call(this);
            //console.log(this.position +  " " + this._speed);
            if (this.position.x <= 0 && this._speed < 0) {
                this._speed = 10;
            }
            else if (this.position.x >= 800 && this._speed > 0) {
                this._speed = -10;
            }
            this.position.x += this._speed;
            this.timer += createjs.Ticker.interval;
            if (this.aimBool && this.rangeBool && this.timer > 1000 && this.life > 0) {
                var newLaser = new objects.EnemyLaser();
                newLaser.setPosition(new objects.Vector2((this.position.x + (this.getBounds().width / 2) - 3), this.position.y + 100));
                this._shots.push(newLaser);
                //level 2 & 3 projectiles
                if (this.level > 1) {
                    newLaser = new objects.EnemyLaser();
                    newLaser.setPosition(new objects.Vector2((this.position.x + (this.getBounds().width / 2) - 3), this.position.y + 100));
                    newLaser.rotation = 30;
                    newLaser.speedx = 3;
                    this._shots.push(newLaser);
                    newLaser = new objects.EnemyLaser();
                    newLaser.setPosition(new objects.Vector2((this.position.x + (this.getBounds().width / 2) - 3), this.position.y + 100));
                    newLaser.rotation = -30;
                    newLaser.speedx = -3;
                    this._shots.push(newLaser);
                }
                createjs.Sound.play("LaserSound");
                this.timer = 0.0;
            }
            if (this.hitBool) {
                this.hitBool = false;
                this.life -= 1;
            }
            for (var _i = 0, _a = this._shots; _i < _a.length; _i++) {
                var laser = _a[_i];
                laser.update();
            }
        };
        return EnemyBoss;
    }(objects.GameObject));
    objects.EnemyBoss = EnemyBoss;
})(objects || (objects = {}));
//# sourceMappingURL=enemyBoss.js.map