/// <reference path = "_reference.ts" />
// Global Variables
var assets;
var canvas;
var stage;
var spriteSheetLoader;
var gameAtlas;
var currentScene;
var scene;
var gameWin = false;
// Preload Assets required
var assetData = [
    { id: "Space_BG", src: "../../Assets/images/space_bg.png" },
    { id: "Menu_BG", src: "../../Assets/images/menuBG.jpg" },
    { id: "PlayBtn", src: "../../Assets/images/start.png" },
    { id: "HelpBtn", src: "../../Assets/images/help.png" },
    { id: "BackBtn", src: "../../Assets/images/BackBtn.png" },
    { id: "Atlas", src: "../../Assets/images/spritesheet.png" },
    { id: "Title", src: "../../Assets/images/Title.png" },
    { id: "HelpBG", src: "../../Assets/images/HelpBG.png" },
    { id: "GameOverBG", src: "../../Assets/images/GameOver.png" }
];
function preload() {
    // Create a queue for assets being loaded
    assets = new createjs.LoadQueue(false);
    // assets.installPlugin(createjs.Sound);
    // Register callback function to be run when assets complete loading.
    assets.on("complete", init, this);
    assets.loadManifest(assetData);
}
function init() {
    // Reference to canvas element
    canvas = document.getElementById("canvas");
    stage = new createjs.Stage(canvas);
    stage.enableMouseOver(20);
    createjs.Ticker.setFPS(config.Game.FPS);
    createjs.Ticker.on("tick", this.gameLoop, this);
    var atlasData = {
        "images": [
            assets.getResult("Atlas")
        ],
        "frames": [
            [1, 1, 194, 103, 0, 0, 0],
            [197, 1, 44, 42, 0, 0, 0],
            [197, 45, 35, 27, 0, 0, 0],
            [234, 45, 9, 33, 0, 0, 0],
            [197, 74, 9, 33, 0, 0, 0],
            [1, 106, 151, 118, 0, 0, 0],
            [154, 109, 91, 91, 0, 0, 0],
            [154, 202, 90, 77, 0, 0, 0],
            [1, 226, 136, 111, 0, 0, 0],
            [139, 281, 99, 75, 0, 0, 0],
            [1, 339, 99, 75, 0, 0, 0],
            [1, 416, 98, 50, 0, 0, 0],
            [102, 358, 90, 77, 0, 0, 0],
            [194, 358, 56, 54, 0, 0, 0],
            [194, 414, 56, 54, 0, 0, 0]
        ],
        "animations": {
            "enemyBoss": { "frames": [0] },
            "meteorSmall": { "frames": [1] },
            "life": { "frames": [2] },
            "laserGreen": { "frames": [3] },
            "laserRed": { "frames": [4] },
            "shield": { "frames": [5] },
            "enemyUFO": { "frames": [6] },
            "playerLeft": { "frames": [7] },
            "meteorBig": { "frames": [8] },
            "player": { "frames": [9] },
            "playerDamaged": { "frames": [10] },
            "enemyShip": { "frames": [11] },
            "playerRight": { "frames": [12] },
            "laserGreenShot": { "frames": [13] },
            "laserRedShot": { "frames": [14] }
        },
        "texturepacker": [
            "SmartUpdateHash: $TexturePacker:SmartUpdate:60d7cfb27286a4be40cd795d6e0f1e8c:ff5d9e16fe281d09cefdc307e93795ff:729adc6043343cfda41c447ce8f464d6$",
            "Created with TexturePacker (https://www.codeandweb.com/texturepacker) for EaselJS"
        ]
    };
    gameAtlas = new createjs.SpriteSheet(atlasData);
    scene = config.Scene.MENU;
    changeScene();
}
function gameLoop(event) {
    // Update whatever scene is currently active.
    currentScene.update();
    stage.update();
}
function changeScene() {
    // Simple state machine pattern to define scene swapping.
    switch (scene) {
        case config.Scene.MENU:
            stage.removeAllChildren();
            currentScene = new scenes.Menu();
            ;
            console.log("Starting MENU scene");
            break;
        case config.Scene.SHOOTER:
            stage.removeAllChildren();
            currentScene = new scenes.Shooter();
            console.log("Starting SHOOTER scene");
            break;
        case config.Scene.HELP:
            stage.removeAllChildren();
            currentScene = new scenes.Help();
            console.log("Starting Help scene");
            break;
        case config.Scene.GAMEOVER:
            stage.removeAllChildren();
            currentScene = new scenes.GameOver();
            console.log("Starting Game Over scene");
            break;
    }
}
//# sourceMappingURL=game.js.map