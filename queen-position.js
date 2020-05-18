var row = [8, 7, 6, 5, 4, 3, 2, 1];
var column = ["A", "B", "C", "D", "E", "F", "G", "H"];
var queen = {
    position: {
        row: 1,
        column: 3
    }
};
var direction = window.prompt("enter in which direction queen have to move");
var steps = window.prompt("enter how many steps queen have to move");

switch (direction) {
    case 'E': east(steps);
        break;
    case 'W': west(steps);
        break;
    case 'S': south(steps);
        break;
    case 'N': north(steps);
        break;
    case 'NE': northEast(steps);
        break;
    case 'SE': southEast(steps);
        break;
    case 'SW': southWest(steps);
        break;
    case 'NW': northWest(steps);
        break;

}

function east(steps) {
    var column_result = queen.position.column + parseInt(steps);
    var row_result = queen.position.row;
    if (column_result <= 7) {
        var row_array_result = row[row_result];
        var column_array_result = column[column_result];
        var position = row_array_result + column_array_result;
        document.write(position);
    }
    else {
        document.write("queen is going out side of board");
    }
    queen.position.row = row_result;
    queen.position.column = column_result;
}


function west(steps) {
    var column_result = queen.position.column - parseInt(steps);
    var row_result = queen.position.row;
    if (column_result >= 0) {
        var row_array_result = row[row_result];
        var column_array_result = column[column_result];
        var position = row_array_result + column_array_result;
        document.write(position);


    }
    else {
        document.write("queen is going out side of board");
    }
    queen.position.row = row_result;
    queen.position.column = column_result;

}
function south(steps) {
    var column_result = queen.position.column;
    var row_result = queen.position.row + parseInt(steps);
    if (column_result <= 7) {
        var row_array_result = row[row_result];
        var column_array_result = column[column_result];
        var position = row_array_result + column_array_result;
        document.write(position);


    }
    else {
        document.write("queen is going out side of board");
    }
    queen.position.row = row_result;
    queen.position.column = column_result;

}
function north(steps) {
    var column_result = queen.position.column;
    var row_result = queen.position.row - parseInt(steps);
    if (row_result >= 0) {
        var row_array_result = row[row_result];
        var column_array_result = column[column_result];
        var position = row_array_result + column_array_result;
        document.write(position);


    }
    else {
        document.write("queen is going out side of board");
    }
    queen.position.row = row_result;
    queen.position.column = column_result;

}

function northEast(steps) {
    var column_result = queen.position.column + parseInt(steps);
    var row_result = queen.position.row - parseInt(steps);
    if (row_result >= 0 && column_result <= 7) {
        var row_array_result = row[row_result];
        var column_array_result = column[column_result];
        var position = row_array_result + column_array_result;
        document.write(position);


    }
    else {
        document.write("queen is going out side of board");
    }
    queen.position.row = row_result;
    queen.position.column = column_result;

}

function southEast(steps) {
    var column_result = queen.position.column + parseInt(steps);
    var row_result = queen.position.row + parseInt(steps);
    if (row_result <= 7 && column_result <= 7) {
        var row_array_result = row[row_result];
        var column_array_result = column[column_result];
        var position = row_array_result + column_array_result;
        document.write(position);


    }
    else {
        document.write("queen is going out side of board");
    }
    queen.position.row = row_result;
    queen.position.column = column_result;

}


function southWest(steps) {
    var column_result = queen.position.column - parseInt(steps);
    var row_result = queen.position.row + parseInt(steps);
    if (row_result <= 7 && column_result >= 0) {
        var row_array_result = row[row_result];
        var column_array_result = column[column_result];
        var position = row_array_result + column_array_result;
        document.write(position);


    }
    else {
        document.write("queen is going out side of board");
    }
    queen.position.row = row_result;
    queen.position.column = column_result;

}


function northWest(steps) {
    var column_result = queen.position.column - parseInt(steps);
    var row_result = queen.position.row - parseInt(steps);
    if (row_result >= 0 && column_result >= 0) {
        var row_array_result = row[row_result];
        var column_array_result = column[column_result];
        var position = row_array_result + column_array_result;
        document.write(position);


    }
    else {
        document.write("queen is going out side of board");
    }
    queen.position.row = row_result;
    queen.position.column = column_result;

}










