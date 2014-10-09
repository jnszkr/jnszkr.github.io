/**/


// Singly linked lists
function Node (data) {
	this.data = data;
	this.next = undefined;
}

function List () {
	this.firstNode = undefined;
}

List.prototype.add = function(newNode){
	var n = new Node(newNode);
	var nn = this.firstNode;
	while(nn && nn.next)
	{
		nn = nn.next;
	}
	if(nn === undefined){
		this.firstNode = n;
	} else {
		nn.next = n;
	}
}


List.prototype.remove = function(node){

}

List.prototype.search = function(node){

}

List.prototype.isEmpty = function(){
	return !this.firstNode;
}

List.prototype.size = function(){
	var n = this.firstNode,
		i = 0;
	while(n){
		i++;
		n = n.next;
	}
	return i;
}

List.prototype.indexOf = function(node){

}

List.prototype.insert = function(pos, node){

}

List.prototype.pop = function(pos){

}

/*****************************************/

List.prototype.map = function(f){

}

List.prototype.filter = function(f){

}