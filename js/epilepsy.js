function run() {
    var num = 0;
    const color = ["red", "orange", "yellow", "green", "blue", "purple"]
    function name() {
        var css = 'body {zoom: ' + zoom[num2] + ';  animation: shake 0.5s; animation-iteration-count: infinite; } @keyframes shake { 0% { transform: translate(1px, 1px) rotate(0deg); } 10% { transform: translate(-1px, -2px) rotate(-1deg); } 20% { transform: translate(-3px, 0px) rotate(0deg); } 30% { transform: translate(3px, 2px) rotate(1deg); } 40% { transform: translate(1px, -1px) rotate(0deg); } 50% { transform: translate(-1px, 2px) rotate(-1deg); } 60% { transform: translate(-3px, 1px) rotate(0deg); } 70% { transform: translate(3px, 1px) rotate(1deg); } 80% { transform: translate(-1px, -1px) rotate(0deg); } 90% { transform: translate(1px, 2px) rotate(-1deg); } 100% { transform: translate(1px, -2px) rotate(0deg); } } body:after { content: ""; position: fixed; z-index: 100000; top: 0; left: 0; opacity: .5; pointer-events: none; background: ' + color[num] + '; width: 100%; height: 100%; }',

            head = document.getElementsByTagName('head')[0],
            style = document.createElement('style');

        style.type = 'text/css';
        if (style.styleSheet) {
            style.styleSheet.cssText = css;
        } else {
            style.appendChild(document.createTextNode(css));
        }

        head.appendChild(style);
        num++;
        if (num > color.length) {
            num = 0;
        }
    }

    var num2 = 0;
    const zoom = ["1", "1.05", "1.1", "1.15", "1.2", "1.25", "1.2", "1.15", "1.10", "1.05"];
    function zoomInOut() {
        var css = 'body {zoom: ' + zoom[num2] + ';}';
        head = document.getElementsByTagName('head')[0],
            style2 = document.createElement('style');
        style2.type = 'text/css';
        if (style2.styleSheet) {
            style2.styleSheet.cssText = css;
        } else {
            style2.appendChild(document.createTextNode(css));
        }
        num2++;
        if (num2 > zoom.length) {
            num2 = 0;
        }
    }

    setInterval(name, 333);
    setInterval(zoomInOut, 33);
}