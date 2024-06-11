class GooseV2 {
    constructor(name) {
        this.mods = [];
        this.exists = false;
        this.rawName = name;
        this.validImgName = name.replace(/['"]/g, "");
        this.name = name.replace(/[^A-Z0-9]/ig, "");
        this.__wait = function (delay) {
            var start = new Date();
            var end = new Date(start.getTime() + delay);
            while (end.getTime() != start.getTime()) {
                start = new Date();
            }
        }
        this.gooseImg = "data:image/webp;base64,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"
        this.scalex = 1;
        this.scaley = 1;
        this.rotation = 0;
        this.rotateStr = "rotate(0deg)";
        this.scaleStr = "scale(1 ,1)";
        this.__faceX = function (arg) {
            this.scalex = arg;
            this.scaleStr = "scale(" + arg + "," + this.scaley + ")";
            document.getElementById(this.name).style.transform = this.scaleStr + " " + this.rotateStr;
        }
        this.__faceY = function (arg) {
            this.scaley = arg;
            this.scaleStr = "scale(" + this.scalex + "," + arg + ")";
            document.getElementById(this.name).style.transform = this.scaleStr + " " + this.rotateStr;
        }
        this.__face = function (arg1, arg2) {
            this.scalex = arg1;
            this.scalex = arg2;
            this.scaleStr = "scale(" + arg1 + "," + arg2 + ")";
            document.getElementById(this.name).style.transform = this.scaleStr + " " + this.rotateStr;
        }
        this.__rotate = function (arg) {
            this.rotation = arg;
            this.rotateStr = "rotate(" + arg + "deg)";
            document.getElementById(this.name).style.transform = this.scaleStr + " " + this.rotateStr;
        }
        this.targetX = 0;
        this.targetY = 0;
        this.isFacingRight = true;
        this.isFacingDown = true;
        this.__x = function () {
            return document.getElementById(this.name).style.left.replace(/\D/g,'');
        }
        this.__y = function () {
            return document.getElementById(this.name).style.top.replace(/\D/g,'');
        }
        this.mouseX = 0;
        this.mouseY = 0;
        this.isChasing = false;
    }
    
    getX() {
        return this.__x();
    }
    
    getY(id) {
        return this.__y();
    }
    
    getPos() {
        return this.__x() + "," + this.__y();
    }
    
    goToXByOne(id) {
        var currentX = parseInt(getComputedStyle(document.getElementById(id)).left);
        var diffX = Math.round(currentX - this.targetX);
        var negativeX = diffX < 0;
        if ((currentX > this.targetX) && !negativeX) {
            document.getElementById(id).style.left = (currentX - 1) + "px";
            currentX -= 1;
        } else if ((currentX < this.targetX) && negativeX) {
            document.getElementById(id).style.left = (currentX + 1) + "px";
            currentX += 1;
        }
    }
    
    goToYByOne(id) {
        var currentY = parseInt(getComputedStyle(document.getElementById(id)).top);
        var diffY = Math.round(currentY - this.targetY);
        var negativeY = diffY < 0;
        if ((currentY > this.targetY) && !negativeY) {
            document.getElementById(id).style.top = (currentY - 1) + "px";
            currentY -= 1;
        } else if ((currentY < this.targetY) && negativeY) {
            document.getElementById(id).style.top = (currentY + 1) + "px";
            currentY += 1;
        }
    }
    
    hideGoose() {
        document.getElementById(this.name).style.visibility = "hidden";
    }
    
    showGoose() {
        document.getElementById(this.name).style.visibility = "visible";
    }
    
    legacyFace(direction) {
        if (direction == "left") {
            this.__faceX(-1);
            this.isFacingRight = false;
        } else if (direction == "right") {
            this.__faceX(1);
            this.isFacingRight = true;
        }
    }
    
    face(direction) {
        if (direction == "left") {
            this.__faceX(-1);
            this.__rotate(-10);
            this.isFacingRight = false;
        } else if (direction == "right") {
            this.__faceX(1);
            this.__rotate(-10);
            this.isFacingRight = true;
        } else if (direction == "up") {
            this.isFacingDown = false;
        } else if (direction == "down") {
            this.isFacingDown = true;
        } else if (direction == "rightdown") {
            this.__faceX(1);
            this.__rotate(0);
            this.isFacingRight = true;
            this.isFacingDown = true;
        } else if (direction == "leftdown") {
            this.__faceX(-1);
            this.__rotate(0);
            this.isFacingRight = false;
            this.isFacingDown = true;
        } else if (direction == "rightup") {
            this.__faceX(1);
            this.__rotate(-30);
            this.isFacingRight = true;
            this.isFacingDown = false;
        } else if (direction == "leftup") {
            this.__faceX(-1);
            this.__rotate(-30);
            this.isFacingRight = false;
            this.isFacingDown = true;
        } else if (direction == "none") {
            this.__rotate(0);
        }
    }
    
    spawnGoose() {
        if (this.exists) {
            return;
        }
        document.getElementsByTagName("body")[0].innerHTML += "<img title='" + this.validImgName + "' style='z-index: 2147483647; position: absolute; top: 0px; left: 0px;' width='130' height='80' id=" + this.name + " src=" + this.gooseImg +" alt=" + this.validImgName + ">"
        console.log("Spawned new goose (" + this.rawName + ")");
        this.exists = true;
    }
    
    forceSpawnGoose() {
        console.log("Force spawned goose - errors expected...")
        document.getElementsByTagName("body")[0].innerHTML += "<img title='" + this.validImgName + "' style='z-index: 2147483647; position: absolute; top: 0px; left: 0px;' width='130' height='80' id=" + this.name + " src=" + this.gooseImg +" alt=" + this.validImgName + ">"
        console.log("Spawned new goose (" + this.name + ")");
        this.exists = true;
    }
    
    gooseImg() {
        return this.gooseImg;
    }
    
    hideMouse() {
        document.body.style.cursor = 'none';
    }
    
    showMouse() {
        document.body.style.cursor = 'auto';
    }
    
    evictGoose() {
        if (!this.exists) {
            return;
        }
        document.getElementById(this.name).remove();
        console.log("Evicted goose (" + this.name + ")")
        this.exists = false;
        document.removeEventListener('keypress', this.evictFunction)
    }
    
    forceEvictGoose() {
        console.log("Force evicted goose - errors expected...")
        document.getElementById(this.name).remove();
        console.log("Evicted goose (" + this.name + ")")
        this.exists = false;
        document.removeEventListener('keypress', this.evictFunction)
    }
    
    exists() {
        return this.exists;
    }
    
    telportTo(x, y) {
        document.getElementById(this.name).style.top = y + "px";
        document.getElementById(this.name).style.left = x + "px";
    }
    
    flipX() {
        if (this.isFacingRight) {
            this.__faceX(-1);
            this.isFacingRight = false;
        } else if (!this.isFacingRight) {
            this.__faceX(1);
            this.isFacingRight = true;
        }
    }
    
    flipY() {
        if (this.isFacingDown) {
            this.__faceX(-1);
            this.isFacingDown = false;
        } else if (!this.isFacingDown) {
            this.__faceX(1);
            this.isFacingDown = true;
        }
    }
    
    directionMovingX() {
        if (this.targetX > this.__x()) {
            return "right";
        } else if (this.targetX < this.__x()) {
            return "left";
        } else if (this.targetX == this.__x()) {
            return "none";
        }
    }
    
    directionMovingY() {
        if (this.targetY < this.__y()) {
            return "up";
        } else if (this.targetY > this.__y()) {
            return "down";
        } else if (this.targetY == this.__y()) {
            return "none";
        }
    }
    
    chaseMouse() {
        if (this.isChasing) {
            this.targetX = this.mouseX;
            this.targetY = this.mouseY;
        }
    }
    
    shouldChaseMouse() {
        var randNum = Math.random() * 2000;
        if (randNum >= 1001) {
            this.isChasing = true;
        } else {
            this.isChasing = false;
        }
    }
    
    main() {
        
    }
}

class GooseController {
    constructor(goose) {
        this.goose = goose;
        this.__isMoving = function () {
            if ((this.goose.targetX != this.goose.getX()) || (this.goose.targetY != this.goose.getY())) {
                return true;
            } else {
                return false;
            }  
        }
        this.__moveRand = function () {
            this.goose.targetX = Math.floor(Math.random() * window.screen.width);
            this.goose.targetY = Math.floor(Math.random() * window.screen.height);
        }
        this.__updateMousePos = function (e) {
            this.goose.mouseX = e.pageX;
            this.goose.mouseY = e.pageY;
        }
        this.mouseImg = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALcAAAETCAYAAAB0lJfTAAAAAXNSR0IArs4c6QAAIABJREFUeF7tnQe4FdX19ufaW+xgRVFRFCyIiKh/a+xBRTS2iCX2XrFgL7GLJSaCBUuwxNi7MWrsjRglVlQEVERQEHuf7/lt5z3fusMpc87MqXfP89zn3nvOzJ69135nzbtX222BP7wEWlQCbS06Lj8sL4HAg9uDoGUl4MHdslPrB+bB7THQshLw4G7ZqfUD8+D2GGhZCXhwt+zU+oF5cHsMtKwEPLhbdmr9wDy4PQZaVgIe3C07tX5gHtweAy0rAQ/ulp1aPzAPbo+BlpWAB3fLTq0fmAe3x0DLSsCDu2Wn1g/Mg9tjoGUl4MHdslPrB+bB7THQshLw4G7ZqfUDywTcH3zwQdilS5dM2vJT4iWQlQQyAeSECRPCpZZaKpO2shqYb8dLIBUgx48fH4ZhGHzzzTfBTz/9FKy66qrt2vv555/DmWeeOdU9/BR5CVQqgVTAA9y//PJL8O2333pwVzoD/rqqSSAVuMeNGxf+/PPPOXD36tWrXXu//PJLONNMM6W6R9VG7htueQlUDDwWkVCRH3/80YEbkPfu3btscENd2traAv8QtDzWaj7AisHNIhJwf//998F3333nwN2nT5+y2/Pgrvmcd5gblg1GSQa+DbgBtsDdt2/fstvz1KXDYK3mAy0bjOqh+DaWEsDNwnKttdaquL2aj9zfsOUlUDEYATea24K7X79+FbfX8pL2A6y5BCoG49ixYx24WUyiuT///PNg8803n6E9ODV8fLbZZmv78ssvw1lmmSUYM2ZMsMoqq+QWkd999104xxxzVNyXmkvN37ApJFAxoJKCGyl8/fXX4eyzzx7MMsssbZMnTw47d+7sAL7kkksGOIHmnnvuti+++CKcd955XX8+//zzcP7556+4b00hed/JqkugYgCVA26NApB/+OGHQd++fYPp06cHd9xxRzBw4MC2b775Jpxrrrna0OAzzTST0/JfffUVn3kTYdUh0Lo3qAm4f/rpJ+fJBLRRHEqAJseMePPNNwc77bSTA/G3334bzjnnnLk+WW3eulPgR1YtCVQd3HBugD3rrLM66jHbbLMFc8wxR248cPDbb7892HLLLR1FmX322dt+/PHHEODPM888FfevWgLz7TaPBCoGTzm05Pvvv3eLT7j122+/HXbv3t1JaP7553cLUY7rr78+2GOPPdqmT58ezjPPPAEBV9AYrmkecfqeNpIEKgZOOeCeOnVquOCCC7p7ffTRR2HPnj1zoOYzePass84anHvuucGRRx7p6AlaHA0fd8vzJuAaH23YSDBqzL5UHdwy84l3Yxacb775gh9++AEO7mJTZp55ZhdVuPDCCwennXZacMghh+TtF95MrueA5jSmSH2vGkUCFQNEThzZub/++utgww03LNgeGlex3wsssICLRbEHVOSrr75yH5133nnBcccd59qyFhT+h4/zMKDReWAwLzaKMH0/GksCFQOjXHADygiswfLLLx9MmjQpJwnAysHCkwcAoO+7777B+eef7zQ0du95553XeUO1yJw4cWK4+OKLV9z/xpoG35tqSKBicJQL7h9++MFpXAC64YYbBi+//LIDMoe0NqGv2LZ5C/zmN78JhgwZEhx66KEO0CxKsax4rl0NGLRmmzUBN/SBRSNUAmvIjjvuGPzzn//MgduKFgADemgLYAfcl112meunrCfeitKaYMx6VFUHNxobYIsbYznZfffdg/vuu4/PHIgBc+SZdHEqHHzHIhMNvs8++7iF5nzzzZeLT2ExyuE1edaQaJ32qg7uOJ0A3HgkH3nkEWf+A8RYTABy/ADYX375pfv48MMPD8466yzA3qYYcK/BWweI1RhJ1cEtSkLnoSUsDvv37x8888wzbjxobOiHBTfc3FpTWEx+8cUXwZ577hlcfvnljoNDb9DkcaH45IdqwKQ526w6uCMrSCi7NovFTTbZJHjxxRcdHRGQiTXRgpNr0OpYT9DsuOJ5APjZa6+9gosuugjvZi7gyoqeh4nzPF1pTkBm2evU4AasSjcjhHXppZfOtSmnC+Y82bnRwFtttVXw/PPPO60NgEsdctNDU7CFE1V43XXXBSuttJKLJCwUCw7f5+HwycelJNya31cd3JF2duBGmxI8te222waPP/54IonKBg5NmXvuuR0/5y2w3XbbBeecc06w4oorOnc9oO/UqVM7q0qiG/iTWlYCVQe3tKbAzQITU+Ddd99dllCxf2Mj5+BvPKNQmbfeeivo2rVrbhyWi/uQ2bJE3HIn1xzcSHDQoEHhjTfemIiSSOLEo5DgwGFd9Ztvvnlw9dVXB4svvrjj2VAhtDuhs35x2XJ4LWtANQO3jQM54IAD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;";
    }
    
    start() {
        document.getElementsByTagName("body")[0].innerHTML += "<img src='" + this.mouseImg + "' id='" + this.goose.name + "_mouse' style='display: none' width='20' height='10'></img>";
        console.log("Controller Initialized (" + this.goose.name + ")");
    }
    
    getMouseX() {
        return this.goose.mouseX;
    }
    
    getMouseY() {
        return this.goose.mouseY;
    }
    
    moveRand() {
        this.goose.targetX = Math.floor(Math.random() * window.screen.width);
        this.goose.targetY = Math.floor(Math.random() * window.screen.height);
    }
    
    moveRandX() {
        this.goose.targetX = Math.floor(Math.random() * window.screen.width);
    }
    
    moveRandY() {
        this.goose.targetY = Math.floor(Math.random() * window.screen.height);
    }
    
    goTo(x, y) {
        this.goose.targetX = x;
        this.goose.targetY = y;
    }
    
    goToX(x) {
        this.goose.targetX = x;
    }
    
    goToY(y) {
        this.goose.targetY = y;
    }
    
    isMovingX() {
        if (this.goose.targetX != this.goose.getX()) {
            return true;
        } else {
            return false;
        }
    }
    
    isMovingY() {
        if (this.goose.targetY != this.goose.getY()) {
            return true;
        } else {
            return false;
        }
    }
    
    isMoving() {
        if ((this.goose.targetX != this.goose.getX()) || (this.goose.targetY != this.goose.getY())) {
            return true;
        } else {
            return false;
        }  
    }
    
    directionMoving() {
        var directionX = this.goose.directionMovingX();
        var directionY = this.goose.directionMovingY();
        if (directionX == "none" && directionY == "none") {
            return "none";
        }
        if (directionX == "none") {
            directionX = "";
        }
        if (directionY == "none") {
            directionY = "";
        }
        return (directionX + "" + directionY);
    }
    
    shouldMove() {
        if (this.__isMoving()) {
            return;
        }
        var randNum = Math.random() * 2000;
        if (randNum >= 1985) {
            this.__moveRand();
        }
    }
    
    stealMouse() {
        if (!this.goose.isChasing) {
            console.log("Returned...");
            this.goose.showMouse();
            document.getElementById(this.goose.name + "_mouse").style.display = "none";
            return;
        }
        var randNum = Math.random() * 2000;
        if (randNum >= 1800) {
            if (this.goose.getX() == this.goose.getMouseX() && this.goose.getY() == this.goose.getMouseY()) {
                this.goose.hideMouse();
                document.getElementById(this.goose.name + "_mouse").style.display = "block";
            }
        }
    }
    
    loadMod(mod) {
        var I1 = 0;
        var I2 = 0;

        const mod1 = new mod();
        this.goose.mods[this.goose.mods.length] = mod1;
        mod1.onEnable();
            if (mod1.getShouldInject()) {
                while (I1 < mod1.methods.length) {
                const originalMethod = Goose.prototype[mod1.methods[I1]];
                Goose.prototype[mod1.methods[I1]] = function () {
                    originalMethod.call(this);
                    eval(mod1.code[I1]);
                }
                I1++;
            }
        }
        if (mod1.getShouldOverride()) {
            while (I2 < mod1.methods2.length) {
                I2++;
                Goose.prototype[mod1.methods2[I2]] = function () {
                    eval(mod1.code2[I2]);
                }
            }
        }
        const originalMain = Goose.prototype.main;
        Goose.prototype.main = function () {
             originalMain.call(this); 
             mod1.onTick();
        }
    }
}

//Only one override and inject per mod (TODO: fix this)
class GooseMod2 {
    constructor() {
        this.methods = ["none"];
        this.code = ["none"];
        this.shouldInject = false;
        this.methods2 = ["none"];
        this.code2 = ["none"];
        this.shouldOverride = false;
    }
    
    onEnable() {
        
    }
    
    onTick() {
        
    }
    
    inject(method, code) {
        this.methods[this.methods.length] = method;
        this.code[this.code.length] = code;
        this.shouldInject = true;
    }
    
    getShouldInject() {
        return this.shouldInject;
    }
    
    override(method, code) {
        this.methods2[this.methods2.length] = method;
        this.code2[this.code.length] = code;
        this.shouldOverride = true;
    }
    
    getShouldOverride() {
        return this.shouldOverride;
    }
    
}

class TestMod extends GooseMod2 {
    onEnable() {
        console.log("Enabled...1");
        super.inject("flipY", 'console.log("Inject1_1")');
        super.inject("flipY", 'console.log("Inject1_2")');
        super.override("flipX", 'console.log("Override1_1")');
        super.override("telportTo", 'console.log("Override1_2")');
    }

    onTick() {
        console.log("TestMod");
    }
}

class ModTest extends GooseMod2 {
    onEnable() {
        console.log("Enabled...2");
        super.inject("flipY", 'console.log("Inject2_1")');
        super.inject("flipY", 'console.log("Inject2_2")');
        super.override("flipX", 'console.log("Override2_1")');
        super.override("exists", 'console.log("Override2_2")');
    }

    onTick() {
        console.log("ModTest");
    }
}