// let box=document.getElementById("box")
// fetch("https://fakestoreapi.com/products")
// .then(res=>res.json())
// .then(res=>{
//     console.log(res)
//     res.map(index=>{
//         if(index.rating.rate>4){
//             box.innerHTML+=`
//             <div class="card">
//             <h1>${index.title}</h1>
//             <img width="100px" heigth="100px" src="${index.image}"/>
//             <span>${index.price}</span>
//             <br/>
//             <span>${index.rating.rate}</span>
//             </div>
//         `
//         }else{

        
            
//               box.innerHTML+=`
//             <div class="card">
//             <h1>${index.title}</h1>
//             <img width="100px" heigth="100px" src="${index.image}"/>
//             <span>${index.price}</span>
//             <br/>
//             <span>${index.rating.rate}</span>
//             </div>
//         `
//        }
//     })
// })










// let x="yusif"
// fetch("https://fakestoreapi.com/products",{
//     method:"POST",
//     body:JSON.stringify(x)
// })
// .then(res=>res.json())
// .then(res=>console.log(res))







// let box=document.getElementById("box")
// let input=document.getElementById("input")
// let btn=document.getElementById("btn")


//  let a=input.value
   
//     btn.addEventListener("click",()=>{
//         fetch(`https://restcountries.com/v3.1/name/${input.value}`)
       
//         .then(res=>res.json())
//          .then(res=>{
//         console.log(res[0])
            
           
     
//      box.innerHTML +=`<span>${res[0].name.common}   <br/>  </span><img width=100px heigth=100px src="${res[0].flags.svg}" />`
    
//     })  
    
// })












let box=document.getElementById("box")
let input=document.getElementById("input")
let btn=document.getElementById("btn")


 let a=input.value
   
    btn.addEventListener("click",()=>{
        fetch(`https://api.weatherapi.com/v1/current.json?key=e1e3ab5ebeb54159af2125823211608%20&q=${input.value}&aqi=yes}`)
       
        .then(res=>res.json())
         .then(res=>{
          
         
            
           
     
     box.innerHTML =`<div class="div"><span><h3 class="h3">${res.location.name} </h3 > ${res.location.localtime} </br>${res.current.temp_c} ${res.current.condition.text}</span><img  src="${res.current.condition.icon}" /></div>`
    
    })  
    
})

