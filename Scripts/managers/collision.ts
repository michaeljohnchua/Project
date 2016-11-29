module managers {
    export class Collision {
        constructor() {
            this.start();
        }

        public start() {

        }

        public update() {

        }

        public check(coll:objects.GameObject, objColliding:objects.GameObject) {
            // Check distance between LASER and enemy
            
            if(coll.tr_corner.x > objColliding.tl_corner.x && 
                coll.tr_corner.y < objColliding.bl_corner.y &&
                coll.br_corner.y > objColliding.tl_corner.y) {
                    this.destroy(objColliding);
                }

            /*
            let tempDist = objects.Vector2.distance(obj1.position, obj2.position);

            if(tempDist < (obj1.width * 0.5 + obj2.width)) {
                if(obj1.name == "enemy") {
                    this.destroy(obj1)
                }
                if(obj2.name == "enemy") {
                    this.destroy(obj2);
                }
            }
            */
        }

        private destroy(objToDestroy : objects.GameObject) : void {
            objToDestroy.destroy();
        }
    }
}