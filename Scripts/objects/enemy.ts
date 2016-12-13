module objects {
    export class Enemy extends objects.GameObject {

        private _move : objects.Vector2;
        private _shots : objects.EnemyLaser[];
        // public variables
        public name:string;
        public width:number;
        public height:number;
        public center:objects.Vector2;
        public timer : number = 800;
        public aimBool : boolean = false;
        public rangeBool: boolean= false;
        public hitBool: boolean =false;
        public speedx : number;
        public speedy : number;
        public direction : number;

        constructor(imageString:string, position:objects.Vector2) {
            super(imageString, "");

            this._shots = [];
            this.name = imageString;
            this.position = position;
            this.x = this.position.x;
            this.y = this.position.y;
            this.speedx = 0;
            this.speedy = 0;
            this.direction = 0;
        }

        get getShots() : objects.EnemyLaser[] {
           return this._shots;
        }
        public update() : void {
            super.update();
            this.position.y += this.speedy;
            this.position.x += this.speedx*this.direction;
            this.timer += createjs.Ticker.interval;

            if (this.aimBool && this.rangeBool && this.timer>1500 && this.hitBool==false){
                let newLaser = new objects.EnemyLaser();
                newLaser.setPosition(new objects.Vector2((this.position.x + (this.getBounds().width/2)-3), this.position.y +30));
                this._shots.push(newLaser);
                this.timer = 0.0;
                createjs.Sound.play("LaserSound");
            }

            for (let laser of this._shots) {
                laser.update();
            }
        }
    }
}