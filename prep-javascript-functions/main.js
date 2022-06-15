function addTwoNumbers(num1, num2) {
  return num1 + num2;
}
var sum = addTwoNumbers(2, 2);
console.log(sum);

function convertHoursToMinutes(hours) {
  return hours * 60;
}
var minutes = convertHoursToMinutes(2);
console.log(minutes);

function getGreeting(name) {
  return 'Hello ' + name;
}
var greetings = getGreeting('World!');
console.log(greetings);

function addAndMultiplayBy5(num1, num2) {
  return (num1 + num2) * 5;
}
var addMultiply = addAndMultiplayBy5(10, 5);
console.log(addMultiply);

function multiplayAndDivideBy5(num1, num2) {
  return (num1 * num2) / 5;
}
var multiplyDivide = multiplayAndDivideBy5(35, 10);
console.log(multiplyDivide);

function subtractTwoNumbers(num1, num2) {
  return num1 - num2;
}
var subtract = subtractTwoNumbers(22, 7);
console.log(subtract);

function getCircleCircumference(radius) {
  return 2 * Math.PI * radius;
}
var circumference = getCircleCircumference(5);
console.log(circumference);

function getFullName(firstName, lastName) {
  return firstName + ' ' + lastName;
}
var fullName = getFullName('Yoon', 'Cho');
console.log(fullName);

function cube(number) {
  return Math.pow(number, 3);
}
var result = cube(5);
console.log(result);
