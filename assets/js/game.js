function Game (frame, config) {
	'use strict';

	var self = this;

	self.LOADING 	= "loading";
	self.GAMEPLAY 	= "gameplay";
	self.INGAME 	= "ingame";
	self.ERROR 		= "error";

	var state = {
		status: 	self.LOADING,	// loading | gameplay | ingame | >>error<<
		win: 		0,				// wins
		plays: 		0,				// games
		current: 	"",				// current picture on the screen

	};

	var frameEl 	= frame;
	var loadingEl	= frame.children.namedItem("loading-frame");
	var gameEl		= frame.children.namedItem("game-frame");
	var errorEl		= frame.children.namedItem("error-frame");

	var symDisp 	= gameEl.children.namedItem("sym-display");
	// start button - a
	var startEl		= gameEl.children.namedItem("controls").children.namedItem("start-btn");
	// selected symbol - select
	var selectEl	= gameEl.children.namedItem("controls").children.namedItem("sym-select");
	// win element
	var winEl		= gameEl.children.namedItem("scores").children.namedItem("win");
	// plays
	var playEl		= gameEl.children.namedItem("scores").children.namedItem("plays");
	
	var images		= [];

	function _init () {
		_update();

		// preloading images
		for (var i = 0, l = config.filenames.length; i < l; i++) {
			var img		= new Image();
			img.src		= config.path + config.filenames[i];
			if (config.filenames[i].startsWith("SYM")){
				images.push(img);
			}
		}

		// create the symbol display
		symDisp.innerHTML = '';
		var div = document.createElement("div");
		for (var i = 0; i < images.length; i++) {
			images[i].positionX = (-190 * i) - 10 + "px"; // describes the position in the container
			var img = document.createElement("img");
			img.src = images[i].src;
			div.appendChild(img);
		};
		symDisp.appendChild(div);
		
		startEl.onclick = _start;				// subscribe with _start on button
		state.status = self.GAMEPLAY;			// set game status to gameplay
		_update();
	}

	function _update () {	// update state
		if (state.status === self.GAMEPLAY){
			utils.hide(loadingEl);				// hide loading frame
			utils.show(gameEl);					// display game frame
			utils.hide(errorEl);
			startEl.children[0].src = "./assets/img/BTN_Spin.png";
			selectEl.disabled = false;
		} else if (state.status === self.LOADING){
			utils.hide(gameEl);	
			utils.hide(errorEl);
			utils.show(loadingEl);
		} else if (state.status === self.INGAME) {
			startEl.children[0].src = "./assets/img/BTN_Spin_d.png";	// 
			selectEl.disabled = true;
		} else if (state.status === self.ERROR){
			utils.hide(gameEl);
			utils.hide(loadingEl);
			utils.show(errorEl);
			return;
		}

		symDisp.children[0].style.top = state.current;
		playEl.innerHTML = "<span>Plays: " + state.plays + "</span><span>Wins: " + state.win + "</span>";
	}

	function _shuffle (time, callback) {	// shuffle symbols
		var i = 0;		
		// starting animation
		var anim = setInterval(function(){
			if (i % 2 === 0){				
				symDisp.children[0].style.top  = images[images.length - 1].positionX;
			}
			else{
				symDisp.children[0].style.top  = images[0].positionX;
			}
			i++;
		}, 100);

		// stoping animation
		setTimeout(function(){
			clearInterval(anim);
			if (typeof callback === "function")
				callback();
		}, time || 1000);
	}

	function _win (isWin) {
		if (isWin) {
			winEl.innerHTML = "You win! :)";
			winEl.style.opacity = 1;

		} else {
			winEl.innerHTML = "Next time! :("
			winEl.style.opacity = 1;
		}
		setTimeout(function(){
			winEl.style.opacity = 0;
		}, 2000);
	}

	function _start () {	// start button clicked
		console.log(state.status);
		if (state.status === self.GAMEPLAY){
			state.status = self.INGAME;
			state.plays++;
			_update();

			var winnerNumber = Math.floor(Math.random() * 100) % images.length;
			state.current = images[winnerNumber].positionX;
			
			_shuffle(2000, function(){
				if (Number(selectEl.value) === winnerNumber) {
					state.win++;
					_win(true);

				} else{
					_win(false);
				}
				state.status = self.GAMEPLAY;
				_update();
			});
		}
	}

	// change the status manually
	self.statChange = function(status){
		state.status = status;
		_update();
	}

	// init game
	_init();
}