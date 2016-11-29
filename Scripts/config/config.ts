/*
    Module to store globally accessible values and states for the game.
*/
module config {
    export class Scene {
        public static MENU : number = 0;
        public static SHOOTER : number = 1;
        public static HELP : number = 2;
        public static GAMEOVER : number = 3;
    }

    export class Screen {
        public static WIDTH : number = 900;
        public static HEIGHT : number = 600;
        public static CENTER_X : number = 450;
        public static CENTER_Y : number = 300;
    }
    
    export class Game {
        public static FPS : number = 45;
    }
}