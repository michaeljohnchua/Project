/*
    Scene module to group all user-defined scenes  under the same "namespace aka module"
    Menu scene that contains all assets and functionality associated with the menu itself
*/
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var scenes;
(function (scenes) {
    var GameOver = (function (_super) {
        __extends(GameOver, _super);
        function GameOver() {
            _super.call(this);
        }
        GameOver.prototype.start = function () {
            this._gameOverBG = new createjs.Bitmap(assets.getResult("GameOverBG"));
            this._gameOverBG.scaleX = 1.4;
            this._gameOverBG.scaleY = 1.1;
            this.addChild(this._gameOverBG);
            if (gameWin) {
                this._winText = "Mission Complete";
            }
            else {
                this._winText = "Mission Failed";
            }
            this._labelWin = new objects.Label(this._winText, "80px Playbill", "#A9A9A9", 430, 400);
            this.addChild(this._labelWin);
            this._backBtn = new objects.Button("BackBtn", 750, 25);
            this._backBtn.scaleX = .2;
            this._backBtn.scaleY = .2;
            this._backBtn.on("click", this._backBtnClick, this);
            this.addChild(this._backBtn);
            stage.addChild(this);
        };
        GameOver.prototype.update = function () {
        };
        GameOver.prototype._backBtnClick = function (event) {
            scene = config.Scene.MENU;
            changeScene();
        };
        return GameOver;
    }(objects.Scene));
    scenes.GameOver = GameOver;
})(scenes || (scenes = {}));
//# sourceMappingURL=GameOver.js.map