function circle (data) {
	var self 	= this;

	!data && (data = {
		name: "circle",
		x: 0,
		y: 0,
		r: 1
	});

	console.log('---', data, !data);

	self.name	= data.name || "circle";
	self.x		= ko.observable(data.x);		// x position
	self.y		= data.y;						// y position
	self.r		= data.r;						// r
	self.type	= "circle";

	self.click 	= function(){
		console.log("clicked", arguments, this);
	}
}


function canvas (data) {
	var self = this;

	self.items		= ko.observableArray(data || []);
	self.selected 	= ko.observable();

	self.addItem = function(){
		console.log("push", new circle());
		self.items.push(new circle());
	}

	self.select = function(item){
		self.selected(item);
	}

}


