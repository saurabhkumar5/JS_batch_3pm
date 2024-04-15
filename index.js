const dadaji = document.querySelector('.dadaji');
const papaji = document.querySelector('.papaji');
const bachha = document.querySelector(".bachha");

  
// bachha.addEventListener("click",()=>{
//     console.log("you clicked on bachha")
// })

// papaji.addEventListener("click",()=>{
//     console.log("you clicked on papaji")
// })

// dadaji.addEventListener("click",()=>{
//     console.log("you clicked on dadaji")
// })

// document.body.addEventListener("click",()=>{
//     console.log("you clicked on document.body")
// })


  
// bachha.addEventListener("click",()=>{
//     console.log("you clicked on bachha")
// },true)

// papaji.addEventListener("click",()=>{
//     console.log("you clicked on papaji")
// },true)

// dadaji.addEventListener("click",()=>{
//     console.log("you clicked on dadaji")
// },true)

// document.body.addEventListener("click",()=>{
//     console.log("you clicked on document.body")
// },true)


dadaji.addEventListener("click",(e)=>{
    console.log(e.target)
})