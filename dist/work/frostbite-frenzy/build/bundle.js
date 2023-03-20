"use strict";
var MenuPage = (function () {
    function MenuPage() {
        this.rectWidth = windowWidth * 0.6;
        this.rectHeight = windowHeight * 0.8;
        this.elementX = (windowWidth - this.rectWidth) / 2;
        this.elementY = (windowHeight - this.rectHeight) / 2;
    }
    MenuPage.prototype.draw = function () {
        this.drawShapes();
        this.drawImages();
        this.drawText();
    };
    return MenuPage;
}());
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Advantages = (function (_super) {
    __extends(Advantages, _super);
    function Advantages(menu) {
        var _this = _super.call(this) || this;
        _this.menu = menu;
        _this.iceImage = images.ice;
        _this.watchImage = images.watch;
        _this.snowflakeImage = images.snowflake;
        _this.invertarrowsImage = images.invertarrows;
        _this.createBackButton();
        return _this;
    }
    Advantages.prototype.drawShapes = function () {
        fill(47, 78, 107);
        rect((windowWidth - this.rectWidth) / 2, (windowHeight - this.rectHeight) / 2, this.rectWidth, this.rectHeight);
    };
    Advantages.prototype.drawText = function () {
        push();
        textFont(fontSansita);
        fill(255);
        textSize(50);
        textAlign(CENTER, CENTER);
        text("Advantages", this.elementX + this.rectWidth / 2, this.elementY + this.rectHeight * 0.15);
        pop();
        push();
        textFont(fontFreckleFace);
        fill(173, 202, 220);
        textSize(31);
        text("Get faster", this.elementX + this.rectWidth * 0.3, this.elementY + this.rectHeight * 0.3);
        pop();
        push();
        textFont(fontFreckleFace);
        fill(255);
        textSize(22);
        textWrap(WORD);
        text("Grab a clock and outrun your opponent!", this.elementX + (this.rectWidth * 0.3), this.elementY + this.rectHeight * 0.35, this.rectWidth * 0.4);
        pop();
        push();
        textFont(fontFreckleFace);
        fill(173, 202, 220);
        textSize(29);
        text("Get stronger", this.elementX + this.rectWidth * 0.3, this.elementY + this.rectHeight * 0.5);
        pop();
        push();
        textFont(fontFreckleFace);
        fill(255);
        textSize(22);
        textWrap(WORD);
        text("Grab a snowflake to be able to walk through the monsters!", this.elementX + (this.rectWidth * 0.3), this.elementY + this.rectHeight * 0.55, this.rectWidth * 0.4);
        pop();
        push();
        textFont(fontFreckleFace);
        fill(173, 202, 220);
        textSize(29);
        text("Mess with the other player", this.elementX + this.rectWidth * 0.3, this.elementY + this.rectHeight * 0.7);
        pop();
        push();
        textFont(fontFreckleFace);
        fill(255);
        textSize(22);
        textWrap(WORD);
        text("Grab the arrows to invert your opponent's controls!", this.elementX + (this.rectWidth * 0.3), this.elementY + this.rectHeight * 0.75, this.rectWidth * 0.45);
        pop();
    };
    Advantages.prototype.createBackButton = function () {
        var _this = this;
        var button = createButton("Back");
        button.size(this.rectWidth * 0.2, this.rectHeight * 0.1);
        button.position(this.elementX + this.rectWidth * 0.05, this.elementY + this.rectHeight - this.rectHeight * 0.11);
        button.style("color: #4A7AA7");
        button.style("border-radius: 1rem");
        button.style("border-style: none");
        button.style("font-size: 22px");
        button.style("font-family: Freckle Face");
        button.style("background-color: #D2ECF3");
        button.mousePressed(function () {
            _this.menu.openPage(new Objectives(_this.menu));
        });
        button.mouseOver(function () {
            button.style("color", "rgb(255, 255, 255)");
            button.style("background-color", "rgb(15, 82, 186");
        });
        button.mouseOut(function () {
            button.style("background: #D2ECF3");
            button.style("color: #4A7AA7");
        });
    };
    Advantages.prototype.drawImages = function () {
        var imageWidth = this.rectWidth;
        var imageHeight = (imageWidth / this.iceImage.width) * this.iceImage.height;
        image(this.iceImage, (this.elementX + this.rectWidth * 0.5) - (imageWidth / 2), this.elementY, imageWidth, imageHeight);
        image(this.watchImage, this.elementX + this.rectWidth * 0.75, this.elementY + this.rectHeight * 0.3, 0.1 * this.rectWidth, 0.1 * this.rectHeight);
        image(this.snowflakeImage, this.elementX + this.rectWidth * 0.75, this.elementY + this.rectHeight * 0.5, 0.1 * this.rectWidth, 0.1 * this.rectHeight);
        image(this.invertarrowsImage, this.elementX + this.rectWidth * 0.75, this.elementY + this.rectHeight * 0.7, 0.1 * this.rectWidth, 0.1 * this.rectHeight);
    };
    return Advantages;
}(MenuPage));
var Controls = (function (_super) {
    __extends(Controls, _super);
    function Controls(menu) {
        var _this = _super.call(this) || this;
        _this.menu = menu;
        _this.wsadButtonsImage = images.wsadButtons;
        _this.arrowButtonsImage = images.arrowButtons;
        _this.iceImage = images.ice;
        _this.movementTextImage = images.movement;
        _this.createBackButton();
        return _this;
    }
    Controls.prototype.drawShapes = function () {
        fill(47, 78, 107);
        rect((windowWidth - this.rectWidth) / 2, (windowHeight - this.rectHeight) / 2, this.rectWidth, this.rectHeight);
    };
    Controls.prototype.createBackButton = function () {
        var _this = this;
        var button = createButton("Back");
        button.size(this.rectWidth * 0.2, this.rectHeight * 0.1);
        button.position(this.elementX + this.rectWidth * 0.05, this.elementY + this.rectHeight - this.rectHeight * 0.11);
        button.style("color: #4A7AA7");
        button.style("border-radius: 1rem");
        button.style("border-style: none");
        button.style("font-size: 22px");
        button.style("font-family: Freckle Face");
        button.style("background-color: #D2ECF3");
        button.mousePressed(function () {
            _this.menu.openPage(new StartPage(_this.menu));
        });
        button.mouseOver(function () {
            button.style("color", "rgb(255, 255, 255)");
            button.style("background-color", "rgb(15, 82, 186");
        });
        button.mouseOut(function () {
            button.style("background: #D2ECF3");
            button.style("color: #4A7AA7");
        });
    };
    Controls.prototype.drawText = function () {
        push();
        fill(255);
        textFont(fontSansita);
        textSize(50);
        textAlign(CENTER, CENTER);
        text("Controls", this.elementX + this.rectWidth / 2, this.elementY + this.rectHeight * 0.15);
        pop();
        push();
        fill(255);
        textSize(20);
        text("Player1", this.elementX + this.rectWidth * 0.18, this.elementY + this.rectHeight * 0.35);
        textSize(20);
        text("Movement", this.elementX + this.rectWidth * 0.16, this.elementY + this.rectHeight * 0.73);
        textFont(fontSansita);
        pop();
        push();
        fill(255);
        textSize(20);
        text("Player2", this.elementX + this.rectWidth * 0.90 - 0.17 * this.rectWidth, this.elementY + this.rectHeight * 0.35);
        textSize(20);
        text("Movement", this.elementX + this.rectWidth * 0.90 - 0.18 * this.rectWidth, this.elementY + this.rectHeight * 0.73);
        textFont(fontSansita);
        pop();
    };
    Controls.prototype.drawImages = function () {
        var imageWidth = this.rectWidth;
        var imageHeight = (imageWidth / this.iceImage.width) * this.iceImage.height;
        image(this.iceImage, (this.elementX + this.rectWidth * 0.5) - (imageWidth / 2), this.elementY, imageWidth, imageHeight);
        image(this.wsadButtonsImage, this.elementX + this.rectWidth * 0.1, this.elementY + this.rectHeight / 2.5, 0.25 * this.rectWidth, 0.25 * this.rectHeight);
        image(this.arrowButtonsImage, this.elementX + this.rectWidth * 0.90 - 0.25 * this.rectWidth, this.elementY + this.rectHeight / 2.5, 0.25 * this.rectWidth, 0.25 * this.rectHeight);
        image(this.movementTextImage, this.elementX + this.rectWidth * 0.35, this.elementY + this.rectHeight * 0.75);
    };
    return Controls;
}(MenuPage));
var Game = (function () {
    function Game() {
        this.mapSize = height * 0.9;
        this.spawnController = new SpawnController([
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1],
            [1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1],
            [1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        ], this.mapSize);
        this.players = this.spawnController.createPlayers();
        this.entities = this.spawnController.createEntities();
        this.timer = new Timer(this.mapSize);
        this.scoreTable = new ScoreTable(this.mapSize);
        this.purpleMonsterSpawned = false;
        this.powerupsHaveStartedSpawning = false;
    }
    Game.prototype.update = function () {
        this.updatePlayers();
        this.updateEntities();
        this.checkCollision();
        this.resolveWallCollisions();
        this.timer.update();
        this.timeCheck();
    };
    Game.prototype.draw = function () {
        this.drawEntities();
        this.drawPlayers();
        this.timer.draw();
        this.scoreTable.draw();
    };
    Game.prototype.updatePlayers = function () {
        for (var _i = 0, _a = this.players; _i < _a.length; _i++) {
            var player = _a[_i];
            player.update();
        }
    };
    Game.prototype.updateEntities = function () {
        for (var _i = 0, _a = this.entities; _i < _a.length; _i++) {
            var entity = _a[_i];
            if (entity instanceof MovingEntity) {
                entity.update();
            }
        }
    };
    Game.prototype.drawEntities = function () {
        for (var _i = 0, _a = this.entities; _i < _a.length; _i++) {
            var entity = _a[_i];
            entity.draw();
        }
    };
    Game.prototype.drawPlayers = function () {
        for (var _i = 0, _a = this.players; _i < _a.length; _i++) {
            var player = _a[_i];
            player.draw();
        }
    };
    Game.prototype.checkCollision = function () {
        for (var _i = 0, _a = this.players; _i < _a.length; _i++) {
            var player = _a[_i];
            if (!player.isFrozen) {
                for (var _b = 0, _c = this.entities; _b < _c.length; _b++) {
                    var entity = _c[_b];
                    var distance = Math.abs(player.bounds.left - entity.bounds.left);
                    if (distance < this.spawnController.cellSize) {
                        if (player.bounds.left > entity.bounds.right ||
                            player.bounds.right < entity.bounds.left ||
                            player.bounds.top > entity.bounds.bottom ||
                            player.bounds.bottom < entity.bounds.top) {
                        }
                        else {
                            this.collisionHandler(player, entity);
                        }
                    }
                }
            }
        }
    };
    Game.prototype.collisionHandler = function (player, entity) {
        if (entity instanceof WallBlock) {
            player.registerWallCollision(entity);
        }
        if (entity instanceof Monster && !player.isImmortal) {
            player.freeze();
            frozenSound.play();
            frozenSound.setVolume(0.1);
        }
        if (entity instanceof Key) {
            this.keyCollision(player, entity);
            keySound.play();
            keySound.setVolume(0.1);
        }
        if (entity instanceof InvertKeys) {
            var filteredPlayerArray = this.players.filter(function (obj) {
                return obj !== player;
            });
            var filteredPlayer = filteredPlayerArray[0];
            powerupsSound.play();
            powerupsSound.setVolume(0.1);
            filteredPlayer.invertControls();
            this.removeEntity(entity);
        }
        if (entity instanceof Immortal) {
            player.makeImmortal();
            this.removeEntity(entity);
            powerupsSound.play();
            powerupsSound.setVolume(0.1);
        }
        if (entity instanceof SpeedUp) {
            player.speedUp();
            this.removeEntity(entity);
            powerupsSound.play();
            powerupsSound.setVolume(0.1);
        }
    };
    Game.prototype.removeEntity = function (entity) {
        this.entities = this.entities.filter(function (obj) {
            return obj !== entity;
        });
    };
    Game.prototype.resolveWallCollisions = function () {
        for (var _i = 0, _a = this.players; _i < _a.length; _i++) {
            var player = _a[_i];
            player.resolveWallCollision();
        }
    };
    Game.prototype.gameEnd = function () {
        var scores = this.scoreTable.getScores();
        gameFrame.gameOver(scores);
    };
    Game.prototype.keyCollision = function (player, key) {
        this.removeEntity(key);
        this.entities.push(this.spawnController.createKey());
        this.scoreTable.givePoint(player.playerNumber);
    };
    Game.prototype.timeCheck = function () {
        var _this = this;
        var remainingTime = this.timer.getTime();
        var randomNum;
        if (remainingTime <= 115 && this.powerupsHaveStartedSpawning === false) {
            this.powerupsHaveStartedSpawning = true;
            setInterval(function () {
                randomNum = Math.floor(Math.random() * 4) + 1;
                _this.entities.push(_this.spawnController.spawnPowerUpFromRandomNumber(randomNum));
            }, 15000);
        }
        if (remainingTime <= 60 && this.purpleMonsterSpawned === false) {
            this.purpleMonsterSpawned = true;
            this.entities.push(this.spawnController.createPurpleMonster());
        }
        if (remainingTime <= 0) {
            this.gameEnd();
        }
    };
    return Game;
}());
var GameFrame = (function () {
    function GameFrame() {
        this.activeState = new Menu("startpage");
    }
    GameFrame.prototype.update = function () {
        this.activeState.update();
    };
    GameFrame.prototype.draw = function () {
        background("black");
        this.activeState.draw();
    };
    GameFrame.prototype.newGame = function () {
        this.activeState = new Game();
        gameMusic.play();
        gameMusic.setVolume(0.1);
        removeElements();
        loop();
    };
    GameFrame.prototype.gameOver = function (scores) {
        this.activeState = new Menu("gameover", scores);
        gameMusic.stop();
        gameOver.play();
        gameOver.setVolume(0.2);
    };
    return GameFrame;
}());
var GameEntity = (function () {
    function GameEntity(position, size) {
        this.position = position;
        this.size = size;
        this.bounds = {
            left: this.position.x,
            right: this.position.x + this.size.x,
            top: this.position.y,
            bottom: this.position.y + this.size.y
        };
    }
    return GameEntity;
}());
var Gameover = (function (_super) {
    __extends(Gameover, _super);
    function Gameover(menu, scores) {
        var _this = _super.call(this) || this;
        _this.options = ["New Game", "Back to Menu"];
        _this.buttons = [];
        _this.menu = menu;
        _this.monsterPurple = images.purpleMonsterSingle;
        _this.monsterBlue = images.monsterBlue;
        _this.trophy = images.trophy;
        _this.key = images.key;
        _this.drawButtons();
        if (scores[1] > scores[2]) {
            _this.winnerImage = images.yellowSnowman;
            _this.winnerScore = scores[1];
            _this.loserImage = images.greenSnowman;
            _this.loserScore = scores[2];
        }
        else {
            _this.winnerImage = images.greenSnowman;
            _this.winnerScore = scores[2];
            _this.loserImage = images.yellowSnowman;
            _this.loserScore = scores[1];
        }
        return _this;
    }
    Gameover.prototype.drawShapes = function () {
        push();
        strokeWeight(5);
        stroke(255, 255, 255);
        fill(47, 78, 107);
        rect((windowWidth - this.rectWidth) / 2, (windowHeight - this.rectHeight) / 2, this.rectWidth, this.rectHeight);
        line(this.elementX, height / 2, this.rectWidth + this.elementX, height / 2);
        pop();
    };
    Gameover.prototype.drawText = function () {
        push();
        textFont("Freckle Face");
        fill(255);
        textSize(50);
        textAlign(CENTER, CENTER);
        text("The winner!!", width / 2, this.elementY + this.rectHeight * 0.05);
        text(this.winnerScore, width / 2, this.elementY + this.rectHeight * 0.45);
        pop();
        push();
        textFont("Freckle Face");
        fill(255, 0, 0);
        textSize(50);
        textAlign(CENTER, CENTER);
        text("Defeated!", width / 2, this.elementY + this.rectHeight * 0.55);
        text(this.loserScore, width / 2, this.elementY + this.rectHeight * 0.95);
        pop();
    };
    Gameover.prototype.drawImages = function () {
        push();
        imageMode(CENTER);
        image(this.winnerImage, width / 2, this.elementY + this.rectHeight * 0.25, this.rectWidth * 0.12, this.rectWidth * 0.2);
        image(this.loserImage, width / 2, this.elementY + this.rectHeight * 0.75, this.rectWidth * 0.12, this.rectWidth * 0.2);
        image(this.key, this.elementX + this.rectWidth * 0.1, this.elementY + this.rectHeight * 0.1, this.rectWidth * 0.1, this.rectWidth * 0.05);
        image(this.key, this.elementX + this.rectWidth * 0.2, this.elementY + this.rectHeight * 0.2, this.rectWidth * 0.1, this.rectWidth * 0.05);
        image(this.trophy, this.elementX + this.rectWidth * 0.2, this.elementY + this.rectHeight * 0.37, this.rectWidth * 0.2, this.rectWidth * 0.2);
        image(this.trophy, this.elementX + this.rectWidth * 0.8, this.elementY + this.rectHeight * 0.37, this.rectWidth * 0.2, this.rectWidth * 0.2);
        image(this.key, this.elementX + this.rectWidth * 0.8, this.elementY + this.rectHeight * 0.2, this.rectWidth * 0.1, this.rectWidth * 0.05);
        image(this.key, this.elementX + this.rectWidth * 0.9, this.elementY + this.rectHeight * 0.1, this.rectWidth * 0.1, this.rectWidth * 0.05);
        image(this.monsterPurple, this.elementX + this.rectWidth * 0.25, height / 2 + this.rectHeight * 0.1, this.rectWidth * 0.1, this.rectWidth * 0.12);
        image(this.monsterBlue, this.elementX + this.rectWidth * 0.75, height / 2 + this.rectHeight * 0.1, this.rectWidth * 0.1, this.rectWidth * 0.12);
        pop();
    };
    Gameover.prototype.drawButtons = function () {
        var _this = this;
        var _loop_1 = function (i) {
            var button = createButton(this_1.options[i]);
            button.position(this_1.elementX + this_1.rectWidth - 170, this_1.elementY + this_1.rectHeight - 110 + (i - 0.5) * 50);
            button.size(150, 40);
            button.style("color: #4A7AA7");
            button.style("border-radius: 1rem");
            button.style("border-style: none");
            button.style("font-size: 19px");
            button.style("font-family: Freckle Face");
            button.style("background-color: #D2ECF3");
            button.mouseOver(function () {
                _this.buttons[i].style("color", "rgb(255, 255, 255)");
                _this.buttons[i].style("background-color", "rgb(15, 82, 186");
            });
            button.mouseOut(function () {
                _this.buttons[i].style("background: #D2ECF3");
                _this.buttons[i].style("color: #4A7AA7");
            });
            button.mousePressed(function () {
                if (i === 0) {
                    gameFrame.newGame();
                }
                else if (i === 1) {
                    _this.menu.openPage(new StartPage(_this.menu));
                }
            });
            this_1.buttons.push(button);
        };
        var this_1 = this;
        for (var i = 0; i < this.options.length; i++) {
            _loop_1(i);
        }
    };
    return Gameover;
}(MenuPage));
var Immortal = (function (_super) {
    __extends(Immortal, _super);
    function Immortal(position, cellSize) {
        var _this = _super.call(this, position, new p5.Vector(cellSize, cellSize)) || this;
        _this.image = images.snowflake;
        return _this;
    }
    Immortal.prototype.draw = function () {
        push();
        image(this.image, this.position.x + this.size.x * 0.1, this.position.y + this.size.y * 0.1, this.size.x * 0.8, this.size.y * 0.8);
        pop();
    };
    Immortal.prototype.update = function () { };
    return Immortal;
}(GameEntity));
var InvertKeys = (function (_super) {
    __extends(InvertKeys, _super);
    function InvertKeys(position, cellSize) {
        var _this = _super.call(this, position, new p5.Vector(cellSize, cellSize)) || this;
        _this.image = images.invertarrows;
        return _this;
    }
    InvertKeys.prototype.draw = function () {
        push();
        image(this.image, this.position.x + this.size.x * 0.1, this.position.y + this.size.y * 0.1, this.size.x * 0.8, this.size.y * 0.8);
        pop();
    };
    return InvertKeys;
}(GameEntity));
var Key = (function (_super) {
    __extends(Key, _super);
    function Key(position, cellSize, id) {
        var _this = _super.call(this, position, new p5.Vector(cellSize, cellSize)) || this;
        _this.image = images.key;
        _this.id = id;
        return _this;
    }
    Key.prototype.draw = function () {
        push();
        image(this.image, this.position.x + this.size.x * 0.1, this.position.y + this.size.y * 0.2, this.size.x * 0.8, this.size.y * 0.6);
        pop();
    };
    return Key;
}(GameEntity));
var Menu = (function () {
    function Menu(firstPage, scores) {
        this.activePage = this.setActivePage(firstPage, scores);
    }
    Menu.prototype.setActivePage = function (firstPage, scores) {
        var activePage;
        if (firstPage === "gameover" && scores) {
            activePage = new Gameover(this, scores);
        }
        else {
            activePage = new StartPage(this);
        }
        return activePage;
    };
    Menu.prototype.update = function () { };
    Menu.prototype.draw = function () {
        this.activePage.draw();
    };
    Menu.prototype.openPage = function (page) {
        this.activePage = page;
    };
    return Menu;
}());
var MovingEntity = (function (_super) {
    __extends(MovingEntity, _super);
    function MovingEntity(position, size, speed) {
        var _this = _super.call(this, position, size) || this;
        _this.speed = speed;
        _this.previousPosition = position;
        return _this;
    }
    MovingEntity.prototype.updateBounds = function () {
        this.bounds.left = this.position.x;
        this.bounds.right = this.position.x + this.size.x;
        this.bounds.top = this.position.y;
        this.bounds.bottom = this.position.y + this.size.y;
    };
    return MovingEntity;
}(GameEntity));
var Monster = (function (_super) {
    __extends(Monster, _super);
    function Monster(position, cellSize, mapArray, mapPosition, image, speed) {
        var _this = _super.call(this, new p5.Vector(position.x + cellSize * 0.1, position.y + cellSize * 0.1), new p5.Vector(cellSize * 0.8, cellSize * 0.8), cellSize / speed) || this;
        _this.mapArray = mapArray;
        _this.mapPosition = mapPosition;
        _this.cellSize = cellSize;
        _this.image = image;
        _this.stepCounter = 0;
        _this.cellSteps = speed;
        _this.direction = _this.setDirection(_this.getDirections());
        return _this;
    }
    Monster.prototype.draw = function () {
        push();
        image(this.image, this.position.x, this.position.y - this.size.y * 0.2, this.size.x, this.size.y * 1.2);
        pop();
    };
    Monster.prototype.update = function () {
        this.directionControl();
        this.move();
        this.updateBounds();
    };
    Monster.prototype.directionControl = function () {
        var openDirections;
        if (this.stepCounter === this.cellSteps) {
            openDirections = this.getDirections();
            this.direction = this.setDirection(openDirections);
            this.stepCounter = 1;
        }
        else {
            this.stepCounter++;
        }
    };
    Monster.prototype.getDirections = function () {
        var currentPos = this.getCell();
        var x = currentPos.x;
        var y = currentPos.y;
        var possibleDirs = [];
        if (this.mapArray[y - 1][x] != 1)
            possibleDirs.push("up");
        if (this.mapArray[y + 1][x] != 1)
            possibleDirs.push("down");
        if (this.mapArray[y][x - 1] != 1)
            possibleDirs.push("left");
        if (this.mapArray[y][x + 1] != 1)
            possibleDirs.push("right");
        return possibleDirs;
    };
    Monster.prototype.getCell = function () {
        var x = Math.floor((this.position.x - this.mapPosition.x) / this.cellSize);
        var y = Math.floor((this.position.y - this.mapPosition.y) / this.cellSize);
        return { x: x, y: y };
    };
    Monster.prototype.setDirection = function (openDirections) {
        var direction = this.direction;
        if (openDirections.length >= 3 || !openDirections.includes(this.direction)) {
            direction = openDirections[Math.floor(Math.random() * openDirections.length)];
        }
        return direction;
    };
    Monster.prototype.move = function () {
        if (this.direction === "up") {
            this.position.y -= this.speed;
        }
        else if (this.direction === "down") {
            this.position.y += this.speed;
        }
        else if (this.direction === "right") {
            this.position.x += this.speed;
        }
        else if (this.direction === "left") {
            this.position.x -= this.speed;
        }
    };
    return Monster;
}(MovingEntity));
var Objectives = (function (_super) {
    __extends(Objectives, _super);
    function Objectives(menu) {
        var _this = _super.call(this) || this;
        _this.menu = menu;
        _this.iceImage = images.ice;
        _this.key = images.key;
        _this.monsterdescriptions = images.monsterdescriptions;
        _this.createBackButton();
        _this.readMore();
        return _this;
    }
    Objectives.prototype.drawShapes = function () {
        fill(47, 78, 107);
        rect((windowWidth - this.rectWidth) / 2, (windowHeight - this.rectHeight) / 2, this.rectWidth, this.rectHeight);
    };
    Objectives.prototype.drawText = function () {
        push();
        textFont(fontSansita);
        fill(255);
        textSize(50);
        textAlign(CENTER, CENTER);
        text("Objectives", this.elementX + this.rectWidth / 2, this.elementY + this.rectHeight * 0.15);
        pop();
        push();
        textFont(fontFreckleFace);
        fill(173, 202, 220);
        textSize(31);
        text("Collect keys", this.elementX + this.rectWidth * 0.30, this.elementY + this.rectHeight * 0.3);
        pop();
        push();
        textFont(fontFreckleFace);
        fill(255);
        textSize(22);
        textWrap(WORD);
        text("The player with most keys when the time runs out wins!", this.elementX + (this.rectWidth * 0.30), this.elementY + this.rectHeight * 0.35, this.rectWidth * 0.4);
        pop();
        push();
        textFont(fontFreckleFace);
        fill(173, 202, 220);
        textSize(29);
        text("Don't Get Caught", this.elementX + this.rectWidth * 0.30, this.elementY + this.rectHeight * 0.5);
        pop();
        push();
        textFont(fontFreckleFace);
        fill(255);
        textSize(22);
        textWrap(WORD);
        text("Watch out for monsters - they will freeze you!", this.elementX + (this.rectWidth * 0.30), this.elementY + this.rectHeight * 0.55, this.rectWidth * 0.4);
        pop();
        push();
        textFont(fontFreckleFace);
        fill(173, 202, 220);
        textSize(29);
        text("Get Advantages", this.elementX + this.rectWidth * 0.30, this.elementY + this.rectHeight * 0.7);
        pop();
        push();
        textFont(fontFreckleFace);
        fill(255);
        textSize(22);
        textWrap(WORD);
        text("Pick up special items to get those keys quicker than your opponent!", this.elementX + (this.rectWidth * 0.3), this.elementY + this.rectHeight * 0.75, this.rectWidth * 0.45);
        pop();
        push();
        textFont(fontFreckleFace);
        fill(255);
        textSize(22);
        textWrap(WORD);
        text("Faster than the blue one!", this.elementX + this.rectWidth * 0.75, this.elementY + this.rectHeight * 0.65, this.rectWidth * 0.2);
        pop();
    };
    Objectives.prototype.createBackButton = function () {
        var _this = this;
        var button = createButton("Back");
        button.size(this.rectWidth * 0.2, this.rectHeight * 0.1);
        button.position(this.elementX + this.rectWidth * 0.05, this.elementY + this.rectHeight - this.rectHeight * 0.11);
        button.style("color: #4A7AA7");
        button.style("border-radius: 1rem");
        button.style("border-style: none");
        button.style("font-size: 22px");
        button.style("font-family: Freckle Face");
        button.style("background-color: #D2ECF3");
        button.mousePressed(function () {
            _this.menu.openPage(new StartPage(_this.menu));
        });
        button.mouseOver(function () {
            button.style("color", "rgb(255, 255, 255)");
            button.style("background-color", "rgb(15, 82, 186");
        });
        button.mouseOut(function () {
            button.style("background: #D2ECF3");
            button.style("color: #4A7AA7");
        });
    };
    Objectives.prototype.readMore = function () {
        var _this = this;
        var button = createButton("Read More");
        button.position(this.elementX + this.rectWidth / 2 - (this.rectWidth * 0.2) / 2, this.elementY + this.rectHeight - this.rectHeight * 0.11);
        button.size(this.rectWidth * 0.2, this.rectHeight * 0.1);
        button.style("color: #4A7AA7");
        button.style("border-radius: 1rem");
        button.style("border-style: none");
        button.style("font-size: 22px");
        button.style("font-family: Freckle Face");
        button.style("background-color: #D2ECF3");
        button.mousePressed(function () {
            removeElements();
            _this.menu.openPage(new Advantages(_this.menu));
        });
        button.mouseOver(function () {
            button.style("color", "rgb(255, 255, 255)");
            button.style("background-color", "rgb(15, 82, 186");
        });
        button.mouseOut(function () {
            button.style("background: #D2ECF3");
            button.style("color: #4A7AA7");
        });
    };
    Objectives.prototype.drawImages = function () {
        var imageWidth = this.rectWidth;
        var imageHeight = (imageWidth / this.iceImage.width) * this.iceImage.height;
        image(this.iceImage, (this.elementX + this.rectWidth * 0.5) - (imageWidth / 2), this.elementY, imageWidth, imageHeight);
        image(this.key, this.elementX + this.rectWidth * 0.75, this.elementY + this.rectHeight * 0.30, 0.1 * this.rectWidth, 0.1 * this.rectHeight);
        image(this.monsterdescriptions, this.elementX + this.rectWidth * 0.75, this.elementY + this.rectHeight * 0.42, 0.2 * this.rectWidth, 0.2 * this.rectHeight);
    };
    return Objectives;
}(MenuPage));
var gameFrame;
var fontFreckleFace;
var fontSansita;
var gameMusic;
var gameOver;
var keySound;
var frozenSound;
var powerupsSound;
var images;
function preload() {
    fontFreckleFace = loadFont("./assets/fonts/FreckleFace.ttf");
    fontSansita = loadFont("./assets/fonts/Sansita.ttf");
    gameMusic = loadSound("./assets/sounds/gamemusic.mp3");
    gameOver = loadSound("./assets/sounds/gameOver.mp3");
    keySound = loadSound("./assets/sounds/key.mp3");
    frozenSound = loadSound("./assets/sounds/frozen.mp3");
    powerupsSound = loadSound("./assets/sounds/powerups.mp3");
    images = {
        wallblock: loadImage("./assets/images/wallblock.png"),
        wsadButtons: loadImage("./assets/images/wsadbuttons.png"),
        arrowButtons: loadImage("./assets/images/arrowbuttons.png"),
        yellowSnowman: loadImage("./assets/images/yellowsnowman.png"),
        greenSnowman: loadImage("./assets/images/greensnowman.png"),
        blueMonster: loadImage("./assets/images/bluemonster.png"),
        purplemonster: loadImage("./assets/images/purplemonster.png"),
        characters: loadImage("./assets/images/characters.png"),
        fallingsnow: loadImage("./assets/images/fallingsnow.gif"),
        key: loadImage("./assets/images/key.png"),
        monsterdescriptions: loadImage("./assets/images/monsterdescriptions.png"),
        watch: loadImage("./assets/images/watch.png"),
        snowflake: loadImage("./assets/images/advantagessnowflake.png"),
        invertarrows: loadImage("./assets/images/invertarrows.png"),
        purpleMonsterSingle: loadImage("./assets/images/purpleMonsterSingle.png"),
        monsterBlue: loadImage("./assets/images/monsterBlue.png"),
        trophy: loadImage("./assets/images/trophy.gif"),
        ice: loadImage("./assets/images/ice.png"),
        movement: loadImage("./assets/images/movement.png"),
    };
}
function setup() {
    createCanvas(windowWidth, windowHeight);
    frameRate(60);
    gameFrame = new GameFrame();
}
function draw() {
    gameFrame.update();
    gameFrame.draw();
}
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
var Path = (function (_super) {
    __extends(Path, _super);
    function Path(position, cellSize) {
        return _super.call(this, position, new p5.Vector(cellSize, cellSize)) || this;
    }
    Path.prototype.draw = function () {
        push();
        fill(102, 204, 255);
        stroke(102, 204, 255);
        rect(this.position.x, this.position.y, this.size.x, this.size.y);
        pop();
    };
    return Path;
}(GameEntity));
var Player = (function (_super) {
    __extends(Player, _super);
    function Player(position, cellSize, playerNumber) {
        var _this = _super.call(this, position, new p5.Vector(cellSize * 0.6, cellSize * 0.6), 7) || this;
        _this.position.x += cellSize * 0.2;
        _this.position.y += cellSize * 0.2;
        _this.playerNumber = playerNumber;
        _this.image = _this.getImages();
        _this.isFrozen = false;
        _this.freezeTimer = 0;
        _this.isImmortal = false;
        _this.immortalTimer = 0;
        _this.isInverted = false;
        _this.invertedTimer = 0;
        _this.isSpedUp = false;
        _this.speedUpTimer = 0;
        _this.tintTimer = 0;
        _this.tintOn = false;
        _this.keyCodes = _this.getKeyCodes();
        _this.leftButton = _this.keyCodes[0];
        _this.rightButton = _this.keyCodes[1];
        _this.upButton = _this.keyCodes[2];
        _this.downButton = _this.keyCodes[3];
        _this.wallBlocksCollided = [];
        return _this;
    }
    Player.prototype.getKeyCodes = function () {
        var keyCodes = [];
        if (this.playerNumber === 1) {
            keyCodes = [65, 68, 87, 83];
        }
        else if (this.playerNumber === 2) {
            keyCodes = [LEFT_ARROW, RIGHT_ARROW, UP_ARROW, DOWN_ARROW];
        }
        return keyCodes;
    };
    Player.prototype.getImages = function () {
        var playerImages = images.yellowSnowman;
        if (this.playerNumber === 2) {
            playerImages = images.greenSnowman;
        }
        return playerImages;
    };
    Player.prototype.update = function () {
        this.previousPosition = new p5.Vector(this.position.x, this.position.y);
        this.updateState();
        this.checkUserInput();
        this.updateBounds();
        this.tintBlink();
    };
    Player.prototype.draw = function () {
        push();
        if (this.isFrozen) {
            tint(0, 153, 204, 126);
        }
        if (this.isImmortal && this.tintOn) {
            tint(243, 250, 142);
        }
        if (this.isSpedUp && !this.isFrozen && this.tintOn) {
            tint(154, 252, 172);
        }
        if (this.isInverted && !this.isFrozen && this.tintOn) {
            tint(250, 151, 147);
        }
        image(this.image, this.position.x - this.size.x * 0.1, this.position.y - this.size.y * 0.7, this.size.x * 1.2, this.size.y * 1.7);
        pop();
    };
    Player.prototype.updateState = function () {
        switch (true) {
            case this.isFrozen:
                this.freezeTimer -= deltaTime;
                if (this.freezeTimer <= 0) {
                    this.isFrozen = false;
                }
                break;
            case this.isInverted:
                this.invertedTimer -= deltaTime;
                if (this.invertedTimer <= 0) {
                    this.isInverted = false;
                }
                break;
            case this.isImmortal:
                this.immortalTimer -= deltaTime;
                if (this.immortalTimer <= 0) {
                    this.isImmortal = false;
                }
                break;
            case this.isSpedUp:
                this.speedUpTimer -= deltaTime;
                if (this.speedUpTimer <= 0) {
                    this.speed = this.speed / 1.5;
                    this.isSpedUp = false;
                }
                break;
        }
    };
    Player.prototype.tintBlink = function () {
        if ((this.isInverted || this.isSpedUp || this.isImmortal) &&
            !this.isFrozen) {
            this.tintTimer -= deltaTime;
            if (this.tintTimer > 500) {
                this.tintOn = true;
            }
            else {
                this.tintOn = false;
            }
            if (this.tintTimer <= 0) {
                this.tintTimer = 1000;
            }
        }
    };
    Player.prototype.checkUserInput = function () {
        if (!this.isFrozen)
            if (this.isInverted) {
                if (keyIsDown(this.leftButton)) {
                    this.position.x += this.speed;
                }
                if (keyIsDown(this.rightButton)) {
                    this.position.x -= this.speed;
                }
                if (keyIsDown(this.upButton)) {
                    this.position.y += this.speed;
                }
                if (keyIsDown(this.downButton)) {
                    this.position.y -= this.speed;
                }
            }
            else {
                if (keyIsDown(this.leftButton)) {
                    this.position.x -= this.speed;
                }
                if (keyIsDown(this.rightButton)) {
                    this.position.x += this.speed;
                }
                if (keyIsDown(this.upButton)) {
                    this.position.y -= this.speed;
                }
                if (keyIsDown(this.downButton)) {
                    this.position.y += this.speed;
                }
            }
    };
    Player.prototype.registerWallCollision = function (wallBock) {
        this.wallBlocksCollided.push(wallBock);
    };
    Player.prototype.resolveWallCollision = function () {
        if (this.wallBlocksCollided.length === 1) {
            this.singleWallCollision();
        }
        else if (this.wallBlocksCollided.length === 2) {
            this.doubleWallCollision();
        }
        else if (this.wallBlocksCollided.length === 3) {
            this.position = this.previousPosition;
        }
        this.wallBlocksCollided = [];
    };
    Player.prototype.singleWallCollision = function () {
        var wall = this.wallBlocksCollided[0];
        if (this.position.x !== this.previousPosition.x &&
            this.position.y !== this.previousPosition.y) {
            var previousBottom = this.previousPosition.y + this.size.x;
            var previousRight = this.previousPosition.x + this.size.y;
            var previousBounds = {
                top: this.previousPosition.y,
                bottom: previousBottom,
                left: this.previousPosition.x,
                right: previousRight,
            };
            var topDistance = Math.abs(previousBounds.top - wall.bounds.bottom);
            var bottomDistance = Math.abs(previousBounds.bottom - wall.bounds.top);
            var leftDistance = Math.abs(previousBounds.left - wall.bounds.right);
            var rightDistance = Math.abs(previousBounds.right - wall.bounds.left);
            var collisionSide = Math.min(topDistance, bottomDistance, leftDistance, rightDistance);
            switch (collisionSide) {
                case topDistance:
                    this.position.y = this.previousPosition.y;
                    break;
                case bottomDistance:
                    this.position.y = this.previousPosition.y;
                    break;
                case leftDistance:
                    this.position.x = this.previousPosition.x;
                    break;
                case rightDistance:
                    this.position.x = this.previousPosition.x;
                    break;
                default:
                    break;
            }
        }
        else {
            this.position = this.previousPosition;
        }
    };
    Player.prototype.doubleWallCollision = function () {
        if (this.wallBlocksCollided[0].bounds.left ===
            this.wallBlocksCollided[1].bounds.left) {
            this.position.x = this.previousPosition.x;
        }
        if (this.wallBlocksCollided[0].bounds.top ===
            this.wallBlocksCollided[1].bounds.top) {
            this.position.y = this.previousPosition.y;
        }
    };
    Player.prototype.freeze = function () {
        this.freezeTimer = 3000;
        this.isFrozen = true;
    };
    Player.prototype.speedUp = function () {
        if (this.isSpedUp) {
            this.speedUpTimer = 10000;
        }
        else {
            this.resetPowerups();
            this.speedUpTimer = 10000;
            this.speed = this.speed * 1.5;
            this.isSpedUp = true;
        }
    };
    Player.prototype.makeImmortal = function () {
        if (this.isImmortal) {
            this.immortalTimer = 10000;
        }
        else {
            this.resetPowerups();
            this.immortalTimer = 10000;
            this.isImmortal = true;
        }
    };
    Player.prototype.invertControls = function () {
        this.resetPowerups();
        this.invertedTimer = 10000;
        this.isInverted = true;
    };
    Player.prototype.resetPowerups = function () {
        this.isImmortal = false;
        this.immortalTimer = 0;
        this.isInverted = false;
        this.invertedTimer = 0;
        this.isSpedUp = false;
        this.speedUpTimer = 0;
    };
    return Player;
}(MovingEntity));
var PurpleMonster = (function (_super) {
    __extends(PurpleMonster, _super);
    function PurpleMonster(position, cellSize, mapArray, mapPosition) {
        return _super.call(this, position, cellSize, mapArray, mapPosition, images.purplemonster, 10) || this;
    }
    return PurpleMonster;
}(Monster));
var BlueMonster = (function (_super) {
    __extends(BlueMonster, _super);
    function BlueMonster(position, cellSize, mapArray, mapPosition) {
        return _super.call(this, position, cellSize, mapArray, mapPosition, images.blueMonster, 20) || this;
    }
    return BlueMonster;
}(Monster));
var ScoreTable = (function () {
    function ScoreTable(mapSize) {
        this.player1Score = 0;
        this.player2Score = 0;
        this.availWidth = width - mapSize;
        this.textSize = this.availWidth * 0.1;
        this.p1X = this.availWidth * 0.25;
        this.p2X = this.availWidth * 0.75 + mapSize;
        this.playerPicY = height * 0.1;
        this.imgWidth = this.availWidth / 8;
        this.imgHeight = this.imgWidth * 1.5;
        this.scoreY = this.playerPicY + this.imgHeight * 1.2;
    }
    ScoreTable.prototype.draw = function () {
        image(images.yellowSnowman, this.p1X - (this.imgWidth / 2), this.playerPicY, this.imgWidth, this.imgHeight);
        image(images.greenSnowman, this.p2X - (this.imgWidth / 2), this.playerPicY, this.imgWidth, this.imgHeight);
        push();
        fill('white');
        textFont(fontFreckleFace);
        textSize(this.textSize);
        textAlign(CENTER, TOP);
        text(this.player1Score, this.p1X, this.scoreY);
        text(this.player2Score, this.p2X, this.scoreY);
        pop();
    };
    ScoreTable.prototype.givePoint = function (playerNum) {
        switch (playerNum) {
            case 1:
                this.player1Score += 1;
                break;
            case 2:
                this.player2Score += 1;
                break;
            default:
                break;
        }
    };
    ScoreTable.prototype.getScores = function () {
        return {
            1: this.player1Score,
            2: this.player2Score
        };
    };
    return ScoreTable;
}());
var SpawnController = (function () {
    function SpawnController(mapArray, mapSize) {
        this.mapSize = mapSize;
        var startX = (width - this.mapSize) / 2;
        var startY = (height - this.mapSize) / 2;
        this.mapPosition = new p5.Vector(startX, startY);
        this.mapArray = mapArray;
        this.gridCols = this.mapArray[0].length;
        this.cellSize = this.mapSize / this.gridCols;
        this.keysSpawned = 0;
    }
    SpawnController.prototype.createPlayers = function () {
        var _this = this;
        var players = [];
        var pNum = 1;
        this.mapArray.forEach(function (row, i) {
            row.forEach(function (cell, j) {
                var position = new p5.Vector(j * _this.cellSize + _this.mapPosition.x, i * _this.cellSize + _this.mapPosition.y);
                if (cell === 2) {
                    players.push(new Player(position, _this.cellSize, pNum));
                    pNum++;
                }
            });
        });
        return players;
    };
    SpawnController.prototype.createEntities = function () {
        var _this = this;
        var entities = [];
        this.mapArray.forEach(function (row, i) {
            row.forEach(function (cell, j) {
                var position = new p5.Vector(j * _this.cellSize + _this.mapPosition.x, i * _this.cellSize + _this.mapPosition.y);
                if (cell === 0 || cell === 2) {
                    entities.push(new Path(position, _this.cellSize));
                }
                if (cell === 1) {
                    entities.push(new WallBlock(position, _this.cellSize));
                }
            });
        });
        for (var i = 0; i < 4; i++) {
            entities.push(this.createMonster());
        }
        for (var i = 0; i < 2; i++) {
            entities.push(this.createKey());
        }
        return entities;
    };
    SpawnController.prototype.randomValidSpawnpoint = function () {
        var validSpawnPoints = [];
        for (var i = 0; i < this.mapArray.length; i++) {
            for (var j = 0; j < this.mapArray[i].length; j++) {
                if (this.mapArray[i][j] === 0) {
                    validSpawnPoints.push({
                        x: j,
                        y: i
                    });
                }
            }
        }
        var randomIndex = Math.floor(Math.random() * validSpawnPoints.length);
        var spawnPoint = validSpawnPoints[randomIndex];
        return new p5.Vector(spawnPoint.x * this.cellSize + this.mapPosition.x, spawnPoint.y * this.cellSize + this.mapPosition.y);
    };
    SpawnController.prototype.createMonster = function () {
        var spawnPos = this.randomValidSpawnpoint();
        return new BlueMonster(spawnPos, this.cellSize, this.mapArray, this.mapPosition);
    };
    SpawnController.prototype.createPurpleMonster = function () {
        return new PurpleMonster(this.randomValidSpawnpoint(), this.cellSize, this.mapArray, this.mapPosition);
    };
    SpawnController.prototype.createKey = function () {
        var key = new Key(this.randomValidSpawnpoint(), this.cellSize, this.keysSpawned);
        this.keysSpawned++;
        return key;
    };
    SpawnController.prototype.spawnPowerUpFromRandomNumber = function (randomNum) {
        var position = this.randomValidSpawnpoint();
        var newPowerUp = new InvertKeys(position, this.cellSize);
        if (randomNum === 1) {
            newPowerUp = new SpeedUp(position, this.cellSize);
        }
        else if (randomNum === 2) {
            newPowerUp = new Immortal(position, this.cellSize);
        }
        else if (randomNum === 3) {
            newPowerUp = new InvertKeys(position, this.cellSize);
        }
        return newPowerUp;
    };
    return SpawnController;
}());
var SpeedUp = (function (_super) {
    __extends(SpeedUp, _super);
    function SpeedUp(position, cellSize) {
        var _this = _super.call(this, position, new p5.Vector(cellSize, cellSize)) || this;
        _this.image = images.watch;
        return _this;
    }
    SpeedUp.prototype.draw = function () {
        push();
        image(this.image, this.position.x + this.size.x * 0.1, this.position.y + this.size.y * 0.1, this.size.x * 0.8, this.size.y * 0.8);
        pop();
    };
    SpeedUp.prototype.update = function () { };
    return SpeedUp;
}(GameEntity));
var StartPage = (function (_super) {
    __extends(StartPage, _super);
    function StartPage(menu) {
        var _this = _super.call(this) || this;
        _this.options = ["New Game", "Objectives", "Controls"];
        _this.buttons = [];
        _this.menu = menu;
        _this.characters = images.characters;
        removeElements();
        _this.drawButtons();
        return _this;
    }
    StartPage.prototype.drawShapes = function () {
        fill(47, 78, 107);
        rect((windowWidth - this.rectWidth) / 2, (windowHeight - this.rectHeight) / 2, this.rectWidth, this.rectHeight);
    };
    StartPage.prototype.drawButtons = function () {
        var _this = this;
        var _loop_2 = function (i) {
            var button = createButton(this_2.options[i]);
            button.size(this_2.rectWidth * 0.2, this_2.rectHeight * 0.1);
            button.center("horizontal");
            button.position(this_2.elementX + this_2.rectWidth / 2 - (this_2.rectWidth * 0.2) / 2, this_2.elementY + this_2.rectHeight / 2 - (this_2.rectHeight * 0.6) / 2 + (i * this_2.rectHeight * 0.14));
            button.style("color: #4A7AA7");
            button.style("border-radius: 1rem");
            button.style("border-style: none");
            button.style("font-size: 22px");
            button.style("font-family: Freckle Face");
            button.style("background-color: #D2ECF3");
            button.mouseOver(function () {
                _this.buttons[i].style("color", "rgb(255, 255, 255)");
                _this.buttons[i].style("background-color", "rgb(15, 82, 186");
            });
            button.mouseOut(function () {
                _this.buttons[i].style("background: #D2ECF3");
                _this.buttons[i].style("color: #4A7AA7");
            });
            button.mousePressed(function () {
                if (i === 0) {
                    gameFrame.newGame();
                }
                else if (i === 1) {
                    redraw();
                    removeElements();
                    _this.menu.openPage(new Objectives(_this.menu));
                }
                else if (i === 2) {
                    redraw();
                    removeElements();
                    _this.menu.openPage(new Controls(_this.menu));
                }
            });
            this_2.buttons.push(button);
        };
        var this_2 = this;
        for (var i = 0; i < this.options.length; i++) {
            _loop_2(i);
        }
    };
    StartPage.prototype.drawText = function () {
        push();
        textFont(fontFreckleFace);
        fill(255);
        textSize(60);
        textAlign(CENTER, CENTER);
        text("Frostbite Frenzy", this.elementX + this.rectWidth / 2, this.elementY + this.rectHeight * 0.1);
        stroke(255, 204, 0);
        pop();
    };
    StartPage.prototype.drawImages = function () {
        var imageWidth = this.rectWidth;
        var imageHeight = (imageWidth / this.characters.width) * this.characters.height;
        image(this.characters, (this.elementX + this.rectWidth * 0.5) - (imageWidth / 2), this.elementY + this.rectHeight - imageHeight, imageWidth, imageHeight);
    };
    return StartPage;
}(MenuPage));
var Timer = (function () {
    function Timer(mapSize) {
        this.minutes = 2;
        this.seconds = 0;
        this.timerRunning = true;
        this.deltaSecond = 0;
        this.textSize = mapSize / 9 / 3;
        this.x = width / 2;
        this.y = this.textSize / 5;
        this.timerText = this.setTimerText();
    }
    Timer.prototype.update = function () {
        if (this.timerRunning) {
            this.deltaSecond += deltaTime;
            if (this.deltaSecond >= 1000) {
                this.seconds -= 1;
                if (this.seconds === -1) {
                    this.minutes -= 1;
                    this.seconds = 59;
                }
                this.timerText = this.setTimerText();
                this.deltaSecond = 0;
            }
        }
    };
    Timer.prototype.draw = function () {
        push();
        fill("white");
        textFont(fontFreckleFace);
        textSize(this.textSize);
        textAlign(CENTER, TOP);
        text(this.timerText, this.x, this.y);
        pop();
    };
    Timer.prototype.setTimerText = function () {
        var seconds;
        var timerText;
        if (this.seconds < 10) {
            seconds = "0" + this.seconds;
        }
        else {
            seconds = this.seconds.toString();
        }
        timerText = this.minutes + ":" + seconds;
        return timerText;
    };
    Timer.prototype.getTime = function () {
        return this.minutes * 60 + this.seconds;
    };
    Timer.prototype.runTimer = function () {
        this.timerRunning = true;
    };
    return Timer;
}());
var WallBlock = (function (_super) {
    __extends(WallBlock, _super);
    function WallBlock(position, cellSize) {
        var _this = _super.call(this, position, new p5.Vector(cellSize, cellSize)) || this;
        _this.image = images.wallblock;
        return _this;
    }
    WallBlock.prototype.draw = function () {
        push();
        stroke('white');
        rect(this.position.x, this.position.y, this.size.x, this.size.y);
        image(this.image, this.position.x, this.position.y, this.size.x, this.size.y);
        pop();
    };
    return WallBlock;
}(GameEntity));
//# sourceMappingURL=bundle.js.map