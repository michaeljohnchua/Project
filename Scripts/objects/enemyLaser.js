var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    var EnemyLaser = (function (_super) {
        __extends(EnemyLaser, _super);
        function EnemyLaser() {
            _super.call(this, "laserRed", "");
            this.speed = -5;
            this.addToContainer = false;
            this.hitBool = false;
            this.timer = 0;
        }
        EnemyLaser.prototype.update = function () {
            _super.prototype.update.call(this);
            this.position.y -= this.speed;
            if (this.hitBool) {
                this.timer += 1;
            }
        };
        EnemyLaser.prototype.setPosition = function (newPosition) {
            this.position.x = newPosition.x;
            this.position.y = newPosition.y;
        };
        return EnemyLaser;
    }(objects.GameObject));
    objects.EnemyLaser = EnemyLaser;
})(objects || (objects = {}));
//# sourceMappingURL=enemyLaser.js.map