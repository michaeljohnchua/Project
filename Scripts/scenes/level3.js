var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var scenes;
(function (scenes) {
    var Level3 = (function (_super) {
        __extends(Level3, _super);
        function Level3() {
            _super.call(this);
            this._scrollTrigger = 300;
            this._endDelay = 0;
            this.score = 0;
            this._multiplier = 3;
            this._stageWin = false;
            this.start();
        }
        Level3.prototype.start = function () {
            this._stageWin = false;
            this._bg1 = new createjs.Bitmap(assets.getResult("Nebula3"));
            this._bg1.regY = 2560;
            this._bg1.y = 600;
            this._bg2 = new createjs.Bitmap(assets.getResult("Nebula3"));
            this._bg2.regY = 2560;
            this._bg2.y = -1220;
            //meteor field
            this._meteor1 = new objects.Meteor("meteorBig", new objects.Vector2(660, 0));
            this._meteor2 = new objects.Meteor("meteorBig", new objects.Vector2(220, -300));
            this._meteor3 = new objects.Meteor("meteorSmall", new objects.Vector2(420, -560));
            this._meteor4 = new objects.Meteor("meteorSmall", new objects.Vector2(450, -650));
            this._meteor5 = new objects.Meteor("meteorSmall", new objects.Vector2(220, -1200));
            this._meteor6 = new objects.Meteor("meteorBig", new objects.Vector2(750, -1450));
            this._meteor7 = new objects.Meteor("meteorSmall", new objects.Vector2(340, -1600));
            this._meteor8 = new objects.Meteor("meteorBig", new objects.Vector2(660, -2200));
            this._meteor9 = new objects.Meteor("meteorSmall", new objects.Vector2(400, -2500));
            this._meteor10 = new objects.Meteor("meteorBig", new objects.Vector2(300, -2900));
            this._meteor11 = new objects.Meteor("meteorSmall", new objects.Vector2(100, -3150));
            this._meteor12 = new objects.Meteor("meteorSmall", new objects.Vector2(700, -2650));
            this._meteor13 = new objects.Meteor("meteorSmall", new objects.Vector2(320, -3480));
            this._meteor14 = new objects.Meteor("meteorSmall", new objects.Vector2(700, -1700));
            this._meteor15 = new objects.Meteor("meteorSmall", new objects.Vector2(405, -3220));
            this._meteor16 = new objects.Meteor("meteorBig", new objects.Vector2(620, -3450));
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
            this._meteorField.push(this._meteor13);
            this._meteorField.push(this._meteor14);
            this._meteorField.push(this._meteor15);
            this._meteorField.push(this._meteor16);
            //Enemy Fleet
            this._enemy1 = new objects.Enemy("enemyShip", new objects.Vector2(540, -1200));
            this._enemy2 = new objects.Enemy("enemyShip", new objects.Vector2(380, -1500));
            this._enemy3 = new objects.Enemy("enemyShip", new objects.Vector2(20, -1600));
            this._enemy4 = new objects.Enemy("enemyShip", new objects.Vector2(250, -800));
            this._enemy5 = new objects.Enemy("enemyShip", new objects.Vector2(350, -2550));
            this._enemy6 = new objects.Enemy("enemyShip", new objects.Vector2(670, -3150));
            this._enemy7 = new objects.Enemy("enemyShip", new objects.Vector2(350, -2050));
            this._enemy8 = new objects.Enemy("enemyShip", new objects.Vector2(200, -2350));
            this._enemy9 = new objects.Enemy("enemyShip", new objects.Vector2(100, -2750));
            this._enemyFleet = [];
            this._enemyFleet.push(this._enemy1);
            this._enemyFleet.push(this._enemy2);
            this._enemyFleet.push(this._enemy3);
            this._enemyFleet.push(this._enemy4);
            this._enemyFleet.push(this._enemy5);
            this._enemyFleet.push(this._enemy6);
            this._enemyFleet.push(this._enemy7);
            this._enemyFleet.push(this._enemy8);
            this._enemyFleet.push(this._enemy9);
            //Boss
            this._enemyBoss = new objects.EnemyBoss("enemyBoss", new objects.Vector2(300, -3560), 8);
            this._enemyBoss.scaleX = .6;
            this._enemyBoss.scaleY = .6;
            this._enemyBoss.level = 3;
            //Life Sprites
            this._lifeDisplay = [];
            this._lifeDisplay.push(new createjs.Sprite(gameAtlas, "life"));
            this._lifeDisplay.push(new createjs.Sprite(gameAtlas, "life"));
            this._lifeDisplay.push(new createjs.Sprite(gameAtlas, "life"));
            this._lifeDisplay.push(new createjs.Sprite(gameAtlas, "life"));
            this._lifeDisplay.push(new createjs.Sprite(gameAtlas, "life"));
            this._lifeDisplay[4].x = 165;
            this._lifeDisplay[4].y = 570;
            this._lifeDisplay[3].x = 125;
            this._lifeDisplay[3].y = 570;
            this._lifeDisplay[2].x = 85;
            this._lifeDisplay[2].y = 570;
            this._lifeDisplay[1].x = 45;
            this._lifeDisplay[1].y = 570;
            this._lifeDisplay[0].x = 5;
            this._lifeDisplay[0].y = 570;
            this._scrollableObjContainer = new createjs.Container();
            this._scrollableObjContainer.regY = 600;
            this._scrollableObjContainer.name = "scrollContainer";
            this._ship = new objects.Player("player");
            this._ship.life = life;
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
            this._scoreLabel = new objects.Label("" + score, "italic 38px Impact ", "#000000", 780, 570);
            stage.addChild(this._scoreLabel);
            for (var i = 0; i < this._ship.life; i++) {
                stage.addChild(this._lifeDisplay[i]);
            }
            //Music
            createjs.Sound.stop();
            createjs.Sound.play("Level3score");
        };
        //Scene Update 
        Level3.prototype.update = function () {
            this._ship.update();
            _super.prototype.update.call(this);
            life = this._ship.life;
            if (this._ship.getInvincible) {
                this._scrollableObjContainer.addChild(this._ship.shield);
            }
            else {
                this._scrollableObjContainer.removeChild(this._ship.shield);
            }
            //Enemy Ship Updates
            for (var _i = 0, _a = this._enemyFleet; _i < _a.length; _i++) {
                var e = _a[_i];
                //player and enemy collision
                if (this.checkCollision(e, this._ship) && e.hitBool == false) {
                    this._ship.hitBool = true;
                    e.hitBool = true;
                }
                if (Math.abs(e.position.x - this._ship.position.x) < 50) {
                    e.aimBool = true;
                }
                else {
                    e.aimBool = false;
                }
                if (Math.abs(e.position.y - this._ship.position.y) < 450) {
                    e.rangeBool = true;
                }
                else {
                    e.rangeBool = false;
                }
                //x axis direction
                if (e.position.x - this._ship.position.x <= 0) {
                    e.direction = 1;
                }
                else {
                    e.direction = -1;
                }
                //Speed trigger 
                if (Math.abs(e.position.y - this._ship.position.y) < 750) {
                    e.speedx = 3.5;
                    e.speedy = 3.5;
                }
                else {
                    e.speedx = 0;
                    e.speedy = 0;
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
                }
                //Check player lasers and enemy collision
                for (var _f = 0, _h = this._ship.getShots; _f < _h.length; _f++) {
                    var i_1 = _h[_f];
                    if (this.checkCollision(i_1, e) && i_1.hitBool == false && e.hitBool == false) {
                        i_1.hitBool = true;
                        e.hitBool = true;
                        score += 100 * this._multiplier;
                    }
                }
                //if enemy is hit remove from container
                if (e.hitBool) {
                    this._scrollableObjContainer.removeChild(e);
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
            for (var _j = 0, _k = this._meteorField; _j < _k.length; _j++) {
                var m = _k[_j];
                if (this.checkCollision(this._ship, m)) {
                    this._ship.hitBool = true;
                }
            }
            //Laser and Meteor Collision Check
            for (var _l = 0, _m = this._ship.getShots; _l < _m.length; _l++) {
                var i_2 = _m[_l];
                if (i_2.addToContainer == false) {
                    this._scrollableObjContainer.addChild(i_2);
                    i_2.addToContainer = true;
                }
                //Laser hit action with delay
                if (i_2.timer >= 4 && i_2.hitBool) {
                    this._scrollableObjContainer.removeChild(i_2);
                }
                for (var _o = 0, _p = this._meteorField; _o < _p.length; _o++) {
                    var m = _p[_o];
                    if (this.checkCollision(i_2, m) && i_2.hitBool == false) {
                        i_2.hitBool = true;
                    }
                }
            }
            //Boss Fight Update
            this._enemyBoss.update();
            if (Math.abs(this._enemyBoss.position.x - this._ship.position.x) < 100) {
                this._enemyBoss.aimBool = true;
            }
            else {
                this._enemyBoss.aimBool = false;
            }
            if (Math.abs(this._enemyBoss.position.y - this._ship.position.y) < 700) {
                this._enemyBoss.rangeBool = true;
            }
            else {
                this._enemyBoss.rangeBool = false;
            }
            //Boss Laser checks
            //Enemy Laser Check
            for (var _q = 0, _r = this._enemyBoss.getShots; _q < _r.length; _q++) {
                var l = _r[_q];
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
                    for (var _s = 0, _t = this._meteorField; _s < _t.length; _s++) {
                        var m = _t[_s];
                        if (this.checkCollision(m, l)) {
                            l.hitBool = true;
                        }
                    }
                }
            }
            //boss and Laser hit test
            for (var _u = 0, _v = this._ship.getShots; _u < _v.length; _u++) {
                var i_3 = _v[_u];
                if (this.checkCollision(i_3, this._enemyBoss) && i_3.hitBool == false && this._enemyBoss.hitBool == false) {
                    i_3.hitBool = true;
                    this._enemyBoss.hitBool = true;
                    score += 100 * this._multiplier;
                }
            }
            if (this._enemyBoss.life < 0) {
                this._scrollableObjContainer.removeChild(this._enemyBoss);
                this._endDelay += createjs.Ticker.interval;
                this._stageWin = true;
                gameWin = true;
            }
            if (this._ship.life < 0) {
                this._endDelay += createjs.Ticker.interval;
            }
            //Life Update
            this._scoreLabel.text = "" + score;
            for (var _w = 0, _x = this._lifeDisplay; _w < _x.length; _w++) {
                var i_4 = _x[_w];
                stage.removeChild(i_4);
            }
            for (var i = 0; i < this._ship.life; i++) {
                stage.addChild(this._lifeDisplay[i]);
            }
            //Level End Handler
            if (this._endDelay > 2000) {
                if (this._stageWin) {
                    score += 500 * this._multiplier;
                    scene = config.Scene.GAMEOVER;
                }
                else {
                    scene = config.Scene.GAMEOVER;
                }
                changeScene();
            }
        };
        Object.defineProperty(Level3.prototype, "getContainer", {
            get: function () {
                return this._scrollableObjContainer;
            },
            enumerable: true,
            configurable: true
        });
        Level3.prototype._scrollBGUp = function (speed) {
            if (this._scrollableObjContainer.regY < 5000)
                this._scrollableObjContainer.regY = speed - this._scrollTrigger;
        };
        Level3.prototype.checkScroll = function () {
            if (this._ship.y <= this._scrollTrigger && this._ship.scrollDistance >= this._ship.position.y) {
                return true;
            }
            else {
                return false;
            }
        };
        Level3.prototype.checkCollision = function (obj1, obj2) {
            if (obj2.x < obj1.x + obj1.getBounds().width &&
                obj2.x + obj2.getBounds().width > obj1.x &&
                obj2.y < obj1.y + obj1.getBounds().height &&
                obj2.y + obj2.getBounds().height > obj1.y) {
                return true;
            }
            return false;
        };
        return Level3;
    }(objects.Scene));
    scenes.Level3 = Level3;
})(scenes || (scenes = {}));
//# sourceMappingURL=level3.js.map