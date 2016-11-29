/*
    Scene module to group all user-defined scenes  under the same "namespace aka module"
    Menu scene that contains all assets and functionality associated with the menu itself
*/

module scenes {
    export class Menu extends objects.Scene {

        // Private instance variables
        // Label or bitmap
        // Button 
        private _playBtn : objects.Button;
        private _helpBtn : objects.Button;
        private _menuBG : createjs.Bitmap;
        private _title : createjs.Bitmap;
        // Menu Class Contructor
        constructor() {
            super();
        }

        public start() : void {
            console.log("Menu Scene Started");

            this._playBtn = new objects.Button("PlayBtn", config.Screen.CENTER_X - 30, config.Screen.CENTER_Y);
            
            this._playBtn.on("click", this._playBtnClick, this);

            this._playBtn.scaleX =.60;
            this._playBtn.scaleY =.60;
            this._menuBG = new createjs.Bitmap(assets.getResult("Menu_BG"));
           
            this._menuBG.scaleX = 1.44;
            this._menuBG.scaleY = 1.1;

            this._helpBtn = new objects.Button("HelpBtn", 100,480);
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
        }

        public update() : void {

        }

        private _playBtnClick(event : createjs.MouseEvent) {
            scene = config.Scene.SHOOTER;
            changeScene();
        }

        private _helpBtnClick(event : createjs.MouseEvent) {
            scene = config.Scene.HELP;
            changeScene();
        }
    }
}