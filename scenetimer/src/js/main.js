var options = {
	path: "./src/img/",
	files: [
	"pic_01.jpg",
	"pic_02.jpg",
	"pic_02.jpg",
	"pic_02.jpg",
	"pic_02.jpg",
	"pic_02.jpg",
	"pic_02.jpg",
	"pic_02.jpg",
	"pic_02.jpg",
	"pic_02.jpg",
	"pic_02.jpg",
	"pic_02.jpg",
	"pic_02.jpg",
	"pic_02.jpg",
	"pic_02.jpg",
	"pic_02.jpg",
	"pic_02.jpg",
	"pic_02.jpg",
	"pic_02.jpg",
	"pic_02.jpg",
	"pic_02.jpg",
	"pic_02.jpg",
	"pic_02.jpg",
	"pic_02.jpg",
	"pic_02.jpg",
	"pic_02.jpg",
	"pic_02.jpg",
	"pic_02.jpg",
	"pic_02.jpg",
	"pic_02.jpg",
	"pic_02.jpg",
	"pic_02.jpg",
	"pic_02.jpg",
	"pic_02.jpg",
	"pic_02.jpg",
	"pic_02.jpg",
	"pic_02.jpg",
	"pic_02.jpg",
	"pic_02.jpg",
	"pic_02.jpg",
	"pic_02.jpg",
	] 
};




$(document).ready(function(){
	console.log("init");

	var c = UI.Counter({
		endDate: "2014-12-21T06:50:00",
		el: "#counterId"
	});

	var imgPath = options.path + options.files[c.getDay()]; 

	UI.Background({
		el: ".bg",
		img: imgPath
	});
});


var UI = UI || {};

UI.Counter = function(o){
	'use strict';
	var me = this;

	if (!(o.endDate instanceof Date)){
		o.endDate = new Date(o.endDate);
	}

	var evnt = [];
	var one_day		= 1000 * 60 * 60 * 24;
	var one_hour 	= 1000 * 60 * 60;
	var one_minute 	= 1000 * 60;
	var el = $(o.el);
	var end = o.endDate.getTime();

	this.getText = function(){
		var diff 	= end - Date.now();
		var days 	= Math.round(diff / one_day);
		var hours 	= Math.round((diff = diff % one_day) / one_hour);
		var mins	= Math.round((diff = diff % one_hour) / one_minute);
		var sec		= Math.round((diff % one_minute) / 1000);
		return days + " nap " + hours + " óra " + mins + " perc " + sec + " másodperc";
	}

	this.getDay = function(){
		return Math.round((end - Date.now())/ one_day);
	}

	me.tick = function(cb, i){
		var interval = i > 0 ? i : 1000;
		if (typeof cb === "function") {
			cb.apply(me);
			evnt.push(setInterval(function(){
				cb.apply(me);
			}, interval));
		}
		return me;
	}

	me.clear = function(){
		for (var i = 0; i < evnt.length; i++) {
			clearInterval(evnt[i]);
		};
		return me;
	}

	me.tick(function(){
		el.text(me.getText());
	});

	return me;
}

UI.Background = function(o){
	var el = $(o.el);
	var img = $("<img>");
	img.attr("src", o.img);
	el.append(img);
}