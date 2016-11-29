var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var scenes;
(function (scenes) {
    var Shooter = (function (_super) {
        __extends(Shooter, _super);
        function Shooter() {
            _super.call(this);
            this._scrollTrigger = 300;
            this._endDelay = 0;
            this.start();
        }
        Shooter.prototype.start = function () {
            gameWin = false;
            this._bg1 = new createjs.Bitmap(assets.getResult("Space_BG"));
            this._bg1.regY = 2560;
            this._bg1.y = 600;
            this._bg2 = new createjs.Bitmap(assets.getResult("Space_BG"));
            this._bg2.regY = 2560;
            this._bg2.y = -1220;
            //meteor field
            this._meteor1 = new objects.Meteor("meteorBig", new objects.Vector2(340, -700));
            this._meteor2 = new objects.Meteor("meteorBig", new objects.Vector2(240, -500));
            this._meteor3 = new objects.Meteor("meteorSmall", new objects.Vector2(420, -800));
            this._meteor4 = new objects.Meteor("meteorSmall", new objects.Vector2(500, -650));
            this._meteor5 = new objects.Meteor("meteorSmall", new objects.Vector2(220, -750));
            this._meteor6 = new objects.Meteor("meteorBig", new objects.Vector2(750, -1450));
            this._meteor7 = new objects.Meteor("meteorSmall", new objects.Vector2(220, -1600));
            this._meteor8 = new objects.Meteor("meteorBig", new objects.Vector2(700, -2200));
            this._meteor9 = new objects.Meteor("meteorSmall", new objects.Vector2(440, -2500));
            this._meteor10 = new objects.Meteor("meteorBig", new objects.Vector2(300, -3200));
            this._meteor11 = new objects.Meteor("meteorSmall", new objects.Vector2(440, -3450));
            this._meteor12 = new objects.Meteor("meteorSmall", new objects.Vector2(700, -3300));
            this._meteorField = [];
            this._meteorField.push(this._meteor1);
            this._meteorField.push(this._meteor2);
            this._meteorField.push(this._meteor3);
            this._meteorField.push(this._meteor4);
            this._meteorField.push(this._meteor5);
            this._meteorField.push(this._meteor6);
            this._meteorField.push(this._meteor7);
            this._meteorField.push(this._meteor8);
            this._meteorField.push(this._meteor9);
            this._meteorField.push(this._meteor10);
            this._meteorField.push(this._meteor11);
            this._meteorField.push(this._meteor12);
            //Enemy Fleet
            this._enemy1 = new objects.Enemy("enemyShip", new objects.Vector2(700, -1200));
            this._enemy2 = new objects.Enemy("enemyShip", new objects.Vector2(280, -1800));
            this._enemy3 = new objects.Enemy("enemyShip", new objects.Vector2(470, -1850));
            this._enemy4 = new objects.Enemy("enemyShip", new objects.Vector2(350, -2050));
            this._enemy5 = new objects.Enemy("enemyShip", new objects.Vector2(400, -2350));
            this._enemyFleet = [];
            this._enemyFleet.push(this._enemy1);
            this._enemyFleet.push(this._enemy2);
            this._enemyFleet.push(this._enemy3);
            this._enemyFleet.push(this._enemy4);
            this._enemyFleet.push(this._enemy5);
            //Boss
            this._enemyBoss = new objects.EnemyBoss("enemyUFO", new objects.Vector2(300, -3600));
            this._scrollableObjContainer = new createjs.Container();
            this._scrollableObjContainer.regY = 600;
            this._scrollableObjContainer.name = "scrollContainer";
            this._ship = new objects.Player("player");
            this._scrollableObjContainer.addChild(this._bg1);
            this._scrollableObjContainer.addChild(this._bg2);
            this._scrollableObjContainer.addChild(this._ship);
            for (var _i = 0, _a = this._meteorField; _i < _a.length; _i++) {
                var m = _a[_i];
                this._scrollableObjContainer.addChild(m);
            }
            for (var _b = 0, _c = this._enemyFleet; _b < _c.length; _b++) {
                var e = _c[_b];
                this._scrollableObjContainer.addChild(e);
            }
            this._scrollableObjContainer.addChild(this._enemyBoss);
            this.addChild(this._scrollableObjContainer);
            stage.addChild(this);
            this._lifeText = new objects.Label("Life: " + this._ship.life, "50px Playbill", "#000000", 50, 550);
            stage.addChild(this._lifeText);
        };
        Shooter.prototype.update = function () {
            this._ship.update();
            _super.prototype.update.call(this);
            //Enemy Ship Updates
            for (var _i = 0, _a = this._enemyFleet; _i < _a.length; _i++) {
                var e = _a[_i];
                //player and enemy collision
                if (this.checkCollision(e, this._ship) && e.hitBool == false) {
                    this._ship.hitBool = true;
                    e.hitBool = true;
                }
                if (Math.abs(e.position.x - this._ship.position.x) < 25) {
                    e.aimBool = true;
                }
                else {
                    e.aimBool = false;
                }
                if (Math.abs(e.position.y - this._ship.position.y) < 400) {
                    e.rangeBool = true;
                }
                else {
                    e.rangeBool = false;
                }
                //Enemy Laser Check
                for (var _b = 0, _c = e.getShots; _b < _c.length; _b++) {
                    var l = _c[_b];
                    //add to container
                    if (l.addToContainer == false) {
                        this._scrollableObjContainer.addChild(l);
                        l.addToContainer = true;
                    }
                    if (l.timer >= 4 && l.hitBool) {
                        this._scrollableObjContainer.removeChild(l);
                    }
                    //Check for player hit
                    if (l.hitBool == false) {
                        if (this.checkCollision(this._ship, l)) {
                            l.hitBool = true;
                            l.gotoAndStop("laserRedShot");
                            this._ship.hitBool = true;
                        }
                        for (var _d = 0, _e = this._meteorField; _d < _e.length; _d++) {
                            var m = _e[_d];
                            if (this.checkCollision(m, l)) {
                                l.hitBool = true;
                            }
                        }
                    }
                    //Check player lasers and enemy collision
                    for (var _f = 0, _h = this._ship.getShots; _f < _h.length; _f++) {
                        var i = _h[_f];
                        if (this.checkCollision(i, e) && i.hitBool == false && e.hitBool == false) {
                            i.hitBool = true;
                            e.hitBool = true;
                        }
                        //Check meteor and enemy collisions
                        for (var _j = 0, _k = this._meteorField; _j < _k.length; _j++) {
                            var m = _k[_j];
                            if (this.checkCollision(m, e) && e.hitBool == false) {
                                e.hitBool = true;
                            }
                        }
                    }
                    //if enemy is hit remove from container
                    if (e.hitBool) {
                        this._scrollableObjContainer.removeChild(e);
                    }
                }
                e.update();
            }
            //Screen scroller checks
            if (this._ship.position.y < this._ship.scrollDistance) {
                this._ship.scrollDistance = this._ship.position.y;
            }
            if (this.checkScroll()) {
                this._scrollBGUp(this._ship.position.y);
            }
            //Ship and meteor Check
            for (var _l = 0, _m = this._meteorField; _l < _m.length; _l++) {
                var m = _m[_l];
                if (this.checkCollision(this._ship, m)) {
                    this._ship.hitBool = true;
                }
            }
            //Laser and Meteor Collision Check
            for (var _o = 0, _p = this._ship.getShots; _o < _p.length; _o++) {
                var i = _p[_o];
                if (i.addToContainer == false) {
                    this._scrollableObjContainer.addChild(i);
                    i.addToContainer = true;
                }
                //Laser hit action with delay
                if (i.timer >= 4 && i.hitBool) {
                    this._scrollableObjContainer.removeChild(i);
                }
                for (var _q = 0, _r = this._meteorField; _q < _r.length; _q++) {
                    var m = _r[_q];
                    if (this.checkCollision(i, m) && i.hitBool == false) {
                        i.hitBool = true;
                    }
                }
            }
            //Boss Fight Update
            this._enemyBoss.update();
            if (Math.abs(this._enemyBoss.position.x - this._ship.position.x) < 25) {
                this._enemyBoss.aimBool = true;
            }
            else {
                this._enemyBoss.aimBool = false;
            }
            if (Math.abs(this._enemyBoss.position.y - this._ship.position.y) < 400) {
                this._enemyBoss.rangeBool = true;
            }
            else {
                this._enemyBoss.rangeBool = false;
            }
            //Boss Laser checks
            //Enemy Laser Check
            for (var _s = 0, _t = this._enemyBoss.getShots; _s < _t.length; _s++) {
                var l = _t[_s];
                //add to container
                if (l.addToContainer == false) {
                    this._scrollableObjContainer.addChild(l);
                    l.addToContainer = true;
                }
                if (l.timer >= 4 && l.hitBool) {
                    this._scrollableObjContainer.removeChild(l);
                }
                //Check for player hit
                if (l.hitBool == false) {
                    if (this.checkCollision(this._ship, l)) {
                        l.hitBool = true;
                        l.gotoAndStop("laserRedShot");
                        this._ship.hitBool = true;
                    }
                    for (var _u = 0, _v = this._meteorField; _u < _v.length; _u++) {
                        var m = _v[_u];
                        if (this.checkCollision(m, l)) {
                            l.hitBool = true;
                        }
                    }
                }
            }
            //Enemy and Laser hit test
            for (var _w = 0, _x = this._ship.getShots; _w < _x.length; _w++) {
                var i = _x[_w];
                if (this.checkCollision(i, this._enemyBoss) && i.hitBool == false && this._enemyBoss.hitBool == false) {
                    i.hitBool = true;
                    this._enemyBoss.hitBool = true;
                }
            }
            if (this._enemyBoss.life <= 0) {
                this._scrollableObjContainer.removeChild(this._enemyBoss);
                this._endDelay += createjs.Ticker.interval;
                gameWin = true;
            }
            if (this._ship.life <= 0) {
                this._endDelay += createjs.Ticker.interval;
            }
            //Life Update
            this._lifeText.text = "Life: " + this._ship.life;
            if (this._endDelay > 2000) {
                scene = config.Scene.GAMEOVER;
                changeScene();
            }
        };
        Object.defineProperty(Shooter.prototype, "getContainer", {
            get: function () {
                return this._scrollableObjContainer;
            },
            enumerable: true,
            configurable: true
        });
        Shooter.prototype._scrollBGUp = function (speed) {
            if (this._scrollableObjContainer.regY < 5000)
                this._scrollableObjContainer.regY = speed - this._scrollTrigger;
        };
        Shooter.prototype.checkScroll = function () {
            if (this._ship.y <= this._scrollTrigger && this._ship.scrollDistance >= this._ship.position.y) {
                return true;
            }
            else {
                return false;
            }
        };
        Shooter.prototype.checkCollision = function (obj1, obj2) {
            if (obj2.x < obj1.x + obj1.getBounds().width &&
                obj2.x + obj2.getBounds().width > obj1.x &&
                obj2.y < obj1.y + obj1.getBounds().height &&
                obj2.y + obj2.getBounds().height > obj1.y) {
                return true;
            }
            return false;
        };
        return Shooter;
    }(objects.Scene));
    scenes.Shooter = Shooter;
})(scenes || (scenes = {}));
//# sourceMappingURL=shooter.js.map