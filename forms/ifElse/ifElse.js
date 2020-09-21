//Create Variables
let userName = prompt(`the users first name`);
let userState = prompt(`the users state (2 letters)`); 
let userTemp = Number(prompt(`the users temperature (number) in fahrenheit`));
 
// convert the first letter of the user name to a capital in case the user used all lower case.
let upperCaseUserName = userName.charAt(0).toUpperCase() + userName.slice(1)
 
//convert the state entered to all capitals in case the user used lower case.
let upperCaseUserState = userState.toUpperCase();
 
//Creating the Array
let userArray = [upperCaseUserName, upperCaseUserState, userTemp];
 
//Creating message array
let messages = ["wear a warm coat, hat, scarf and gloves", "wear a warm coat but you won't need a hat, scarf or gloves", "wear your warmest coat, a warm hat, a scarf, and warm gloves", "wear a warm coat, hat and gloves. Maybe a scarf too" ]
 
//NSB.MsgBox() Outputs
if (upperCaseUserState === 'NE' && userTemp <= 32) {
NSB.MsgBox(upperCaseUserName+", "+messages[0])
} else if (upperCaseUserState === 'NE' && userTemp > 32 && userTemp <= 50) {
  NSB.MsgBox(upperCaseUserName+", "+messages[1])
} else if (upperCaseUserState === 'FL' && userTemp <= 50 && userTemp >= 32) {
  NSB.MsgBox(upperCaseUserName+", "+messages[2])
} else if (upperCaseUserState === 'FL' && userTemp > 50 && userTemp <= 70) {
  NSB.MsgBox(upperCaseUserName+", "+messages[3])
}