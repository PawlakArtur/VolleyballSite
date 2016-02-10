var xmlhttp = new XMLHttpRequest();
var url = "data/team.json";

xmlhttp.onreadystatechange = function() {
    var country = window.location.search;
    country = country.substring(1);
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        var myArr = JSON.parse(xmlhttp.responseText);
        addCountry(myArr, country);
        addCoach(myArr, country);
        addPlayer(myArr, country);
    }
};
xmlhttp.open("GET", url, true);
xmlhttp.send();

function addCountry(arr, country) {
    [].forEach.call(arr.team, function(myArr){
        if(myArr.name === country){
            var h3Tag = document.getElementsByTagName("h3");
            h3Tag[0].innerHTML = myArr.name;
        }
    });
}

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

function addCoach(arr, country) {
    [].forEach.call(arr.team, function(myArr){
        if(myArr.name === country){
            [].forEach.call(myArr.coach, function(myArr2){
                var coachTag = document.getElementById("coach");
                var coachLiName = document.createElement("li");
                coachLiName.setAttribute("class", "name");
                coachTag.appendChild(coachLiName);
                var coachSpan = document.createElement("span");
                coachTag.appendChild(coachSpan);
                coachSpan.innerHTML = myArr2.firstName + " " + myArr2.lastName;
                coachLiName.appendChild(coachSpan);
                var coachLiDetail = document.createElement("li");
                coachLiDetail.setAttribute("class", "detail");
                coachTag.appendChild(coachLiDetail);

                var coachSpanBirth = document.createElement("span");
                coachSpanBirth.setAttribute("class", "spanDetails");
                coachSpanBirth.innerHTML = "Data urodzenia: " + myArr2.birth;

                var childrens = [];
                childrens.push(coachSpanBirth);

                addWindow(coachLiDetail, childrens);
            });
        }
    });
}

function addPlayer(arr, country) {
    [].forEach.call(arr.team, function(myArr){
        if(myArr.name === country){
            [].forEach.call(myArr.player, function(myArr2){
                var playerTag = document.getElementById("player");
                var playerLiName = document.createElement("li");
                playerLiName.setAttribute("class", "name");
                playerTag.appendChild(playerLiName);
                var playerSpan = document.createElement("span");
                playerTag.appendChild(playerSpan);
                playerSpan.innerHTML = myArr2.firstName + " " + myArr2.lastName;
                playerLiName.appendChild(playerSpan);
                var playerLiDetail = document.createElement("li");
                playerLiDetail.setAttribute("class", "detail");
                playerTag.appendChild(playerLiDetail);

                var playerSpanBirth = document.createElement("span");
                playerSpanBirth.setAttribute("class", "spanDetails");
                playerSpanBirth.innerHTML = "Data urodzenia: " + myArr2.birth;

                var playerSpanNumber = document.createElement("span");
                playerSpanNumber.setAttribute("class", "spanDetails");
                playerSpanNumber.innerHTML = "Nr zawodnika: " + myArr2.number;

                var playerSpanPosition = document.createElement("span");
                playerSpanPosition.setAttribute("class", "spanDetails");
                playerSpanPosition.innerHTML = "Pozycja: " + myArr2.position;

                var playerSpanHeight = document.createElement("span");
                playerSpanHeight.setAttribute("class", "spanDetails");
                playerSpanHeight.innerHTML = "Wzrost: " + myArr2.height;

                var arg2 = [];
                arg2.push(playerSpanBirth);
                arg2.push(playerSpanNumber);
                arg2.push(playerSpanPosition);
                arg2.push(playerSpanHeight);

                addWindow(playerLiDetail, arg2);
            });
        }
    });
}

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