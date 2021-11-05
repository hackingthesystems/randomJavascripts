let frame = document.createElement("IFRAME");

frame.style.visibility = "visible";
frame.style.width = "25%";
frame.style.border = "3px solid black";
frame.style.z-index = "6942069420";
frame.style.position = "fixed";
frame.style.bottom = "0";
frame.style.right = "0";
frame.style.height = "50%";
frame.style.background = "#FFFFFF";

frame.id = "notepadbutbetter";
frame.value = "ON";
frame.src = "data:text/html, <html contenteditable>";

document.body.appendChild(frame);


addEventListener("keypress", key, false);

var button = document.getElementById("notepadbutbetter");

function key(event) {
	if (event.keyCode === 192) {
		if (button.value == "OFF") {
			button.value = "ON";
			button.setAttribute("style", "visibility: visible;width: 25%;border: 3px solid black; z-index: 100000000000; position: fixed; bottom: 0; right: 0; height: 50%;background: #FFFFFF;");
		}
	} else if (button.value == "ON") {
		button.value = "OFF";
		button.setAttribute("style", "visibility: hidden;width: 25%;border: 3px solid black; z-index: 100000000000; position: fixed; bottom: 0; right: 0; height: 50%;background: #FFFFFF;");
	}
}
