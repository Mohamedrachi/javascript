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
    document.getElementById("container").style.background = "green"
    }else {
        document.getElementById("container").style.background = "red"
   }


})
// BMI APP
document.querySelector("#b2").addEventListener("click",function(){
    let height =  document.querySelector("#in1").value
    let mass =  document.querySelector("#in2").value
    let BMI =  mass / (height * height)
    
    document.querySelector("#bmi").innerText = `Your BMI is ${BMI}`
})