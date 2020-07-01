function move_out(){
	var pos = -450;
	var menu = document.getElementById('menu');
	/*menu.style.visibility = 'visible';*/
	var t = setInterval(move, 5);

	function move(){
		if (pos>=10){
			clearInterval(t);
		}
		else {
			pos+=10;
			menu.style.left = pos+'px';
		}
	}
}

function move_in() {
	var pos = 0;
	var menu = document.getElementById('menu');
	/*menu.style.visibility = 'hidden';*/
	var t = setInterval(move, 5);

	function move(){
		if (pos<=-450){
			clearInterval(t);
		}
		else {
			pos-=10;
			menu.style.left = pos+'px';
		}
	}
}