

ko.bindingHandlers.circle = {
	init:function(element, valueAccessor, allBindings, viewModel, bindingContext){
		var data = ko.unwrap(valueAccessor());
		var c = document.createElementNS("http://www.w3.org/2000/svg", 'circle');
		var r = document.createElementNS("http://www.w3.org/2000/svg", 'rect');
		r.classList.add("c-s");
		element.appendChild(r);
		element.appendChild(c);

		element.addEventListener("click", function(){
			bindingContext.$parent.select(bindingContext.$data);
		}, false);

		element.addEventListener("mouseover", function(e){
			this.children[0].classList.add("c-s-h");
		}, false);

		element.addEventListener("mouseout", function(e){
			this.children[0].classList.remove("c-s-h");

		}, false);

	},
	update: function(element, valueAccessor, allBindings, viewModel, bindingContext){
		var data = ko.unwrap(valueAccessor());

		var r = element.children[0];
		var c = element.children[1];

		r.setAttribute('width', data.r() * 2 + 10);
		r.setAttribute('height', data.r() * 2 + 10);
		r.setAttribute('x', data.cx() - data.r() - 5);
		r.setAttribute('y', data.cy() - data.r() - 5);
		data.selected() ?
			r.classList.add("c-s-s") :
			r.classList.remove("c-s-s");


		for(var i in data){
			c.setAttribute(i, typeof data[i] === "function" ? data[i]() : data[i]);
		}
	}
};
