var managers;
(function (managers) {
    var Collision = (function () {
        function Collision() {
            this.start();
        }
        Collision.prototype.start = function () {
        };
        Collision.prototype.update = function () {
        };
        Collision.prototype.check = function (coll, objColliding) {
            // Check distance between LASER and enemy
            if (coll.tr_corner.x > objColliding.tl_corner.x &&
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
        };
        Collision.prototype.destroy = function (objToDestroy) {
            objToDestroy.destroy();
        };
        return Collision;
    }());
    managers.Collision = Collision;
})(managers || (managers = {}));
//# sourceMappingURL=collision.js.map