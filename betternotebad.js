(function () {
    const script = document.createElement("script");
    script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js';
    script.type = 'text/javascript';
    script.addEventListener('load', () => {
        console.log(`jQuery ${$.fn.jquery} has been loaded successfully!`);
    });
    document.head.appendChild(script);
})();

let frame = document.createElement("IFRAME");

frame.style.visibility = "visible";
frame.style.width = "25%";
frame.style.border = "3px solid black";
frame.style.zIndex = "6942069420";
frame.style.position = "fixed";
frame.style.bottom = "0";
frame.style.right = "0";
frame.style.height = "50%";
frame.style.background = "#FFFFFF";

frame.id = "ON";
frame.src = "data:text/html, <html contenteditable>";

document.body.appendChild(frame);

$(document).keypress(function(event){
    var keycode = (event.keyCode ? event.keyCode : event.which);
    if(keycode == '11'){
        if (frame.id == "OFF") {
            frame.id = "ON";
            frame.setAttribute("style", "visibility: visible; width: 25%; border: 3px solid black; zIndex: 6942069420; position: fixed; bottom: 0; right: 0; height: 50%; background: #FFFFFF");
        } else if (frame.id == "ON") {
            frame.id = "OFF";
            frame.setAttribute("style", "visibility: hidden; width: 25%; border: 3px solid black; zIndex: 6942069420; position: fixed; bottom: 0; right: 0; height: 50%; background: #FFFFFF");
        }
    }
});
