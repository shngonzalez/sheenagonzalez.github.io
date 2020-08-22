function startVid() {
	document.getElementById('trailer').style.display = 'block'; 
	document.getElementsByClassName('thumbnail')[0].style.display = 'none';
	document.getElementById('trailer-vid').src+='&autoplay=1'; ev.preventDefault();
}
window.onbeforeunload = function (e) {
	document.getElementById('trailer-vid').src-='&autoplay=1'; ev.preventDefault();
}