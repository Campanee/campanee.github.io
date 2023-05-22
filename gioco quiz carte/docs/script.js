
window.value=1;  
popp = document.querySelector("#start");
popp.onclick = function(){
	var modal = document.getElementById("myModal");
	// Quando l'utente clicca il bottone si apre il modal 
	modal.style.display = "block";

	var span = document.getElementsByClassName("close")[0];
	// Quando l'utente clicca sulla <span> (x), chiude il modal
	span.onclick = function() {
	modal.style.display = "none";
	}
	document.getElementById("tancredi").style.color = "blue";
}
var quiz = ['In che anno è nato Galileo Galilei? A)1564, B)1554 C)1644', 'Dove nacque Adolf Hitler? A)Germania, B)Austria C)Polonia', 'In quale anno cadde l impero Ottomano? A)1780, B)1940 C)1922'];
var quiz2 = ['Quale pianeta è più vicino al sole? A)Mercurio, B)Giove C)Plutone', 'Qual è il gruppo sanguigno più raro? A)0 negativo, B)0 Rh negativo C)AB negativo', 'Qual è la sostanza naturale più dura sulla Terra? A)Boro, B)Ossidiana C)Diamante'];
var quiz3 = ['Quanti sono gli stati membri dell\'unione europea?A)27, B)26, C)25', 'La Costituzione Italiana è entrata in vigore nel:  A)1949, B)1948 C)1947', 'Sede del Senato della Repubblica:  A)Palazzo Montecitorio, B)Palazzo Chigi C)Palazzo Madama'];

var soluzioni = ['a', 'b', 'c'];
var corrette = 0;
var sbagliate = 0;
var risposta;
var CONT = 0;
domanda1 = document.querySelector("#prima");
domanda1.addEventListener("click", firstfu);
function firstfu(){
	for (var i = 0; i < 3; i++){
		risposta = prompt(quiz[i]).toLowerCase();
		if(risposta == soluzioni [i]) {
			corrette++;
			console.log('risposta corretta!');
		}
		else {
			sbagliate++;
			console.log('risposta errata');
		}
	}
	console.log("Corrette: " + corrette);
	console.log("Sbagliate: " + sbagliate);
	domanda1.removeEventListener("click", firstfu);
	domanda1.src = "img/cambiata.png"
	img = document.querySelector("#first");
	img.src = "img/finito.png"
	CONT = CONT + 1;
	console.log(CONT);
	if(CONT == 3){
		sium = document.querySelector("#button");
		document.getElementById("button").disabled=false;
	}
}

domanda2 = document.querySelector("#seconda");
domanda2.addEventListener("click", secondfu);
function secondfu(){
	for (var i = 0; i < 3; i++){
		risposta = prompt(quiz2[i]).toLowerCase();
		if(risposta == soluzioni [i]) {
			corrette++;
			console.log('risposta corretta!');
		}
		else {
			sbagliate++;
			console.log('risposta errata');
		}
	}
	console.log("Corrette: " + corrette);
	console.log("Sbagliate: " + sbagliate);
	domanda2.removeEventListener("click", secondfu);
	domanda2.src = "img/cambiata.png"
	img = document.querySelector("#second");
	img.src = "img/finito.png"
	CONT = CONT + 1;
	console.log(CONT);
	if(CONT == 3){
		sium = document.querySelector("#button");
		document.getElementById("button").disabled=false;
	}
}

domanda3 = document.querySelector("#terza");
domanda3.addEventListener("click", thirdfu);
function thirdfu(){
	for (var i = 0; i < 3; i++){
		risposta = prompt(quiz3[i]).toLowerCase();
		if(risposta == soluzioni [i]) {
			corrette++;
			console.log('risposta corretta!');
		}
		else {
			sbagliate++;
			console.log('risposta errata');
		}
	}
	console.log("Corrette: " + corrette);
	console.log("Sbagliate: " + sbagliate);
	domanda3.removeEventListener("click", thirdfu);
	domanda3.src = "img/cambiata.png"
	img = document.querySelector("#third");
	img.src = "img/finito.png"
	CONT = CONT + 1;
	console.log(CONT);
	if(CONT == 3){
		sium = document.querySelector("#button");
		document.getElementById("button").disabled=false;
	}
}

lio = document.querySelector("#button");
lio.addEventListener("click", lastbutnotleast);
function lastbutnotleast(){
	console.log("Corrette: " + corrette);
	console.log("Sbagliate: " + sbagliate);
	var modal = document.getElementById("myModal");
	modal.style.display = "none";
	var elem = document.getElementById('start');
	elem.style.display = 'none';
	var foto = document.getElementById('risultato');
	foto.hidden = false;
	if(corrette > 3 && corrette < 7){
		foto.src = "img/medio.gif"
	}else if(corrette >= 7){
		foto.src = "img/top.gif"
	}
	document.getElementById("prateriesmeraldo").innerHTML ="Risposte corrette: " + corrette;
	document.getElementById("clubhouse").innerHTML ="Risposte errate: " + sbagliate;
	document.getElementById("tancredi").innerHTML ="";
}
