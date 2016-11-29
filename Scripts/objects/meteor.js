var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    var Meteor = (function (_super) {
        __extends(Meteor, _super);
        function Meteor(imageString, position) {
            _super.call(this, imageString, "");
            this.name = imageString;
            this.position = position;
            this.x = this.position.x;
            this.y = this.position.y;
            //this.regX = this.getBounds().width * 0.5;
            //this.regY = this.getBounds().height * 0.5;
            //console.log(this.position);
        }
        Meteor.prototype.update = function () {
            _super.prototype.update.call(this);
        };
        return Meteor;
    }(objects.GameObject));
    objects.Meteor = Meteor;
})(objects || (objects = {}));
//# sourceMappingURL=meteor.js.map