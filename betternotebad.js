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


//CSS
frame.style.visibility = "visible";
frame.style.width = "25%";
frame.style.border = "3px solid black";
frame.style.zIndex = "6942069420";
frame.style.position = "fixed";
frame.style.bottom = "0";
frame.style.right = "0";
frame.style.height = "50%";
frame.style.background = "#FFFFFF";

//SRC
frame.src = "data:text/html, <html contenteditable>";
frame.id = "best_np"

//PARENTING
document.body.appendChild(frame);

//FUNCTIONS
function hide(elem){
    elem.setAttribute("style", "visibility: hidden; width: 25%; border: 3px solid black; zIndex: 6942069420; position: fixed; bottom: 0; right: 0; height: 50%; background: #FFFFFF");
}

function show(elem){
    elem.setAttribute("style", "visibility: visible; width: 25%; border: 3px solid black; zIndex: 6942069420; position: fixed; bottom: 0; right: 0; height: 50%; background: #FFFFFF");
}

function toggle() {
    let elem = $("#best_np")
    tgl ? hide(elem) : show(elem);
}

$(document).keypress(function(e) {
    if (e.which == 192) {
        toggle();
    }
});
