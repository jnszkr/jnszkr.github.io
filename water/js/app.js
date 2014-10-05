
function mockData () {
	return [
		new circle({cx: 40, cy: 60, r: 20}),
		new circle({cx: 312, cy: 70, r: 20}),
		new circle({cx: 160, cy: 100, r: 20}),
		new circle({cx: 210, cy: 150, r: 20}),
	];
}


function init () {
	console.log("init")



	ko.applyBindings(new canvas(mockData()), document.getElementById("myCanvas")[0])
}