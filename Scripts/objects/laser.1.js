var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    var Laser = (function (_super) {
        __extends(Laser, _super);
        function Laser() {
            _super.call(this, "laserGreen", "");
            this.speed = 7;
            this.addToContainer = false;
            this.hitBool = false;
            this.timer = 0;
            //console.log("constructor");
        }
        Laser.prototype.update = function () {
            _super.prototype.update.call(this);
            this.position.y -= this.speed;
            if (this.hitBool) {
                this.timer += 1;
            }
        };
        Laser.prototype.setPosition = function (newPosition) {
            console.log(newPosition.x + " " + newPosition.y + " " + this.position.x);
            this.position.x = newPosition.x;
            this.position.y = newPosition.y;
        };
        return Laser;
    }(objects.GameObject));
    objects.Laser = Laser;
})(objects || (objects = {}));
//# sourceMappingURL=laser.1.js.map