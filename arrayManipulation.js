var numbers = [1, 2, 3, 4, 5, 6];
var newArray = [];

function processArray(numbers){
  for(var i = 0; i < numbers.length; i++){
    if(numbers[i]%2 != 0){
      newArray.push(numbers[i] * 3);
    } else {
      newArray.push(numbers[i]**2);
    }
  }
  return newArray;
}

var names = ["Lisa", "Kofi", "Ama", "James", "Fred", "Sadie"];
var newNames = [];

function formatArrayStrings(names, numbers){
  for(var i = 0; i < numbers.length; i++){
    if(numbers[i]%2 != 0){
      newNames.push(names[i].toLowerCase());
    }else {
      newNames.push(names[i].toUpperCase());
    }
  }
  return newNames;
}

module.exports = {
  processArray,
  formatArrayStrings
};


console.log(numbers);
console.log(processArray(numbers));
console.log(names);
console.log(formatArrayStrings(names, numbers));