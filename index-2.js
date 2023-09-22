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



