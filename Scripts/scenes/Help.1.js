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
    var Help = (function (_super) {
        __extends(Help, _super);
        // Menu Class Contructor
        function Help() {
            _super.call(this);
        }
        Help.prototype.start = function () {
            console.log("Help Scene Started");
            this._menuBG = new createjs.Bitmap(assets.getResult("HelpBG"));
            this.addChild(this._menuBG);
            this._backBtn = new objects.Button("BackBtn", 750, 25);
            this._backBtn.scaleX = .2;
            this._backBtn.scaleY = .2;
            this._backBtn.on("click", this._backBtnClick, this);
            this.addChild(this._backBtn);
            stage.addChild(this);
        };
        Help.prototype.update = function () {
        };
        Help.prototype._backBtnClick = function (event) {
            scene = config.Scene.MENU;
            changeScene();
        };
        return Help;
    }(objects.Scene));
    scenes.Help = Help;
})(scenes || (scenes = {}));
//# sourceMappingURL=Help.1.js.map