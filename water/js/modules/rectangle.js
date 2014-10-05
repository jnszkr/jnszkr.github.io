

ko.bindingHandlers.rectangle = {
	init:function(element, valueAccessor, allBindings, viewModel, bindingContext){
	},
	update: function(element, valueAccessor, allBindings, viewModel, bindingContext){
		var data = ko.unwrap(valueAccessor());
	}
};
