"use strict";

// Allow arbitrary height and width so constructor will be called and create mazes of different sizes
// We add arguments to the function and define defaults in the html file to create code each time its loaded
function Maze(width,height) {
	this.width = width;
	this.height = height;

	// Same logic with the start point, orientation and end point
	// Use Setted Methods. Allows validation before properties get set
	this.startX			  = null;
	this.startY			  = null;
	this.startOrientation = null;
	this.endX			  = null;
	this.endY			  = null;


	this.directions = ["north","east","south","west"];
	// Creating the array for the maze
	this.spaces = [];

	var x, y;
	for (x=1; x <= width; x +=1 ) {
		// Loop goes through each columns and creates an array elements for it
		// This array element will be another empty array
		this.spaces[x] = [];
		// At this point we should have an array of 7 elements. Each element with an empty array inside
		// For each colum will also loop through each Y coordinate and add an element to the array
		for (y=1; y <= height; y += 1) {
			// Will add one element to the array for each space in the column
			// Add a text representation of the coordinates
			this.spaces[x][y] = new MazeSpace(this.directions);
		}
	}
}

// As classes doesn't exist, Defines prototype method setStart that will be available in all mazes
// Robot will start outside of the maze but it will be easier to track it. So we set the start and orientation point
Maze.prototype.setStart = function(x, y, orientation) {
	if (this.isInBounds(x, y) && this.isValidDirection(orientation)) {
		this.startX = x;
		this.startY = y;
		this.startOrientation = orientation;
		return true;
	}
	return false;
}

// Same logic to set the end point of the maze
Maze.prototype.setEnd = function (x, y) {
	if (!this.isInBounds(x, y)) {
		return false;
	}
	this.endX = x;
	this.endY = y;
}

Maze.prototype.setWall = function(x, y, direction) {
	// Validation of size of maze to set walls and also the direction
	if (this.isInBounds(x, y) && this.isValidDirection(direction)) {
	this.spaces[x][y].setWall(direction);
	return true;
	}
	return false;
}

Maze.prototype.isValidDirection = function(direction) {
	return this.directions.indexOf(direction) !== -1;
}

Maze.prototype.isInBounds = function(x, y) {
	return x > 0 && x <= this.width && y > 0 && y <= this.height;
}