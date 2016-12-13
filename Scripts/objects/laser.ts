module objects{
    export class Laser extends objects.GameObject {

        public speed : number = 17;
        
        public addToContainer : boolean = false;
        public hitBool : boolean = false;
        public timer: number =0;
        constructor() {
            super("laserGreen", "");
            //console.log("constructor");
            
        }


        public update() : void {
            super.update();
            this.position.y -= this.speed;
            if (this.hitBool){
                this.timer +=1;
                this.speed = 0;
                this.x -=5;
                this.y -=30;
                this.gotoAndStop("laserGreenShot");
            }
             
            
        }

        public setPosition(newPosition:Vector2) : void {

            console.log(newPosition.x +" "+ newPosition.y +" "+this.position.x)
            this.position.x = newPosition.x;
            this.position.y = newPosition.y;
        }
    }
}