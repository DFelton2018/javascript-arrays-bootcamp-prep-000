var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array, element) {
  
  return [element, ...array];
  
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  
  array.unshift (element);
  
  return array;
  
}

function addElementToEndOfArray(array, element) {
  
  return [...array, element];
  
}

function destructivelyAddElementToEndOfArray(array, element) {
  
  array.push (element);
  
  return array;
  
}

function accessElementInArray(array, index) {
  
<<<<<<< HEAD
 return array[index];
  
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  
  array.shift();
  
  return array;
  
}

function removeElementFromBeginningOfArray(array) {
  
  return array.slice(1);
  
}

function destructivelyRemoveElementFromEndOfArray(array) {
  
  array.pop();
  
  return array;
  
}

function removeElementFromEndOfArray(array) {
  
  return array.slice(0, array.length - 1);
=======
  console.log(index[3]);
>>>>>>> b3b6e1ee04fc0ca3ba64f8b258892b765471bdfd
  
}