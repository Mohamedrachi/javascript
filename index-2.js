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
//exercise-1
function dog(puppysage){
   console.log(`your dog ${puppysage * 7} years old in dog years!`)
}
let dog1 = dog(8)

//exercise-2
function calculateSupply(age,amountperday){
       console.log(`You will need ${age * amountperday} to last you until the old age of ${age}`)
}
calculateSupply(45,4)
calculateSupply(34,5)
calculateSupply(21,3)
//exercise-3
function calcTip(bill){
   if(bill > 50 || bill < 300){
    let tip = bill*0.15
     console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}'`)
   }else if(bill >=300){
    let tip = bill*0.15
    console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}'`)
}
}
calcTip(200)
calcTip(329)
//objects
const car = {
    color:"Black",
    year:2022,
    brand:"Toyota"
}
console.log(car)
console.log(car["brand"])     // two ways you can console in values in object car!
console.log(car.year)
// OBJECT FUNCTION
const Car = {
    color:"Black",
    year:2022,
    brand:"Toyota",
    description: function(){
        return `My cars color is ${this.color} and its brand is ${this.brand}`
    }
}
let text = Car.description()
console.log(text)                    //two ways you can console in values in object car!
console.log(Car.description())
//Arrays
let student1 = "Ahmed"
let student2 = "Ali"
let stundet3 = "Faadumo"

                 //0      1      2       3   index values
let students = ["Ahmed","Ali","Faadumo",34]   // array
console.log(students)
console.log(students[0])            //the  way u can log array one by one using theirs index
console.log(students[2]) 
//loop through array
const names = ["Ali","Ahmed","Aisha","Faadumo","Amina","Hassan"]

for(let i=0; i <6; i++){
    console.log(names[i])
}

const Names = ["Ali","Ahmed","Aisha","Faadumo","Amina","Hassan","Jamac"]

for(let i=0; i < Names.length; i++){ // Names.length TELLS US HOW MANY VALUES ARE IN MY ARRAY
    console.log(`Hello my name is ${Names[i]}`)
}
//JS FUNDAMENTLS ASSIGNMENT
//FUNCTIONS
function describeCountry(country,population,capitalCity){
         console.log(`${country} has ${population} million people and its captial city is ${capitalCity}'`)
}
describeCountry("puntland",5,"garawe")

let turkey = describeCountry("TURKEY",200,"ankara")
let plestine = describeCountry("plestine",300,"GHAZA")
let othmanempire = describeCountry("othman",500,"Adirna")
console.log(turkey&plestine&othmanempire)

function percentageOfWorld1(country,population){
     console.log(`${country} has ${population} million people, so it's about ${population/7900*100} of the world population`)
}
percentageOfWorld1("china",1441)

let canada = percentageOfWorld1("canada",1200)
let malawi = percentageOfWorld1("malawi",1000)
let zambia = percentageOfWorld1("zambia",500)
console.log(canada&malawi&zambia)
//introduction to arrys
let population = ["china:200","canada:300","croatia:100","germany:50"]

let neighbours = ["ithopia","kenya","erteria","djabuti"]
console.log(neighbours.length)
//iteration for loops
for(let i = 0; i < 4; i++){
     console.log(neighbours[i])
}

for( i = 3; i >= 0; i--){
    console.log(neighbours[i])
}
//iteration while loop
let x = 0

while(x <= 9  ){
    console.log(x)
    x++
    
}

let y = 1
while(y <= 10){
    console.log(y)
    y++
}