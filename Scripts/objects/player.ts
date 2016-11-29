module objects {
    export class Player extends objects.GameObject {

        private _keyPressed : number;
        private _shots : objects.Laser[];

        private _timeBetweenShots : number = 1;
        private _invincible: boolean = false;
        private _invincibleTimer: number = 0;
       
        // PUBLIC VARIABLES
        public name:string;
        public width:number;
        public height:number;
        public centerX:number;
        public centerY:number;
        public scrollDistance : number = 300;
        public speed : number =5;
        public timer : number = 800;
        public hitBool: boolean = false;
        public life: number =5;

        constructor(imageString:string) {
            super(imageString, "");

            this._shots = [];

            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            
            this.position =new Vector2(420, -300);
            this.x = 0; 
            this.y = -50;                        
            window.onkeydown = this._onKeyDown;
            window.onkeyup = this._onKeyUp;
        }

        get getShots() : objects.Laser[] {
            return this._shots;
        }

       

        public update() : void {
            super.update();
            this.timer += createjs.Ticker.interval;
            if(controls.UP) {
                this.moveUp();
            }
            
            if(controls.DOWN) {
                this.moveDown();
            }

            if(controls.RIGHT) {
                this.moveRight();
            }
            else if(controls.LEFT) {
                this.moveLeft();
            }
            else{
                this.gotoAndStop("player")
            }
            if(controls.SHOOT && this.timer > 800) {
                let newLaser = new objects.Laser();
                newLaser.setPosition(new objects.Vector2((this.position.x + (this.getBounds().width/2)-3), this.position.y -30));
                this._shots.push(newLaser);
                this.timer = 0.0;
            }
            for (let laser of this._shots) {
                laser.update();
            }

            if (this.hitBool){
                if (this._invincible){
                    if (this._invincibleTimer >1500){
                        this._invincible = false;
                    }
                }
                else {
                    this.life -=1;
                    console.log(this.life);
                    this._invincible = true;
                    this._invincibleTimer =0;
                }
                 this.hitBool = false;
            }
            
            if (this.life<=0){
                this.gotoAndStop("playerDamaged");
                this.speed =0;
            }
            this._invincibleTimer += createjs.Ticker.interval;
        }

        private _onKeyDown(event : KeyboardEvent) {
            switch(event.keyCode) {
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
        }

        private _onKeyUp(event : KeyboardEvent) {
             switch(event.keyCode) {
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
        }

        public moveUp() {
            if(this.position.y>-3300){
            this.position.y -= this.speed;
            }
        }

        public moveDown() {
            
            if ((Math.abs(this.scrollDistance)-Math.abs(this.position.y)) < 220){
             this.position.y += this.speed;
            }
        }

        public moveLeft() {
            console.log(this.position.x);
            if (this.position.x>-10){
            this.position.x -= this.speed;
            this.gotoAndStop("playerLeft")
            }
        }

        public moveRight() {
            if(this.position.x<805){
            this.position.x += this.speed;
            this.gotoAndStop("playerRight");
            }
        }
    }
}