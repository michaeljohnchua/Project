module objects{
    export class EnemyLaser extends objects.GameObject {

        public speedy : number = -6;
        public speedx : number = 0;
        public addToContainer : boolean = false;
        public hitBool : boolean = false;
        public timer: number =0;
        constructor() {
            super("laserRed", "");
        }


        public update() : void {
            super.update();
            this.position.y -= this.speedy;
            this.position.x -= this.speedx;
            if (this.hitBool){
                this.timer +=1;
            }
            
        }

        public setPosition(newPosition:Vector2) : void {

            this.position.x = newPosition.x;
            this.position.y = newPosition.y;
        }
    }
}