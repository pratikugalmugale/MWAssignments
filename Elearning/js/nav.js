function nav() {
	var bar = document.getElementById('lec_bodyleft');

    if (bar.style.display = "block") {
    	bar.style.display = "none";
    } 	
}

function navBar() {
    var bar = document.getElementById('lec_bodyleft');
    if (bar.style.display = "none") {
    	bar.style.display = "block";
    } 
}

var block = function () {
 	//console.log(window.innerWidth);
 	var eventHandler = function () {
 		var bar = document.getElementById('lec_bodyleft');
 		if (window.innerWidth>984) {
 			bar.style.display = "block";
 		}
 	}
 	window.addEventListener('resize',eventHandler,false);
}


document.addEventListener('DOMContentLoaded',block,false);