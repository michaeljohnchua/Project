module objects {
    export class EnemyBoss extends objects.GameObject {

        private _move : objects.Vector2;
        private _speed : number;
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
        public life :number;
        public level: number =0;

        constructor(imageString:string, position:objects.Vector2, life:number) {
            super(imageString, "");

            this._shots = [];
            this.name = imageString;
            this.position = position;
            this.x = this.position.x;
            this.y = this.position.y;
            this._speed = 2;
            this.life = life;
        }

        get getShots() : objects.EnemyLaser[] {
           return this._shots;
        }
        public update() : void {
            super.update();
            //console.log(this.position +  " " + this._speed);
            if(this.position.x <= 0 && this._speed<0){
                this._speed = 10;
            }
            else if (this.position.x >=800 && this._speed>0){
               this._speed = -10;
            }
            this.position.x += this._speed;
            this.timer += createjs.Ticker.interval;

            if (this.aimBool && this.rangeBool && this.timer>1000 && this.life>0){
                let newLaser = new objects.EnemyLaser();
                newLaser.setPosition(new objects.Vector2((this.position.x + (this.getBounds().width/2)-3), this.position.y +100));
                this._shots.push(newLaser);

                
                //level 2 & 3 projectiles
                if(this.level>1){
                newLaser = new objects.EnemyLaser();
                newLaser.setPosition(new objects.Vector2((this.position.x + (this.getBounds().width/2)-3), this.position.y +100));
                newLaser.rotation = 30;
                newLaser.speedx= 3;
                this._shots.push(newLaser);

                newLaser = new objects.EnemyLaser();
                newLaser.setPosition(new objects.Vector2((this.position.x + (this.getBounds().width/2)-3), this.position.y +100));
                newLaser.rotation = -30;
                newLaser.speedx= -3;
                this._shots.push(newLaser);
                }
                createjs.Sound.play("LaserSound");
                this.timer = 0.0;
            }

           
            if (this.hitBool){
                this.hitBool = false;
                this.life -=1;
                
            }
           

            for (let laser of this._shots) {
                laser.update();
            }
        }
    }
}