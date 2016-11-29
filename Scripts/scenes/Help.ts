/*
    Scene module to group all user-defined scenes  under the same "namespace aka module"
    Menu scene that contains all assets and functionality associated with the menu itself
*/

module scenes {
    export class Help extends objects.Scene {

        // Private instance variables
        // Label or bitmap
        // Button 
        private _backBtn : objects.Button;
        private _menuBG : createjs.Bitmap;
     
        // Menu Class Contructor
        constructor() {
            super();
        }

        public start() : void {
            console.log("Help Scene Started");

           
            this._menuBG = new createjs.Bitmap(assets.getResult("HelpBG"));
            this.addChild(this._menuBG);

            this._backBtn = new objects.Button("BackBtn", 750,25);
            this._backBtn.scaleX =.2;
            this._backBtn.scaleY =.2;
            this._backBtn.on("click", this._backBtnClick, this);
            
            this.addChild(this._backBtn);

            stage.addChild(this);
        }

        public update() : void {

        }

        private _backBtnClick(event : createjs.MouseEvent) {
            scene = config.Scene.MENU;
            changeScene();
        }


    }
}