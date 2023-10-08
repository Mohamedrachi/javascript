//selecting elements
document.getElementById("heading").innerText = "keep"
//document.getElementsByClassName("hallow").style.color = "blue"
document.getElementById("heading").style.fontSize = "60px"
document.querySelector("#heading").style.color = "red"
document.querySelector(".hallow").style.color = "blue"
//Event LISTENERS
// document.querySelector("#sumbit").addEventListener("click",function(){
//     console.log("Hello")
// })
document.querySelector("#sumbit").addEventListener("click",function(){
    document.getElementById("heading").style.color = "yellow"
    document.querySelector("#ali").style.background = "black"
})

// can i drive (small application)
document.querySelector("#check").addEventListener("click",function(){
    //1. the value from the textbox
   let age =  document.querySelector("#input").value
    //2. condition age >= 18  =>  background green
   //   age < 18  =>   background red
   if( age >= 18){
    document.getElementById("con1").style.background = "green"
    }else {
        document.getElementById("con1").style.background = "red"
   }


})
// BMI APP
document.querySelector("#b2").addEventListener("click",function(){
    let height =  document.querySelector("#in1").value
    let mass =  document.querySelector("#in2").value
    let BMI =  mass / (height * height)
    
    document.querySelector("#bmi").innerText = `Your BMI is ${BMI}`
})
//calculate tip dom exercise
document.querySelector("#b3").addEventListener("click",function(){
    let bill = document.querySelector("#in4").value
    if(bill > 50 && bill <= 250){
        let tip = bill * 0.15 
        document.querySelector("#result").innerText = `your bill is ${bill} and your tip is ${tip}
        total is ${bill + tip}`
    }else if(bill > 300 ){
        let tip = bill * 0.2
        document.querySelector("#result").innerText = `your bill is ${bill} and your tip is ${tip}
        total is ${bill + tip}`
        
    }
})
//adding new elements in html using dom
let h3 = document.createElement("h3")

h3.innerText = "Apple"

document.querySelector("#list").appendChild(h3)
// adding new student
document.querySelector("#but").addEventListener("click",function(){
    let name = document.querySelector("#add8").value
   let li = document.createElement("li")
   li.innerText = name
   document.querySelector("#student").appendChild(li)
})
//adding element class inside html using dom
document.querySelector("#add1").addEventListener("click",function(){
    document.querySelector("#header").classList.add("yellow")
})
document.querySelector("#remove").addEventListener("click",function(){
    document.querySelector("#header").classList.remove("yellow")
})
// To Do List Assignment
document.querySelector("#add9").addEventListener("click",function(){
    let to = document.querySelector("#inpud").value
    let in4 =  document.createElement("div")
    in4.innerText = to
    in4.classList.add("task")
    document.querySelector(".tasks").appendChild(in4)
})



