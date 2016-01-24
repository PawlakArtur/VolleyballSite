function toggle(arg){
	var win = document.getElementsByClassName(arg);
	for(var i = 0; i < win.length; i++){
		
		if(win[i].style.display != "inline-block"){
		 	win[i].style.display = "inline-block";
		}else if(win[i].style.display != "none"){
		 	win[i].style.display = "none";
		}
	}
}

function enter(arg){
	var win = document.getElementsByClassName(arg);
	for(var i = 0; i < win.length; i++){
		win[i].style.display = "inline-block"
	}
}

function leave(arg){
	var win = document.getElementsByClassName(arg);
	for(var i = 0; i < win.length; i++){
		win[i].style.display = "none"
	}
}
