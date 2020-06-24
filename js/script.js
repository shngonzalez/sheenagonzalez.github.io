var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
	var currentScrollPos = window.pageYOffset;
	// Hide navigation bar when scrolling down
	if (window.scrollY == 0) {
		document.getElementById("navbar").style.top = "3em";
	}
	if (prevScrollpos >= currentScrollPos) {
		document.getElementById("navbar").style.top = "0";
		document.getElementById("menu").style.top = "3em";
	} else {
	// Show navigation bar when scrolling up
		document.getElementById("navbar").style.top = "-6em";
		document.getElementById("menu").style.top = "-6em";
	}
	prevScrollpos = currentScrollPos;
}