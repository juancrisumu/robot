"use strict";

// Each element in the array to be a maze space object with 4 properties
//one for each size of the space, to contain a wall
function MazeSpace(directions) {
	var i;
	for (i=0; i < directions.length; i += 1) {
		this[directions[i]] = false;
	}
	this.north = false;
	this.east = false;
	this.south = false;
	this.west = false;
}

// Function for creating the argument of the walls
MazeSpace.prototype.setWall = function(direction) {
	this[direction] = true;
}