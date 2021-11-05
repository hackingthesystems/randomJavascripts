document.body.innerHTML += '<iframe style=\"visibility: visible;width: 25%;border: 3px solid black; z-index: 100000000000; position: fixed; bottom: 0; right: 0; height: 50%;background: #FFFFFF;\" src=\"data:text/html, <html contenteditable>" id=\"notepadbutbetter" value="ON">';


addEventListener("keypress", key, false);

var button = document.getElementById("notepadbutbetter")

function key(event) {
	if (event.keyCode === 192) {
		if (button.value == "OFF") {
			button.value = "ON";
			button.setAttribute("style", "visibility: visible;width: 25%;border: 3px solid black; z-index: 100000000000; position: fixed; bottom: 0; right: 0; height: 50%;background: #FFFFFF;")
		}
	} else if (button.value == "ON") {
		button.value = "OFF";
		button.setAttribute("style", "visibility: hidden;width: 25%;border: 3px solid black; z-index: 100000000000; position: fixed; bottom: 0; right: 0; height: 50%;background: #FFFFFF;")
	}
}
