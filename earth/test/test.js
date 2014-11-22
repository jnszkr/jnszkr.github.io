

QUnit.test( "Lined list test", function( assert ) {

	var ls = new List;
	assert.ok(ls, "create list test");

	assert.ok(ls.firstNode === undefined, "initial firstNode is not undefined");
	
	[
		"add",
		"remove",
		"search",
		"isEmpty",
		"size",
		//"append",
		"indexOf",
		"insert",
		"pop"
	].map(function(func){
		assert.ok(typeof ls[func] === "function", "'" + func + "' function");
	});
	
	assert.ok(ls.isEmpty(), "isEmpty: list is empty test");
	assert.ok(ls.size() === 0, "size: no item added");
	
	ls.add(33);
	
	assert.ok(!ls.isEmpty(), "isEmpty: list is not empty test");
	assert.ok(ls.size() === 1, "size: one item added");

	
});