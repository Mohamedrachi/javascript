//BMI TASK
let alimass = 78
let aliheight = 1.6

let mohamedmass = 91
let mohamedheight = 1.8

let aliBMI = alimass / (aliheight *aliheight)
let mohamedBMI = mohamedmass / (mohamedheight *mohamedheight)
console.log(aliBMI)
console.log(mohamedBMI)
let comparisonBMI = mohamedBMI > aliBMI
console.log(comparisonBMI)
//bill TASK
let bill = 305
if (bill > 50 && bill < 300){
    let tip = bill * 0.15
    console.log(`the bill was ${bill} and the tip is ${tip} and the total is ${bill + tip}`)
}else if(bill >= 300){
    let tip = bill * 0.2
    console.log(`the bill was ${bill} and the tip is ${tip} and the total is ${bill + tip}`)
}
// for loop
for(let i = 5 ; i>=0 ; i--){
    console.log("Hello")
}
//for loop (i want to console log numbers 1 to 10 using for loop)
 for(let i = 1; i <= 10; i++){
       console.log(i)
}
//for loop (i want to display 1 - 10 in reverse using for loop)
 for(i = 10; i >= 1; i--){
      console.log(i) 
 }
//for loop ( i want to display the 2 times table using a for loop)
for(i = 1; i <= 6; i++){
     console.log(i*2)
}
//while loop
i = 1
while(i <= 10){
  console.log(i)
  i++
}
//function declaration
function mohamedali(){
    console.log("hi legend")
}
mohamedali()
//function-parameters & arguments
function multiplyNumbers(){
    console.log(2*2)            // example
}
multiplyNumbers()

function keyboard(x,y){      // x and y are represented as arguments
    console.log(x * y)
}
keyboard(3,6)  // 3 and 6 are represented as a prameters
keyboard(5,5)

function displayName(firstName,secondName,lastname){
    console.log(`My full name is ${firstName} ${secondName} ${lastname}`)
}

displayName("mohamed","ali","hussein")
// functio-return keywoard
function book(year){
    return 2023-year      // after return no other thing will work it totally stop go back to your calling
}                        // return will send the output to where is called but you can't get out until u made log
let com = book(1998)
let ayan = book(1997)
console.log(com)
console.log(ayan)
if(com > ayan){
   console.log("she is greater than you")
}else{
    console.log("age is just number")
}
//functio example-1
function exam1(name,city){
    console.log(`my name is ${name} i live in ${city}`)
}
exam1("Ali","paris")
//function example-2
function number(number1){
     console.log(number1 * number1)
}
number(5)
number(9)
number(7)
// function-example-3
function sale(priceofitem,discountamount){
       console.log(`your final discount price is ${priceofitem - discountamount}`)
}
sale(32,0.15)
//function express
// FUNCTION DECLARATION
function sayHello(){
    console.log("Hello")
}                                  
sayHello()//difference btw f.expre and f.declart is in the calling function you can't the top of your function when we using f-declartion especially
//FUNCTION EXPRESSION
const sayHi = function(name){
    console.log("Hi"+name)// when you calling this function you will write the variable name
}
sayHi("ahmed")
//Arrow function
const hi = (name) =>{
    console.log(name)
}
hi("Abdi")