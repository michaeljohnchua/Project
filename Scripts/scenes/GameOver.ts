/*
    Scene module to group all user-defined scenes  under the same "namespace aka module"
    Menu scene that contains all assets and functionality associated with the menu itself
*/

module scenes {
    export class GameOver extends objects.Scene {

        private _backBtn : objects.Button;
        private _gameOverBG : createjs.Bitmap;
     
        private _labelWin: objects.Label;
        private _winText: string;
        constructor() {
            super();
        }

        public start() : void {
                       
            this._gameOverBG = new createjs.Bitmap(assets.getResult("GameOverBG"));
            this._gameOverBG.scaleX =1.4;
            this._gameOverBG.scaleY =1.1;
            this.addChild(this._gameOverBG);

            if (gameWin){
                this._winText ="Mission Complete";
            }
            else{
                this._winText = "Mission Failed";
            }

            this._labelWin = new objects.Label(this._winText,"80px Playbill", "#A9A9A9", 430, 400);
            this.addChild(this._labelWin);
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