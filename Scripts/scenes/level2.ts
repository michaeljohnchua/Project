module scenes {
    export class Level2 extends objects.Scene {

        private _bg1 : createjs.Bitmap;
        private _bg2 : createjs.Bitmap;
        private _ship : objects.Player;
        

        private _meteor1: objects.Meteor;
        private _meteor2: objects.Meteor;
        private _meteor3: objects.Meteor;
        private _meteor4: objects.Meteor;
        private _meteor5: objects.Meteor;
        private _meteor6: objects.Meteor;
        private _meteor7: objects.Meteor;
        private _meteor8: objects.Meteor;
        private _meteor9: objects.Meteor;
        private _meteor10: objects.Meteor;
        private _meteor11: objects.Meteor;
        private _meteor12: objects.Meteor;
        private _meteor13: objects.Meteor;
        private _meteor14: objects.Meteor;
        private _meteor15: objects.Meteor;
        private _meteor16: objects.Meteor;
        private _meteorField: objects.Meteor[];

        private _enemy1 : objects.Enemy;
        private _enemy2 : objects.Enemy;
        private _enemy3 : objects.Enemy;
        private _enemy4 : objects.Enemy;
        private _enemy5 : objects.Enemy;
        private _enemy6: objects.Enemy;
        private _enemy7 : objects.Enemy;
        private _enemy8 : objects.Enemy;
        private _enemy9 : objects.Enemy;
        private _enemyFleet: objects.Enemy[];


        private _enemyBoss : objects.EnemyBoss;
        private _scrollableObjContainer : createjs.Container;

        private _scrollTrigger : number = 300;

        private _g : createjs.Graphics;
        private _containerBG :createjs.Shape;
        
        private _scoreLabel: objects.Label;
        
        private _endDelay: number = 0;

        private _lifeDisplay: createjs.Sprite[];

        score = 0;
        private _multiplier:number = 2;
        private _stageWin: boolean = false;
        
        constructor() {
            super();
            this.start();
        }

        public start() : void {

            this._stageWin = false;
           
            this._bg1 = new createjs.Bitmap(assets.getResult("Nebula2"));
            this._bg1.regY = 2560;
            this._bg1.y =600; 

            this._bg2 = new createjs.Bitmap(assets.getResult("Nebula2"));
            this._bg2.regY = 2560;
            this._bg2.y =-1220;   
            
             //meteor field
            this._meteor1 = new objects.Meteor("meteorBig",new objects.Vector2(640,-700));
            this._meteor2 = new objects.Meteor("meteorBig",new objects.Vector2(120,-300));
            this._meteor3 = new objects.Meteor("meteorSmall",new objects.Vector2(420,-560));
            this._meteor4 = new objects.Meteor("meteorSmall",new objects.Vector2(450,-650));
            this._meteor5 = new objects.Meteor("meteorSmall",new objects.Vector2(220,-1200));

            this._meteor6 = new objects.Meteor("meteorBig",new objects.Vector2(750,-1450));
            this._meteor7 = new objects.Meteor("meteorSmall",new objects.Vector2(220,-1600));
            this._meteor8 = new objects.Meteor("meteorBig",new objects.Vector2(700,-2200));
            this._meteor9 = new objects.Meteor("meteorSmall",new objects.Vector2(440,-2500));

            this._meteor10 = new objects.Meteor("meteorBig",new objects.Vector2(300,-2900));
            this._meteor11 = new objects.Meteor("meteorSmall",new objects.Vector2(100,-3150));
            this._meteor12 = new objects.Meteor("meteorSmall",new objects.Vector2(700,-2650));

            this._meteor13 = new objects.Meteor("meteorSmall",new objects.Vector2(440,-1800));
            this._meteor14 = new objects.Meteor("meteorSmall",new objects.Vector2(700,-1700));
            this._meteor15 = new objects.Meteor("meteorSmall",new objects.Vector2(405,-3220));
            this._meteor16 = new objects.Meteor("meteorBig",new objects.Vector2(620,-3450));


            this._meteorField = [];
            this._meteorField.push(this._meteor1);
            this._meteorField.push(this._meteor2);
            this._meteorField.push(this._meteor3);
            this._meteorField.push(this._meteor4);
            this._meteorField.push(this._meteor5);
            this._meteorField.push(this._meteor6);
            this._meteorField.push(this._meteor7);
            this._meteorField.push(this._meteor8);
            this._meteorField.push(this._meteor9);
            this._meteorField.push(this._meteor10);
            this._meteorField.push(this._meteor11);
            this._meteorField.push(this._meteor12);
            this._meteorField.push(this._meteor13);
            this._meteorField.push(this._meteor14);
            this._meteorField.push(this._meteor15);
            this._meteorField.push(this._meteor16);
            //Enemy Fleet
            this._enemy1 = new objects.Enemy("enemyShip",new objects.Vector2(540,-1200));
            this._enemy2 = new objects.Enemy("enemyShip",new objects.Vector2(380,-1500));
            this._enemy3 = new objects.Enemy("enemyShip",new objects.Vector2(20,-1600));
            this._enemy4 = new objects.Enemy("enemyShip",new objects.Vector2(250,-800));
            this._enemy5 = new objects.Enemy("enemyShip",new objects.Vector2(350,-2550));
            this._enemy6 = new objects.Enemy("enemyShip",new objects.Vector2(670,-3150));
            this._enemy7 = new objects.Enemy("enemyShip",new objects.Vector2(350,-2050));
            this._enemy8 = new objects.Enemy("enemyShip",new objects.Vector2(200,-2350));
            this._enemy9 = new objects.Enemy("enemyShip",new objects.Vector2(100,-2750));

            this._enemyFleet = [];
            this._enemyFleet.push(this._enemy1);
            this._enemyFleet.push(this._enemy2);
            this._enemyFleet.push(this._enemy3);
            this._enemyFleet.push(this._enemy4);
            this._enemyFleet.push(this._enemy5);
            this._enemyFleet.push(this._enemy6);
            this._enemyFleet.push(this._enemy7);
            this._enemyFleet.push(this._enemy8);
            this._enemyFleet.push(this._enemy9);

            //Boss
            this._enemyBoss = new objects.EnemyBoss("enemyUFO",new objects.Vector2(300,-3600),6);
            this._enemyBoss.scaleX =.8;
            this._enemyBoss.scaleY =.8;
            this._enemyBoss.level =2;
            //Life Sprites
            
            this._lifeDisplay=[];
            this._lifeDisplay.push( new createjs.Sprite(gameAtlas,"life")); 
            this._lifeDisplay.push( new createjs.Sprite(gameAtlas,"life"));
            this._lifeDisplay.push( new createjs.Sprite(gameAtlas,"life")); 
            this._lifeDisplay.push( new createjs.Sprite(gameAtlas,"life")); 
            this._lifeDisplay.push( new createjs.Sprite(gameAtlas,"life")); 

            this._lifeDisplay[4].x = 165;
            this._lifeDisplay[4].y = 570; 

            this._lifeDisplay[3].x = 125;
            this._lifeDisplay[3].y = 570;

            this._lifeDisplay[2].x = 85;
            this._lifeDisplay[2].y = 570;

            this._lifeDisplay[1].x = 45;
            this._lifeDisplay[1].y = 570;

            this._lifeDisplay[0].x = 5;
            this._lifeDisplay[0].y = 570;     
             
            this._scrollableObjContainer = new createjs.Container();
            this._scrollableObjContainer.regY=600;
            this._scrollableObjContainer.name ="scrollContainer";       
            this._ship = new objects.Player("player");
            this._ship.life = life;
           
            this._scrollableObjContainer.addChild(this._bg1);
            this._scrollableObjContainer.addChild(this._bg2);
            this._scrollableObjContainer.addChild(this._ship);
            
            for(let m of this._meteorField) {
               this._scrollableObjContainer.addChild(m);
            }
            for(let e of this._enemyFleet) {
               this._scrollableObjContainer.addChild(e);
            }

           this._scrollableObjContainer.addChild(this._enemyBoss);         

            this.addChild(this._scrollableObjContainer);
            stage.addChild(this);

            this._scoreLabel =new objects.Label(""+score, "italic 38px Impact ", "#000000", 780, 570);
            stage.addChild(this._scoreLabel);

            for (var i=0;i<this._ship.life;i++){
                   stage.addChild(this._lifeDisplay[i]);
            }

            //Music
            createjs.Sound.stop();
            createjs.Sound.play("Level2score");
            
        }

     //Scene Update 
        public update() : void {
            this._ship.update();
            super.update();
            life = this._ship.life;

            if (this._ship.getInvincible){
                this._scrollableObjContainer.addChild(this._ship.shield);
            }
            else{
                this._scrollableObjContainer.removeChild(this._ship.shield);
            }

            //Enemy Ship Updates
            for(let e of this._enemyFleet) {
            
                //player and enemy collision
                if(this.checkCollision(e,this._ship) && e.hitBool== false) {
                    this._ship.hitBool = true;
                    e.hitBool = true;
                }
                if (Math.abs(e.position.x-this._ship.position.x) <50 )
                {
                    e.aimBool = true;                    
                }
                else {
                    e.aimBool=false;
                }

                if (Math.abs(e.position.y-this._ship.position.y) <450 )
                {
                    e.rangeBool = true;                  
                }
                else {
                    e.rangeBool=false;
                }
               
               //x axis direction
                 if (e.position.x-this._ship.position.x <= 0 )
                {
                    e.direction = 1;                    
                }
                else {
                    e.direction = -1; 
                }

                //Speed trigger 
                if (Math.abs(e.position.y-this._ship.position.y) < 750 )
                {
                    e.speedx=2;
                    e.speedy=2;                  
                }
                else {
                    e.speedx=0;
                    e.speedy=0;
                }

                //Enemy Laser Check
                for (let l of e.getShots){

                    //add to container
                    if (l.addToContainer==false){
                    this._scrollableObjContainer.addChild(l);
                    l.addToContainer = true;
                    }

                     if (l.timer >=4 && l.hitBool){
                        this._scrollableObjContainer.removeChild(l);    
                     }
                    //Check for player hit
                    if (l.hitBool == false)
                    {
                        if (this.checkCollision(this._ship,l)){
                            l.hitBool = true;
                            l.gotoAndStop("laserRedShot");
                            this._ship.hitBool = true;
                        }

                        for(let m of this._meteorField){
                            if (this.checkCollision(m,l)){
                            l.hitBool=true;
                            }
                        }   
                        
                    }

                }

                //Check player lasers and enemy collision
                for(let i of this._ship.getShots){
                 if (this.checkCollision(i,e) && i.hitBool == false && e.hitBool==false){
                         i.hitBool =true;
                         e.hitBool = true;
                         score += 100*this._multiplier; 
                     }
                }

                   

             //if enemy is hit remove from container
             if (e.hitBool){
                    this._scrollableObjContainer.removeChild(e);
             }

                 
               e.update();

            }

            //Screen scroller checks
            if(this._ship.position.y < this._ship.scrollDistance)
            {
                this._ship.scrollDistance = this._ship.position.y;
            }
            
            if(this.checkScroll()) {
                this._scrollBGUp(this._ship.position.y);
            }
             
            //Ship and meteor Check
           for (let m of this._meteorField){
                
                if (this.checkCollision(this._ship,m)){
                    this._ship.hitBool = true;
                }
            }
            //Laser and Meteor Collision Check
            for(let i of this._ship.getShots){
         
                if (i.addToContainer==false){
                this._scrollableObjContainer.addChild(i);
                i.addToContainer = true;
                }
                //Laser hit action with delay
                if (i.timer >=4 && i.hitBool){
                        this._scrollableObjContainer.removeChild(i);    
                }
               
                for( let m of this._meteorField){
                  
                    if (this.checkCollision(i,m) && i.hitBool == false)
                    {
                        i.hitBool= true;                       
                    }
                }
            }

            //Boss Fight Update
            this._enemyBoss.update();
            if (Math.abs(this._enemyBoss.position.x-this._ship.position.x) <75 )
                {
                    this._enemyBoss.aimBool = true;                    
                }
                else {
                    this._enemyBoss.aimBool=false;
                }

                if (Math.abs(this._enemyBoss.position.y-this._ship.position.y) <650 )
                {
                    this._enemyBoss.rangeBool = true;                  
                }
                else {
                    this._enemyBoss.rangeBool=false;
                }

            //Boss Laser checks
            //Enemy Laser Check
            for (let l of this._enemyBoss.getShots){

                    //add to container
                    if (l.addToContainer==false){
                    this._scrollableObjContainer.addChild(l);
                    l.addToContainer = true;
                    }

                     if (l.timer >=4 && l.hitBool){
                        this._scrollableObjContainer.removeChild(l);    
                     }
                    //Check for player hit
                    if (l.hitBool == false)
                    {
                        if (this.checkCollision(this._ship,l)){
                            l.hitBool = true;
                            l.gotoAndStop("laserRedShot");
                            this._ship.hitBool = true;
                        }

                        for(let m of this._meteorField){
                            if (this.checkCollision(m,l)){
                            l.hitBool=true;
                            }
                        }   
                        
                    }
                   
            }

            //boss and Laser hit test
            for(let i of this._ship.getShots){
                     if (this.checkCollision(i,this._enemyBoss) && i.hitBool == false && this._enemyBoss.hitBool==false){
                         i.hitBool =true;
                         this._enemyBoss.hitBool = true;
                         score += 100*this._multiplier; 
                     }
            }

            if (this._enemyBoss.life == 0){
                this._scrollableObjContainer.removeChild(this._enemyBoss);
                this._endDelay += createjs.Ticker.interval;
                this._stageWin = true;
            }

            if( this._ship.life < 0){
                this._endDelay += createjs.Ticker.interval;
            }

            //Life Update
            this._scoreLabel.text = "" + score;

            for(let i of this._lifeDisplay){ 
                stage.removeChild(i);
            }

            for (var i=0;i<this._ship.life;i++){
                   stage.addChild(this._lifeDisplay[i]);
            }

            //Level End Handler
            if(this._endDelay> 2000){
                if (this._stageWin){
                    score+=500*this._multiplier;
                    scene = config.Scene.LEVEL3;
                }
                else{
                    scene = config.Scene.GAMEOVER;
                }
                
                changeScene();
            }

        }

        get getContainer() : createjs.Container {
            return this._scrollableObjContainer;
        }
        private _scrollBGUp(speed : number) : void{
            if(this._scrollableObjContainer.regY < 5000)
                this._scrollableObjContainer.regY = speed - this._scrollTrigger;
        }

        private checkScroll() : boolean {
            if(this._ship.y <= this._scrollTrigger && this._ship.scrollDistance >= this._ship.position.y) {
                return true;
            }
            else {
                return false;
            }
        }

        private checkCollision(obj1 : objects.GameObject, obj2 : objects.GameObject) : boolean {
            
            if(obj2.x < obj1.x + obj1.getBounds().width &&
                obj2.x + obj2.getBounds().width > obj1.x &&
                obj2.y < obj1.y + obj1.getBounds().height &&
                obj2.y + obj2.getBounds().height > obj1.y) {
                return true;
            }
            return false;
        }

    }
}