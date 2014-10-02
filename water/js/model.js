
function gitem (data) {

	var self 	= this;

	!data && (data = {});

	console.log('---', data, !data);

	self.name	= data.name || "Box";
	self.x		= ko.observable(data.x || 0);	// x position
	self.y		= data.y || 0;	// y position
	self.a		= data.a || 0;	// angle

	function move (x, y) {
		var anim = setInterval(function(){
			self.x(self.x()+10);
		}, 200);
	}

	//move();
}


function container (data) {
	var self = this;

	self.items	= ko.observableArray(data || []);

	self.addItem = function(){
		console.log("push", new gitem());
		self.items.push(new gitem());
	}


}


