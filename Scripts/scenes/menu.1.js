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
    var Menu = (function (_super) {
        __extends(Menu, _super);
        // Menu Class Contructor
        function Menu() {
            _super.call(this);
        }
        Menu.prototype.start = function () {
            console.log("Menu Scene Started");
            this._playBtn = new objects.Button("PlayBtn", config.Screen.CENTER_X - 30, config.Screen.CENTER_Y);
            this._playBtn.on("click", this._playBtnClick, this);
            this._playBtn.scaleX = .60;
            this._playBtn.scaleY = .60;
            this._menuBG = new createjs.Bitmap(assets.getResult("Menu_BG"));
            this._menuBG.scaleX = 1.44;
            this._menuBG.scaleY = 1.1;
            this._helpBtn = new objects.Button("HelpBtn", 100, 480);
            this._helpBtn.on("click", this._helpBtnClick, this);
            this._title = new createjs.Bitmap(assets.getResult("Title"));
            this._title.x = 215;
            this._title.y = 50;
            this.addChildAt(this._menuBG, 0);
            this.addChild(this._title);
            this.addChild(this._playBtn);
            this.addChild(this._helpBtn);
            // Add menu scene to global stage container
            stage.addChild(this);
        };
        Menu.prototype.update = function () {
        };
        Menu.prototype._playBtnClick = function (event) {
            scene = config.Scene.SHOOTER;
            changeScene();
        };
        Menu.prototype._helpBtnClick = function (event) {
            scene = config.Scene.SHOOTER;
            changeScene();
        };
        return Menu;
    }(objects.Scene));
    scenes.Menu = Menu;
})(scenes || (scenes = {}));
//# sourceMappingURL=menu.1.js.map