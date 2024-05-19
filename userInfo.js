const { processArray, formatArrayStrings } = require('./arrayManipulation');

var numbers = [1, 2, 3, 4, 5, 6];
var names = ["Lisa", "Kofi", "Ama", "James", "Fred", "Sadie"];

newNames = formatArrayStrings(names,numbers);

function createUserProfiles(names, newNames){
  var userProfile = [];
  for(var i = 0; i <names.length; i++){
    userProfile.push({
      originalName: names[i],
      modifiedNames: newNames[i],
      id: i+1
    });
  }
  return userProfile;
}


console.log("User Profiles:", createUserProfiles(names, newNames));

module.exports = {
  createUserProfiles
};
