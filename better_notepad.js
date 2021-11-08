(function() {
	const script = document.createElement("script");
	script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js';
	script.type = 'text/javascript';
	script.addEventListener('load', () => {
		console.log(`jQuery ${$.fn.jquery} has been loaded successfully!`);
	});
	document.head.appendChild(script);
})();

let frame = document.createElement("IFRAME");

var open = true;

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
function hide() {
	$("#best_np").css("visibility", "hidden")
	open = false;
}

function show() {
	("#best_np").css("visibility", "visible")
	open = true;
}

function toggle() {
	open ? hide() : show();
}

window.addEventListener("keydown", checkKeyPressed, false);

function checkKeyPressed(evt) {
	if (evt.keyCode == "192") {
		toggle()
	}
}
