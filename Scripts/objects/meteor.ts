module objects {
    export class Meteor extends objects.GameObject {

        private _move : objects.Vector2;
        
        // public variables
        public name:string;
        public width:number;
        public height:number;
        public center:objects.Vector2;

        constructor(imageString:string,position:objects.Vector2) {
            super(imageString, "");

            this.name = imageString;
            this.position = position;
            this.x = this.position.x;
            this.y = this.position.y;
            //this.regX = this.getBounds().width * 0.5;
            //this.regY = this.getBounds().height * 0.5;
           //console.log(this.position);

        }

        public update() : void {
            super.update();
           
        }
    }
}