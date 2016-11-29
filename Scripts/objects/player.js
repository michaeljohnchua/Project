var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    var Player = (function (_super) {
        __extends(Player, _super);
        function Player(imageString) {
            _super.call(this, imageString, "");
            this._timeBetweenShots = 1;
            this._invincible = false;
            this._invincibleTimer = 0;
            this.scrollDistance = 300;
            this.speed = 5;
            this.timer = 800;
            this.hitBool = false;
            this.life = 5;
            this._shots = [];
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.position = new objects.Vector2(420, -300);
            this.x = 0;
            this.y = -50;
            window.onkeydown = this._onKeyDown;
            window.onkeyup = this._onKeyUp;
        }
        Object.defineProperty(Player.prototype, "getShots", {
            get: function () {
                return this._shots;
            },
            enumerable: true,
            configurable: true
        });
        Player.prototype.update = function () {
            _super.prototype.update.call(this);
            this.timer += createjs.Ticker.interval;
            if (controls.UP) {
                this.moveUp();
            }
            if (controls.DOWN) {
                this.moveDown();
            }
            if (controls.RIGHT) {
                this.moveRight();
            }
            else if (controls.LEFT) {
                this.moveLeft();
            }
            else {
                this.gotoAndStop("player");
            }
            if (controls.SHOOT && this.timer > 800) {
                var newLaser = new objects.Laser();
                newLaser.setPosition(new objects.Vector2((this.position.x + (this.getBounds().width / 2) - 3), this.position.y - 30));
                this._shots.push(newLaser);
                this.timer = 0.0;
            }
            for (var _i = 0, _a = this._shots; _i < _a.length; _i++) {
                var laser = _a[_i];
                laser.update();
            }
            if (this.hitBool) {
                if (this._invincible) {
                    if (this._invincibleTimer > 1500) {
                        this._invincible = false;
                    }
                }
                else {
                    this.life -= 1;
                    console.log(this.life);
                    this._invincible = true;
                    this._invincibleTimer = 0;
                }
                this.hitBool = false;
            }
            if (this.life <= 0) {
                this.gotoAndStop("playerDamaged");
                this.speed = 0;
            }
            this._invincibleTimer += createjs.Ticker.interval;
        };
        Player.prototype._onKeyDown = function (event) {
            switch (event.keyCode) {
                case keys.W:
                    console.log("W key pressed");
                    controls.UP = true;
                    break;
                case keys.S:
                    console.log("S key pressed");
                    controls.DOWN = true;
                    break;
                case keys.A:
                    console.log("A key pressed");
                    controls.LEFT = true;
                    break;
                case keys.D:
                    console.log("D key pressed");
                    controls.RIGHT = true;
                    break;
                case keys.SPACE:
                    controls.SHOOT = true;
                    break;
            }
        };
        Player.prototype._onKeyUp = function (event) {
            switch (event.keyCode) {
                case keys.W:
                    controls.UP = false;
                    break;
                case keys.S:
                    controls.DOWN = false;
                    break;
                case keys.A:
                    controls.LEFT = false;
                    break;
                case keys.D:
                    controls.RIGHT = false;
                    break;
                case keys.SPACE:
                    controls.SHOOT = false;
                    break;
            }
        };
        Player.prototype.moveUp = function () {
            if (this.position.y > -3300) {
                this.position.y -= this.speed;
            }
        };
        Player.prototype.moveDown = function () {
            if ((Math.abs(this.scrollDistance) - Math.abs(this.position.y)) < 220) {
                this.position.y += this.speed;
            }
        };
        Player.prototype.moveLeft = function () {
            console.log(this.position.x);
            if (this.position.x > -10) {
                this.position.x -= this.speed;
                this.gotoAndStop("playerLeft");
            }
        };
        Player.prototype.moveRight = function () {
            if (this.position.x < 805) {
                this.position.x += this.speed;
                this.gotoAndStop("playerRight");
            }
        };
        return Player;
    }(objects.GameObject));
    objects.Player = Player;
})(objects || (objects = {}));
//# sourceMappingURL=player.js.map