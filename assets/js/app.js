
// chrome has some issues with xss
var isChrome = false;
var conf = {
	"path": "./assets/img/",
	"filenames": [
	"BTN_Spin.png",
	"BTN_Spin_d.png",
	"SYM1.png",
	"SYM3.png",	 		
	"SYM4.png",	 		
	"SYM5.png",	 		
	"SYM6.png",	 		
	"SYM7.png"
	]
};

var game;

function init () {										// init function
	'use strict';

	var config = utils.getAjax("./conf/config.json");	

	if (isChrome || config) {
		utils.show(".game-container");
		game = new Game(document.getElementsByClassName("game-container")[0], config || conf);
		//game.statChange(game.LOADING);

	} else {
		utils.show("#error-container");
	}
}