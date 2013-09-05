"use strict";

// Each element in the array to be a maze space object with 4 properties
//one for each size of the space, to contain a wall
function MazeSpace() {
	this.north = false;
	this.east = false;
	this.south = false;
	this.west = false;
}

// Function for creating the argument of the walls
MazeSpace.prototype.setWall = function(direction) {
	this[direction] = true;
}