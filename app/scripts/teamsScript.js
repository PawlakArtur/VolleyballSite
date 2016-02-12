var xmlhttp = new XMLHttpRequest();
var url = "data/teams.json";

xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        var myArr = JSON.parse(xmlhttp.responseText);
        addCountry(myArr);
        addEventsDetails(myArr);
        addEventsStats(myArr);
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
		var teamFlag = document.createElement("div");
		teamFlag.setAttribute("class", "ball");
		teamFlag.setAttribute("id", "flag" + myArr.short);
		teamFlag.style.backgroundImage = "url('" + myArr.url + "')";
		teamLi.setAttribute("class", "team");
		teamLi.setAttribute("id", "team" + myArr.short);
		teamName.appendChild(teamFlag);
		teamName.innerHTML += myArr.name;
		teamLink.href = "team.html?" + myArr.name;
		teamTag.appendChild(teamLi);
		teamLi.appendChild(teamName);
		teamLi.appendChild(teamLink);
		//adding teams details
		var teamStats = document.createElement("li");
		teamStats.setAttribute("id", "stats" + myArr.short);
		teamStats.setAttribute("class", "stats statsHide");
		teamTag.appendChild(teamStats);
		//adding deatils = <span class="tournamentTitle">Turnieje:</span>
		var teamTournament = document.createElement("span");
		teamTournament.setAttribute("class", "tournamentTitleFirst");
		teamTournament.innerHTML = "Turnieje:"
		//adding details = tournaments
		var childrens = [];
		childrens.push(teamTournament);
		//adding trophy
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
        //adding details window
		addWindow(teamStats, childrens);
	});
}

function addEventsDetails(arr){
	var parent = "";
	[].forEach.call(arr.team, function(myArr){
		parent = document.getElementById("team" + myArr.short);
		parent.addEventListener("click", function(){
			toggle("stats" + myArr.short);
		});
	});
}

function addEventsStats(arr){
	var events = ["mouseenter", "mouseleave"];
	var parent = "";
	[].forEach.call(arr.team, function(myArr){
		[].forEach.call(myArr.tournaments, function(tours){
			for(trophy in tours){
				if(trophy === "gold" || trophy === "silver" || trophy === "bronze"){
					parent = document.getElementById("tournamentTitle" + trophy + tours.short + myArr.short);
					for(var i = 0; i < events.length; i++){
						parent.addEventListener(events[i], (function(newTrophy){
						return function(){
							toggle(newTrophy + tours.short + myArr.short);
						}
						})(trophy));
					}
				}
			}	
		});
	});
}
