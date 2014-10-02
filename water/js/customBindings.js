

ko.bindingHandlers.gitem = {
	init:function(element, valueAccessor, allBindings, viewModel, bindingContext){
	},
	update: function(element, valueAccessor, allBindings, viewModel, bindingContext){
		var data = ko.unwrap(valueAccessor());
		element.style.top 	= data.x() + "px";
		element.style.left 	= data.y + "px";
	}
};


ko.bindingHandlers.dragable = {
	init:function(element, valueAccessor, allBindings, viewModel, bindingContext){
		console.log("init", arguments);
		var data = ko.unwrap(valueAccessor());
		console.log(data);
		//element.style.top 	= data.x() + "px";
		//element.style.left 	= data.y + "px";
		element.on

	},
	update: function(element, valueAccessor, allBindings, viewModel, bindingContext){
		console.log("update", arguments);

		var data = ko.unwrap(valueAccessor());

		console.log("update---", valueAccessor());

		element.style.top 	= data.x() + "px";
		element.style.left 	= data.y + "px";
	}
};