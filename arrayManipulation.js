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

function formatArrayStrings()

console.log(arrayManipulation(numbers));