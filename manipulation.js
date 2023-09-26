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
    document.querySelector("#container").style.background = "black"
})
