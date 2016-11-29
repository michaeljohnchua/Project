/*
    Module to store globally accessible values and states for the game.
*/
var config;
(function (config) {
    var Scene = (function () {
        function Scene() {
        }
        Scene.MENU = 0;
        Scene.SHOOTER = 1;
        Scene.HELP = 2;
        Scene.GAMEOVER = 3;
        return Scene;
    }());
    config.Scene = Scene;
    var Screen = (function () {
        function Screen() {
        }
        Screen.WIDTH = 900;
        Screen.HEIGHT = 600;
        Screen.CENTER_X = 450;
        Screen.CENTER_Y = 300;
        return Screen;
    }());
    config.Screen = Screen;
    var Game = (function () {
        function Game() {
        }
        Game.FPS = 45;
        return Game;
    }());
    config.Game = Game;
})(config || (config = {}));
//# sourceMappingURL=config.js.map