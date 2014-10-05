function circle (data) {
	var self 	= this;

	for (var i in data)
	{
		self[i] = ko.observable(data[i]);
	}

	self["class"]		= "circle";

	self["fill"] = ko.observable("");
	self["stroke"] = ko.observable("none");
	self["stroke-width"] = ko.observable(2);
	self["selected"] = ko.observable(false);
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
		console.log("select", item);
		self.selected() && (self.selected()["selected"](false));
		item["selected"](true);
		self.selected(item);
	}

}


