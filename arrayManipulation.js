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

var words = ["Chair", "Book", "Hello", "Kitten", "Ball", "mouse"]

function formatArrayStrings(words, numbers){
  for(var i = 0; i < numbers.length; i++){
    if(numbers[i]%2 != 0){
      words[i] = words[i].toLowerCase();
    }else {
    words[i] = words[i].toUpperCase();
    }
  }
  return words;
}

console.log(numbers);
console.log(processArray(numbers));
console.log(words);
console.log(formatArrayStrings(words, numbers));