
let name = "John" // use this one 
var name2 = "Mary"
const pi = 3.142 // assigned only once 

function greet(full_name,age) {
  console.log("Hello! " + full_name + "and age is " + age)
}

function add(a,b) {
  return a+b 
  console.log("This does not matter!")
}

greet("John Doe",23) // calling greet function 

console.log(add(4,5)) 


let result = add(3,4)
console.log(result)

// array/list names should be plural. It is a good practice 
let numbers = [3,4,5,6,12]

numbers[0]
numbers[1]
numbers[2]

console.log("Printing the contents of the numbers array")
// for loop 
// for (start index; condition for ending; how to increment)
for(let index = 0; index < numbers.length; index++) {
  console.log(index)
  console.log(numbers[index])
}

// while 
let count = 0 
while(count < 10) {
  count++
  // break keyword is used to break/end the loop 
}

// conditions 
let age = 30 

if(age > 20) {
  console.log("age is greater than 20")
} else {
  console.log("age is less than 20")
}

// else if 

if(age > 20) {

} else if(age < 10) {

} else {

}


// && means and 
if(age > 20 && name == "john") {

}

// || is or operator 
if(age > 20 || name == "john") {

}

// classes and objects 

// In JS there are no classes. behind the scene they are just functions
function Car() {
  this.make = "Honda"
  this.model = "Accord"
}

function driveCar() {
  console.log("car is driving")
}

function brakeCar() {
  console.log("brake car")
}

Car.prototype.brake = brakeCar
Car.prototype.drive = driveCar 


// creating object of Car class 

let car4 = new Car() 


let car = new Car(); 
console.log(car)
car.drive()

let car1 = new Object() 
car1.drive = function() {
  console.log("car driving")
}

let car2 = new Object()  // creating js empty object 
let car3 = {} // creating js empty object

console.log(car2)














