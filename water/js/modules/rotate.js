

ko.bindingHandlers.rotate = {
	init:function(element, valueAccessor, allBindings, viewModel, bindingContext){
		var data = ko.unwrap(valueAccessor());
	},
	update: function(element, valueAccessor, allBindings, viewModel, bindingContext){
		var data = ko.unwrap(valueAccessor());

		var boundRect = element.getBoundingClientRect();
		element.setAttribute("transform", 
			"rotate(0," + 
				(boundRect.top)+ 
				"," + 
				(boundRect.left)+ 
				" )");
	}
};
