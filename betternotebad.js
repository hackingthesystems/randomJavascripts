
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
