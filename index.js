// Code your solution in this file
function findMatching(drivers, str) // returns the matching list of drivers. The function should be case insensitive.
{
    //using filter
    //list.filter() -> inside filter define new function driverName
    //driverName downCases and compares with str
    return drivers.filter(function (driverName) { 
        return driverName.toLowerCase() === str.toLowerCase();
    });
}

function fuzzyMatch(drivers, str) //akes an array of drivers and a string as arguments. returns all drivers whose names begin with the provided letters.
{
    let strLength = str.length; //get length of str
    return drivers.filter(function (driverName) {
        return driverName.slice(0, strLength) === str; //check if each element is === to str
    });
}

function matchName(drivers, str) //takes an array of drivers and a string as arguments. return each element whose name property matches the provided string argument.
{
    //In this function, each element of the drivers array is a JavaScript object that has a property of name
    return drivers.filter(function (driverName) {
        return driverName.name === str;
    });
}