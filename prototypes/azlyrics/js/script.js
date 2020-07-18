var clickables = document.getElementsByClassName("clickable");

function showClickable() {
	document.getElementById("overlay").style.display = "block";
	var i;
	for (i=0, len=clickables.length; i<len; i++) {
		clickables[i].style.zIndex = "10";
		clickables[i].style.boxShadow = "0 0 0 4px #49DEB7";
		clickables[i].style.borderRadius = "16px";
	}
	setTimeout(unshowClickable, 3000);
}

function unshowClickable() {
	document.getElementById("overlay").style.display = "none";
	var j;
	for (j=0, len=clickables.length; j<len; j++) {
		clickables[j].style.boxShadow = "none";
		clickables[j].style.zIndex = "1";
	}
}

function redirectTo(url) {
	window.location.href = "https://sheenagonzalez.github.io/prototypes/azlyrics/" + url;
}

function trySearch(event) {
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode == 13) {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    showClickable();
  }
}

function highlightLyrics() {
	var lines = document.getElementsByClassName("line");
	var len = lines.length;
	var k = 0;
	var timer = setInterval(frame, 2000);
	function frame() {
	    if (k >= len) {
	    	lines[k-1].style.background = "none";
	      	clearInterval(timer);
	    } else {
	    	if (k>0) {
		    	lines[k-1].style.background = "none";
		    }
	    	lines[k].style.background = "linear-gradient(to left, #60CFFE 0%, #49DEB7 100%)";
	    	k++;
	    }
	  }
}