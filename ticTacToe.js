var prompt = require('prompt');

var board = [
		['0','1','2'], 
		['3','4','5'],
		['6','7','8']
	];

prompt.start();

var choice;

prompt.get(['choice'], function(err, result){
	choice = result;

	console.log('you have chosen: ', choice.choice);
});

//console.log('you have chosen: ', choice);

