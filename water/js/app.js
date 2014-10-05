
function mockData () {
	return [
		new circle({x: 10, y: 5, r: 20}),
		new circle({x: 10, y: 6, r: 2}),
		new circle({x: 12, y: 7, r: 2}),
		new circle({x: 60, y: 10, r: 2}),
		new circle({x: 10, y: 5, r: 2}),
	];
}


function init () {
	console.log("init")



	ko.applyBindings(new canvas(mockData()), document.getElementById("myCanvas")[0])
}