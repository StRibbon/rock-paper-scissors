var compScore=0;
var userScore=0;

var scoreTally = document.createElement('P');
document.body.appendChild(scoreTally);

var choices = ["rock","paper","scissors"];
var comp_choice = function (){ 
	for(var i in choices){
		return choices[Math.floor(Math.random()*3)];
	}
};

var playButton = document.createElement('BUTTON');
playButton.style.color = "blue";
playButton.innerHTML = "PLAY";
document.body.appendChild(playButton);


playButton.addEventListener("click", function(){
	var user_choice = prompt("rock paper or scissors?");
	var choices = ["rock","paper","scissors"];
	var comp_choice = function (){ 
	for(var i in choices){
		return choices[Math.floor(Math.random()*3)];
	}
};

	startOver(user_choice, comp_choice());
});

// window.onload = function (){
	
// 	var user_choice = prompt("Rock paper or scissors?");
// 	startOver(user_choice, comp_choice());
	
// };

function startOver(user, comp){

	console.log("comp: "+comp);
	console.log("user: "+user);

	// while(compScore < 3 || userScore < 3){

	if(user===comp){
		alert("Tie game");
	}else if(user === choices[0] && comp === choices[1]){
		compScore+=1;  
		alert("Comp wins!");  
	}else if(user === choices[1] && comp === choices[0]){
		userScore+=1;  
		alert("User wins!");  
	}else if(user === choices[2] && comp === choices[1]){
		userScore+=1;  
		alert("User wins!");  
	}else if(user === choices[2] && comp === choices[0]){
		compScore+=1;  
		alert("Computer wins!");  
	}else if(user === choices[0] && comp === choices[2]){
		userScore+=1;  
		alert("User wins!");  
	}else if(user === choices[1] && comp === choices[2]){
		compScore+=1; 
		alert("Computer wins!"); 
	} else {
		
		alert("Input undefined");
	}
	console.log("Comp: " + compScore + " User: " +  userScore);
	scoreTally.innerHTML = "Comp: " + compScore + " User: " +  userScore;
	scoreTally.innerHTML = "Comp: " + compScore + " User: " +  userScore;
	
	}
// }


// conditional logic to determine a winner

// randomly generate a computer answer

// prompt the user to pick a choice

// prompt("Make your choice fool!");

// after comparing, see who wins
// grab some value of an element (id, class)
// increment that by one

// setTimeout(function (){


// },1000);

// function add (x,y){
// 	return x + y;
// }

// function math(x,y,callback){
// 	callback(x,y);
// }

// var x = document.getElementsbyTagName("body")[0];

// x.addEventListener("click", function(){
// 	console.log("nice!");
// });