

ko.bindingHandlers.circle = {
	init:function(element, valueAccessor, allBindings, viewModel, bindingContext){
		var data = ko.unwrap(valueAccessor());
	},
	update: function(element, valueAccessor, allBindings, viewModel, bindingContext){
		var data = ko.unwrap(valueAccessor());

		element.setAttribute("cx", data.x());
		element.setAttribute("cy", data.y);
		element.setAttribute("r", data.r);

		console.log("data", data);
	}
};
