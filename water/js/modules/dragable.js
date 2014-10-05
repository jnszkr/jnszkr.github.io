
ko.bindingHandlers.dragable = {
	init:function(element, valueAccessor, allBindings, viewModel, bindingContext){
		console.log("init", arguments);
		var data = ko.unwrap(valueAccessor());
		console.log(data);

	},
	update: function(element, valueAccessor, allBindings, viewModel, bindingContext){
		console.log("update", arguments);

		var data = ko.unwrap(valueAccessor());

		console.log("update---", valueAccessor());

	}
};