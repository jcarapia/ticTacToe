var prompt = require('prompt');
var _ = require('lodash');

var TicTacToe = function(){
	
	this.counter = 1;
	
	this.player = this.counter %2 === 0 ? 2: 1; 

	this.board = [
		['0','1','2'], 
		['3','4','5'],
		['6','7','8']
	];
}

TicTacToe.prototype.enterChoice = function(location){
	//check to see if location is available
	if(!_.flatten(this.board).includes(location)){
		//prompt user to enter another choice
	}
		//if not available, ask user to enter choice
		//if available
			//check if current p
}


// prompt.start();

// var choice;

// prompt.get(['choice'], function(err, result){
// 	choice = result;

// 	console.log('you have chosen: ', choice.choice);
// });

var game = new TicTacToe()
console.log(game)
game.enterChoice('1')


