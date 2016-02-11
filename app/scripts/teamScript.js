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
        addEventsDetails(myArr, country);
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
            [].forEach.call(myArr.coach, function(myArrCoach){
                var coachTag = document.getElementById("coach");
                var coachLiName = document.createElement("li");
                coachLiName.setAttribute("class", "name");
                coachLiName.setAttribute("id", "nameId" + myArrCoach.id);
                coachTag.appendChild(coachLiName);
                var coachSpan = document.createElement("span");
                coachTag.appendChild(coachSpan);
                coachSpan.innerHTML = myArrCoach.firstName + " " + myArrCoach.lastName;
                coachLiName.appendChild(coachSpan);
                var coachLiDetail = document.createElement("li");
                coachLiDetail.setAttribute("class", "detail statsHide");
                coachLiDetail.setAttribute("id", "detailId" + myArrCoach.id);
                coachTag.appendChild(coachLiDetail);

                var coachSpanBirth = document.createElement("span");
                coachSpanBirth.setAttribute("class", "spanDetails");
                coachSpanBirth.innerHTML = "Data urodzenia: " + myArrCoach.birth;

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
            [].forEach.call(myArr.player, function(myArrPlayer){
                var playerTag = document.getElementById("player");
                var playerLiName = document.createElement("li");
                playerLiName.setAttribute("class", "name");
                playerLiName.setAttribute("id", "nameId" + myArrPlayer.id);
                playerTag.appendChild(playerLiName);
                var playerSpan = document.createElement("span");
                playerTag.appendChild(playerSpan);
                playerSpan.innerHTML = myArrPlayer.firstName + " " + myArrPlayer.lastName;
                playerLiName.appendChild(playerSpan);
                var playerLiDetail = document.createElement("li");
                playerLiDetail.setAttribute("class", "detail statsHide");
                playerLiDetail.setAttribute("id", "detailId" + myArrPlayer.id);
                playerTag.appendChild(playerLiDetail);
                //adding details: birth
                var playerSpanBirth = document.createElement("span");
                playerSpanBirth.setAttribute("class", "spanDetails");
                playerSpanBirth.innerHTML = "Data urodzenia: " + myArrPlayer.birth;
                //adding details: number
                var playerSpanNumber = document.createElement("span");
                playerSpanNumber.setAttribute("class", "spanDetails");
                playerSpanNumber.innerHTML = "Nr zawodnika: " + myArrPlayer.number;
                //adding details: position
                var playerSpanPosition = document.createElement("span");
                playerSpanPosition.setAttribute("class", "spanDetails");
                playerSpanPosition.innerHTML = "Pozycja: " + myArrPlayer.position;
                //adding details: height
                var playerSpanHeight = document.createElement("span");
                playerSpanHeight.setAttribute("class", "spanDetails");
                playerSpanHeight.innerHTML = "Wzrost: " + myArrPlayer.height;
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

function addEventsDetails(arr, country){
    var parent = "";
    [].forEach.call(arr.team, function(myArr){
        if(myArr.name === country)
        {
            [].forEach.call(myArr.coach, function(myCoach){
                parent = document.getElementById("nameId" + myCoach.id);
                parent.addEventListener("click", function(){
                    toggle("detailId" + myCoach.id);
                });
            });
            [].forEach.call(myArr.player, function(myPlayer){
                parent = document.getElementById("nameId" + myPlayer.id);
                parent.addEventListener("click", function(){
                    toggle("detailId" + myPlayer.id);
                    console.log("detailId" + myPlayer.id);
                });
            });
        }
    });
}