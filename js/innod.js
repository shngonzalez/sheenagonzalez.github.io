function haas() {
	document.getElementById("magic-club").style.display = "none";
	document.getElementById("haas-consulting-club").style.display = "initial";
	changeButtonColor("haas");
}

function magic() {
	document.getElementById("haas-consulting-club").style.display = "none";
	document.getElementById("magic-club").style.display = "initial";
	changeButtonColor("magic");
}

function changeButtonColor(section) {
	if (section == "haas") {
		document.getElementById("haas-button").style.background = "#1B93C0";
		document.getElementById("magic-button").style.background = "#444444";
	}
	if (section == "magic") {
		document.getElementById("magic-button").style.background = "#1B93C0";
		document.getElementById("haas-button").style.background = "#444444";
	}
}