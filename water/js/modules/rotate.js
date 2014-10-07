

ko.bindingHandlers.rotate = {
	init:function(element, valueAccessor, allBindings, viewModel, bindingContext){
		var data = ko.unwrap(valueAccessor());
		var r = document.createElementNS("http://www.w3.org/2000/svg", 'path');
		r.setAttributeNS(null, 'd', "M24.083,15.5C24.073999999999998,20.239,20.238999999999997,24.073999999999998,15.499999999999998,24.083C10.758999999999999,24.073999999999998,6.922999999999998,20.238999999999997,6.914999999999997,15.499999999999998C6.922999999999997,10.758999999999999,10.758999999999997,6.922999999999998,15.499999999999998,6.914999999999997C17.412999999999997,6.914999999999997,19.165,7.543999999999997,20.589999999999996,8.600999999999997L18.807999999999996,10.383999999999997L27.236999999999995,12.639999999999997L24.976999999999997,4.212999999999997L23.086999999999996,6.102999999999997C21.014999999999997,4.425999999999997,18.369999999999997,3.414999999999997,15.499999999999996,3.414999999999997C8.826,3.418,3.418,8.826,3.416,15.5C3.418,22.175,8.826,27.583,15.5,27.583S27.583,22.175,27.583,15.5H24.083Z");
		// transform="matrix(1,0,0,1,4,4)" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); opacity: 1; fill-opacity: 1;" opacity="1" fill-opacity="1"></path>');
		element.appendChild(r);
	},
	update: function(element, valueAccessor, allBindings, viewModel, bindingContext){
		var data = ko.unwrap(valueAccessor());

		console.log(element.getBoundingClientRect());

		var boundRect = element.getBoundingClientRect();
		element.setAttribute("transform", 
			"rotate(0," + 
				(boundRect.top)+ 
				"," + 
				(boundRect.left)+ 
				" )");
	}
};
