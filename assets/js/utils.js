

var utils = utils || {};

// get ajax request
utils.getAjax = function(url){
	'use strict';

	try{
		var req = new XMLHttpRequest();
		req.open("get", url, false);
		req.send(null);
		return JSON.parse(req.responseText);

	} catch (e){
		console.log(e);
		return;
	}
}

// get elements by id or class
utils.getElement = function(id){
	'use strict';
	
	if (typeof id === "string"){
		if (id[0] === '#'){
			el = document.getElementById(id.slice(1, id.length));
			return [el];
		} else if (id[0] === '.'){
			return document.getElementsByClassName(id.slice(1, id.length));
		}
	} else if (id.nodeType){
		return [id];
	} else {
		return [];
	}
}

// hide element - dependent on getElement
utils.hide = function(element){
	element = utils.getElement(element);

	

	for (var i = 0, l = element.length; i < l; i++) {
		var style = window.getComputedStyle(element[i]);
		var delay = style.getPropertyValue('-webkit-transition-delay');
		delay = Number(delay.slice(0, delay.length - 1));
		var duration = style.getPropertyValue('-webkit-transition-duration');
		duration = Number(duration.slice(0, duration.length - 1));

		element[i].style.opacity = 0
		if (delay + duration){
			setTimeout((function(e){
				return function(){
					e.style.display = "none";	
				} 
			})(element[i]), (delay + duration) * 1000);
		} else {
			element[i].style.display = "none";
		}
	}
}

// show element
utils.show = function(element){
	element = utils.getElement(element);
	for (var i = 0, l = element.length; i < l; i++) {
		element[i].style.display = "block";
		element[i].style.opacity = 1;	
	}
}

// from MDN

if (!String.prototype.startsWith) {
	Object.defineProperty(String.prototype, 'startsWith', {
		enumerable: false,
		configurable: false,
		writable: false,
		value: function (searchString, position) {
			position = position || 0;
			return this.lastIndexOf(searchString, position) === position;
		}
	});
}
