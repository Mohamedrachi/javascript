// fetching data from API
fetch("http://api.fikrcamp.com/student")
.then((res)=>{
  //code  
  return res.json()
})
.then((data)=>{
   //code 
   console.log(data)
})
.catch(()=>{
    console.log("error")
})