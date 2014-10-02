
function mockData () {
	return [
		new gitem({x: 0, y: 100, a: 0}),
		new gitem({x: 40, y: 200, a: 0}),
		new gitem({x: 20, y: 100, a: 0}),
		new gitem({x: 10, y: 10, a: 0})
	];
}


function init () {
	console.log("init")



	ko.applyBindings(new container(mockData()), document.getElementById("container"))
}