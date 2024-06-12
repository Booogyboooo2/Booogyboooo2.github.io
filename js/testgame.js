function start() {
    var height = prompt("height: ");
    var width = prompt("width: ");
    var game = new Game()
    Replay.setStart(new Date().getTime());
    game.load(height, width);
}

function createAction(id, checked, time) {
    Replay.addAction(new Action(id, checked, time));
}

function replay() {
    Replay.setEnd(new Date().getTime());
    Replay.startReplay();
}

class Game {
    load(h, w) {
        var elem = document.getElementById("game");
        var i = 0;
        var e = 0;
        console.log("height:" + this.height)
        console.log("width:" + this.width)
        while (i < h) {
            while (e <= w) {
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
        actions = [];
        start = null;
        end = null;
        len = null;
    }

    static addAction(action) {
        actions[actions.length] = action;
    }

    static setStart(time) {
        start = time;
    }

    static setEnd(time) {
        end = time;
    }

    static startReplay() {
        len = end - start;
        while (len > (end - new Date().getTime())) {
            var i = 0;
            while (i < action.length) {
                if (action[i].time <= (end - new Date().getTime()) && action[i].ran == false) {
                    document.getElementById(action[i].id).checked = action[i].checked;
                    action[i].ran = true;
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