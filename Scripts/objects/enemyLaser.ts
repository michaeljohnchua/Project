module objects{
    export class EnemyLaser extends objects.GameObject {

        public speed : number = -5;
        
        public addToContainer : boolean = false;
        public hitBool : boolean = false;
        public timer: number =0;
        constructor() {
            super("laserRed", "");
        }


        public update() : void {
            super.update();
            this.position.y -= this.speed;
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