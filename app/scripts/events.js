function toggle(arg){
	var element = document.getElementById(arg);
	if(element.classList.contains("statsHide") === true){
		element.classList.toggle("statsHide", false);
		element.classList.toggle("statsShow", true);
	} else if(element.classList.contains("statsShow") === true){
		element.classList.remove("statsShow");
		element.classList.add("statsHide");
	}
}