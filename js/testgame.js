function start() {
    var height = prompt("height: ");
    var width = prompt("width: ")
    var game = new Game(height, width)
    Replay.setStart(new Date().getTime());
    game.load();
}

function createAction(id, checked, time) {
    Replay.addAction(new Action(id, checked, time));
}

function replay() {
    Replay.setEnd(new Date().getTime());
    Replay.startReplay();
}

class Game {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    load() {
        var elem = document.getElementById("game");
        var i = 0;
        var e = 0;
        while (i < this.height) {
            while (e < this.width) {
                elem.innerHTML += "<input id='" + i + "_" + e + "' type='checkbox'>" ;
                document.getElementById(i + "_" + e).addEventListener("click", createAction(i + "_" + e, document.getElementById(i + "_" + e).checked, new Date().getTime()));
                e++;
            }
            elem.innerHTML += "<br>";
            e = 0;
            i++;
        }
        document.getElementById("buttons").innerHTML = "<button onclick='replay()'>Replay</button>";
    }
}

class Replay {
    constructor() {
        this.actions = [""];
        this.start = null;
        this.end = null;
        this.len = null;
    }

    static addAction(action) {
        this.actions[this.actions.length - 1] = action;
    }

    static setStart(time) {
        this.start = time;
    }

    static setEnd(time) {
        this.end = time;
    }

    static startReplay() {
        this.len = this.end - this.start;
        while (this.len > (this.end - new Date().getTime())) {
            var i = 0;
            while (i < this.action.length) {
                if (this.action[i].time <= (this.end - new Date().getTime()) && this.action[i].ran == false) {
                    document.getElementById(this.action[i].id).checked = this.action[i].checked;
                    this.action[i].ran = true;
                }
                i++;
            }
            var i = 0;
        }
    }
}

class Action {
    constructor(id, checked, time) {
        this.id = id;
        this.checked = checked;
        this.time = time - Replay.start;
        this.ran = false;
    }
}