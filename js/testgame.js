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
        console.log("height: " + h);
        console.log("width: " + w);
        while (i < h) {
            while (e < w) {
                elem.innerHTML += "<input id='" + i + "_" + e + "' type='checkbox'>" ;
                document.getElementById(i + "_" + e).addEventListener("click", createAction(i + "_" + e, document.getElementById(i + "_" + e).checked, new Date().getTime()));
                e++;
                console.log("w+")
            }
            elem.innerHTML += "<br>";
            e = 0;
            i++;
            console.log("h+")
        }
        document.getElementById("buttons").innerHTML = "<button onclick='replay()'>Replay</button>";
    }
}

class Replay {

    actions = [""];
    start = null;
    end = null;
    len = null;


    static addAction(action) {
        Replay.actions[Replay.actions.length] = action;
    }

    static setStart(time) {
        Replay.start = time;
    }

    static setEnd(time) {
        Replay.end = time;
    }

    static startReplay() {
        Replay.len = Replay.end - start;
        while (len > (Replay.end - new Date().getTime())) {
            var i = 1;
            while (i < Replay.actions.length) {
                if (Replay.actions[i].time <= (Replay.end - new Date().getTime()) && Replay.actions[i].ran == false) {
                    document.getElementById(Replay.actions[i].id).checked = Replay.actions[i].checked;
                    Replay.actions[i].ran = true;
                }
                i++;
            }
            var i = 1;
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