var i = 0;

function addText() {
    var text = document.getElementById("text").value;
    var col = document.getElementById("text_color").value;
    var size = document.getElementById("text_size").value;
    
    document.getElementById("preview").innerHTML += "<a id='" + i + "' style='color: " + col + "; font-size: " + size + "px'>" + text +  "<br></a>";
    document.getElementById("text_elems").innerHTML += "<div id='" + i + "_'><a>"+ text +"</a><button onclick='remove(" + i + ")'>Remove</button></div>";
    i++;
}

function remove(index) {
    document.getElementById(index).remove();
    document.getElementById(index + "_").remove();
}

function gen() {
    var code = document.getElementById("preview_wrapper").innerHTML;
    alert(code);
}