"use strict";
/**
 * Implement a function that flattens a nested array.
 * flatten([1,[2],[3, [[4]]]]);
 * => [1,2,3,4]
 */

 const flatten = (arr) => {
    var result = [];

    arr.forEach((element) => {
        if(!Array.isArray(element)) {
            return result.push(element);
        } else {
            result = result.concat(flatten(element));
        }    
    });
    return result;
 };

