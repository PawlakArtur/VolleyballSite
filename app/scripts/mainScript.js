var xmlhttp = new XMLHttpRequest();
var url = "data/teams.json";

xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        var myArr = JSON.parse(xmlhttp.responseText);
        addCountry(myArr);
        addEventsDetails(myArr);
        //addEventsStats(myArr);
    }
};
xmlhttp.open("GET", url, true);
xmlhttp.send();

function addWindow(parent, childrens){
    var windowDiv = document.createElement("div");
    var triangleBorderDiv = document.createElement("div");
    var triangleDiv = document.createElement("div");
    windowDiv.setAttribute("class", "window");
    triangleBorderDiv.setAttribute("class", "triangleBorder");
    triangleDiv.setAttribute("class", "triangle");
                    
    parent.appendChild(windowDiv);

    windowDiv.appendChild(triangleBorderDiv);
    triangleBorderDiv.appendChild(triangleDiv);

    [].forEach.call(childrens, function(myArgs){
        windowDiv.appendChild(myArgs);
    });
}

function addCountry(arr){
	[].forEach.call(arr.team, function(myArr){
		//adding teams names
		var teamTag = document.getElementById("teams");
		var teamLi = document.createElement("li");
		var teamName = document.createElement("a");
		var teamLink = document.createElement("a");
		teamLi.setAttribute("class", "team");
		teamLi.setAttribute("id", "team" + myArr.short);
		teamName.innerHTML = myArr.name;
		teamLink.href = "team.html?" + myArr.name;
		teamTag.appendChild(teamLi);
		teamLi.appendChild(teamName);
		teamLi.appendChild(teamLink);
		//adding teams details
		var teamStats = document.createElement("li");
		teamStats.setAttribute("id", "stats" + myArr.short);
		teamStats.setAttribute("class", "stats statsShow");
		teamTag.appendChild(teamStats);
		//adding deatils = <span class="tournamentTitle">Turnieje:</span>
		var teamTournament = document.createElement("span");
		teamTournament.setAttribute("class", "tournamentTitleFirst");
		teamTournament.innerHTML = "Turnieje:"
		//adding details = tournaments
		var childrens = [];
		childrens.push(teamTournament);
		//////////---------------------//////////////////////

		var count = 0;
		var years = 0;
		var j = 0;
		for(var i = 0; i < myArr.tournaments.length; i++){
			var tour = document.createElement("div");
			var tourName = document.createElement("div");
			tour.setAttribute("class", "tournaments");
			tourName.setAttribute("class", "tournament");			
			tourName.innerHTML = myArr.tournaments[i].name + ":";
			tour.appendChild(tourName);
			var data = myArr.tournaments[i];
			for (var trophy in data) {
				if(trophy === "gold" || trophy === "silver" || trophy === "bronze"){
					var tourData = data[trophy];
		    		var tourTrophy = document.createElement("span");
					var tourTrophyIcon = document.createElement("i");
					var tourTrophyYears = document.createElement("div");
					tourTrophy.setAttribute("class", "tournamentTitle");
					tourTrophy.setAttribute("id", "tournamentTitle" + trophy + myArr.tournaments[i].short + myArr.short);
					tourTrophyIcon.setAttribute("class", "fa fa-trophy " + trophy);
					tourTrophyYears.setAttribute("id", trophy + myArr.tournaments[i].short + myArr.short);
					tourTrophyYears.setAttribute("class", "tournamentWindow detailShow statsHide");
					tourTrophyYears.classList.toggle("detailShow", false);
					tourTrophy.appendChild(tourTrophyIcon);
					count = tourData.length;
					years = "";
					if(count > 0){
						count = tourData.length;
						for(j = 0; j < tourData.length; j++){
							years = years + tourData[j] + " ";
						}
					}else{
						count = "-";
						years = "-"
					}
				
					tourTrophy.innerHTML = tourTrophy.innerHTML + ": " + count;
					tourTrophyYears.innerHTML = years;
					tourTrophy.appendChild(tourTrophyYears);
					tour.appendChild(tourTrophy);
				}
			}
			//adding childrens
	      	childrens.push(tour);
		}



		//////////---------------------//////////////////////
		/*var count = 0;
		var years = "";
		var j = 0;
		for(var i = 0; i < myArr.tournaments.length; i++){
			var tour = document.createElement("div");
			var tourName = document.createElement("div");
			tour.setAttribute("class", "tournaments");
			tourName.setAttribute("class", "tournament");
			tourName.innerHTML = myArr.tournaments[i].name + ":";
			//adding gold
			var tourGold = document.createElement("span");
			var tourGoldIcon = document.createElement("i");
			var tourGoldYears = document.createElement("div");
			tourGold.setAttribute("class", "tournamentTitle");
			tourGoldIcon.setAttribute("class", "fa fa-trophy gold");
			tourGoldYears.setAttribute("id", "gold" + myArr.tournaments[i].short + myArr.short);
			tourGoldYears.setAttribute("class", "tournamentWindow statsHide");
			tourGold.appendChild(tourGoldIcon);
			count = myArr.tournaments[i].gold.length;
			years = "";
			if(count > 0){
				count = myArr.tournaments[i].gold.length;
				for(j = 0; j < myArr.tournaments[i].gold.length; j++){
					years = years + myArr.tournaments[i].gold[j] + " ";
				}
			}else{
				count = "-";
				years = "-"
			}
			tourGold.innerHTML = tourGold.innerHTML + ": " + count;
			tourGoldYears.innerHTML = years;
			tourGold.appendChild(tourGoldYears);
			tour.appendChild(tourName);
			tour.appendChild(tourGold);
			//adding silver
			var tourSilver = document.createElement("span");
			var tourSilverIcon = document.createElement("i");
			var tourSilverYears = document.createElement("div");
			tourSilver.setAttribute("class", "tournamentTitle");
			tourSilverIcon.setAttribute("class", "fa fa-trophy silver");
			tourSilverYears.setAttribute("id", "silver" + myArr.tournaments[i].short + myArr.short);
			tourSilverYears.setAttribute("class", "tournamentWindow statsHide");
			tourSilver.appendChild(tourSilverIcon);
			count = myArr.tournaments[i].silver.length;
			years = "";
			if(count > 0){
				count = myArr.tournaments[i].silver.length;
				for(j = 0; j < myArr.tournaments[i].silver.length; j++){
					years = years + myArr.tournaments[i].silver[j] + " ";
				}
			}else{
				count = "-";
				years = "-"
			}
			tourSilver.innerHTML = tourSilver.innerHTML + ": " + count;
			tourSilverYears.innerHTML = years;
			tourSilver.appendChild(tourSilverYears);
			tour.appendChild(tourSilver);
			//adding bronze
			var tourBronze = document.createElement("span");
			var tourBronzeIcon = document.createElement("i");
			var tourBronzeYears = document.createElement("div");
			tourBronze.setAttribute("class", "tournamentTitle");
			tourBronzeIcon.setAttribute("class", "fa fa-trophy bronze");
			tourBronzeYears.setAttribute("id", "bronze" + myArr.tournaments[i].short + myArr.short);
			tourBronzeYears.setAttribute("class", "tournamentWindow statsHide");
			tourBronze.appendChild(tourBronzeIcon);
			count = myArr.tournaments[i].bronze.length;
			years = 0;
			if(count > 0){
				count = myArr.tournaments[i].bronze.length;
				for(j = 0; j < myArr.tournaments[i].bronze.length; j++){
					years = years + myArr.tournaments[i].bronze[j] + " ";
				}
			}else{
				count = "-";
				years = "-";
			}
			tourBronze.innerHTML = tourBronze.innerHTML + ": " + count;
			tourBronzeYears.innerHTML = years;
			tourBronze.appendChild(tourBronzeYears);
			tour.appendChild(tourBronze);

			//adding childrens
	      	childrens.push(tour);
		}*/
        
        //adding details window
		addWindow(teamStats, childrens);
	});
}

function addEventsDetails(arr){
	var element, parent = "";
	console.log("asd");
	[].forEach.call(arr.team, function(myArr){
		console.log("asd");
		element = "stats" + myArr.short;
		parent = document.getElementById("team" + myArr.short);
		console.log("team" + myArr.short + " " + element);
		parent.addEventListener("click", function(){
			toggle(element);
		});
	});
}

function addEventsStats(arr){
	var element, parent = "";
	[].forEach.call(arr.team, function(myArr){
		for(var i = 0; i < myArr.tournaments.length; i++){
		var data = myArr.tournaments[i];
			for (var trophy in data) {
				if(trophy === "gold" || trophy === "silver" || trophy === "bronze"){
					parent = document.getElementById("tournamentTitle" + trophy + myArr.tournaments[i].short + myArr.short);
					element = trophy + data.short + myArr.short;
					//console.log(parent.getAttribute("id") + " - " + element);
					parent.addEventListener("click", function(){
						toggle(element);
						console.log("okienko " + element + " przcisk " + parent.getAttribute("id"));
					});
				}
			}
		}
	});
}

function toggle(arg){
	console.log("element " + arg);
	var element = document.getElementById(arg);
	if(element.classList.contains("statsHide") === true){
		element.classList.toggle("statsHide", false);
		element.classList.toggle("statsShow", true);
		//console.log("wyswietlam " + arg);
	} else if(element.classList.contains("statsShow") === true){
		element.classList.remove("statsShow");
		element.classList.add("statsHide");
		//console.log("chowam " + arg);
	}
}

	// var $spans = doc.querySelector('.teams li.stats .window .tournaments span');

	// [].forEach.call($spans, function ($span) {
 //    	$span.addEventListener('mouseevnter', function () {
 //        	enter('goldIoPol')
 //    	});
	// });

// function toggle(arg){
// 	var win = document.getElementsByClassName(arg);
// 	for(var i = 0; i < win.length; i++){

// 		if(win[i].style.display != "inline-block"){
// 		 	win[i].style.display = "inline-block";
// 		}else if(win[i].style.display != "none"){
// 		 	win[i].style.display = "none";
// 		}
// 	}
// }

// function enter(arg){
// 	var win = document.getElementsByClassName(arg);
// 	for(var i = 0; i < win.length; i++){
// 		win[i].style.display = "inline-block"
// 	}
// }

// function leave(arg){
// 	var win = document.getElementsByClassName(arg);
// 	for(var i = 0; i < win.length; i++){
// 		win[i].style.display = "none"
// 	}
// }

/////////////////////////////////////////////////////////////

// function ustawKlase(action, player){
// 	var spans = document.getElementById(player);
// 	if(action === "hide"){
// 			spans.classList.toggle("detailHide", true);
// 			spans.classList.toggle("detailShow", false);
// 	} else if(action === "show"){
// 			spans.classList.toggle("detailShow", true);
// 			spans.classList.toggle("detailHide", false);
// 	}
// }

// document.getElementById("playerName1").addEventListener("click", function(){
// 	eventAdd();
// });

// function eventAdd(){
// 	ustawKlase("hide", "player1");
// }

// // function addEvents(){
// // 	console.log("test1");
// // 	var spans = document.getElementById("player1");
// // 	console.log("test2");
// // 	console.log(spans.getAttribute("id"));
// // 	spans.addEventListener("click", function(){
// // 		eventAdd(spans);
// // 	});
// // 	console.log('test6');
// // }

// // function eventAdd(spans){
// // 	ustawKlase("hide", "playerName1");
// // }

// // addEvents();