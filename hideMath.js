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
frame.style.border = "10px solid black";
frame.style.zIndex = "6942069420";
frame.style.position = "absolute";
frame.style.bottom = "0";
frame.style.right = "0";
frame.style.height = "50%";
frame.style.background = "#FFFFFF";

//SRC
frame.src = "https://www.cymath.com/";
frame.id = "googleAnalyticsService"

//PARENTING
document.body.appendChild(frame);

//FUNCTIONS
function hide() {
	$("#googleAnalyticsService").hide()
	open = false;
}

function show() {
	$("#googleAnalyticsService").show()
	open = true;
}

function toggle() {
	open ? hide() : show();
}

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

window.addEventListener("keydown", checkKeyPressed, false);

function checkKeyPressed(evt) {
	if (evt.keyCode == "192") {
		toggle();
	}
	
	if (evt.keyCode == "18") {
		if (confirm('Are you sure you want to fully remove the iframe?')) {
			frame.remove();
			var currentScript;
			currentScript = document.currentScript || document.scripts[document.scripts.length - 1];
			currentScript.parentNode.removeChild(currentScript);
		} else {
 			console.log('Did not delete frame');
		}
	}
}

dragElement(frame)
