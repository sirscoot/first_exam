var ninjaCounter = 0;
var pirateCounter = 0;


function showAlert(){
	alert("Game has ended!");
}

function gameAlert(){
	timeout = setTimeout(showAlert, 13000);
	return timeout;
}

function addScoreNinjas(element){
	element = document.getElementById("team-score1");
	ninjaCounter ++;
	element.innerText = 319 + ninjaCounter;
}


function addScorePirates(element){
	element = document.getElementById("team-score2");
	pirateCounter ++;
	element.innerText = 164 + pirateCounter;
}


function deleteMe(element){
	element = document.querySelector("#box3");
	alert("Thanks for subscribing!")
	element.remove();
}

gameAlert();