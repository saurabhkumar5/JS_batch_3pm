
// 1.getElementByid
          
        //   const naam  =  document.getElementById('kullu')
        //   console.log(naam);

//  2.getElementByTagname

                //  let momo   = document.getElementsByTagName('h1')
                //  console.log(momo)


// 3. getElementclassName

                    // let momo = document.getElementsByClassName('momo')
                    // console.log(momo)



// 4. querySelector

                // const value  = document.querySelectorAll('.momo')
                // console.log(value);


            
        //        const value  = document.querySelector('.child')
        //             const a   = value.previousElementSibling;
        //             console.log(a)


//     manipulation

        //    const a  =  document.querySelector('h1')
                  
        //    a.innerHTML = "shimlaa"
        //    a.style.backgroundColor = "red"
        // //    a.style.fontSize = '200px'
        //     a.classList.add('simran')
            
        //     a.classList.replace('simran','shimla')
        //     console.log(a)


//       create elements 

                
        //     const a   =  document.createElement('h1')
        //           a.innerHTML = "most welcome"
        //          console.log(a)



        //          const b  =  document.querySelector('.momo')
        //                b.appendChild(a)
        //          console.log(b)
           


        //addeventlistener

        // const btn = document.querySelector('button')
        // const h1 = document.querySelector('h1')

        //      btn.addEventListener('click',function(){
                
        //         h1.style.backgroundColor = "green"
                
        //      })


// const btn = document.querySelector('button')
// const h1 = document.querySelector('h1')

// let a = true; 

// btn.addEventListener('click', function(){
//     if (isGreen) {
//         h1.style.backgroundColor = ""
//     } else {
//         h1.style.backgroundColor = "green"
//         h1.style.textAlign = 'center'
//     }
//     a = !a;
// })



// const bulbswitch = document.querySelector('#bulbswitch')
// const bulb = document.querySelector('#bulb');

// //       bulb.src = './bulbon.jpg';
// // console.log(bulb.src)

//     bulbswitch.addEventListener('click',()=>{
//         if(bulb.src.match('off')){
//                 bulb.src = './bulbon.jpg'
//          }
//          else{
//                 bulb.src = './bulboff.jpg'
//          }
//     })



// const btn = document.querySelectorAll('button')
   
//    for(let button of btn){
//           button.addEventListener('click',function(){
//                 console.log(this.textContent)
//           })
//    }

//   for(let i = 0; i<btn.length;i++){
//          btn[i].addEventListener('click',function(){
//                 console.log(this)
//          })
//   }




// btn.forEach(function(value){
//         value.addEventListener('click',function(){
//                 console.log(this)
//         })
// })


//  const btn = document.querySelectorAll('button')

// //   console.log(btn)

//      btn.forEach(value=>{
//         value.addEventListener("click",(ankite)=>{
//                 // console.log(e.target)
//                 ankite.target.style.backgroundColor = "red"
//         })
//      })
    



//       const btn = document.querySelector("button");
     
//          const body = document.body

//          function color(){

//                const red =  Math.floor(Math.random()*256);
//                const green =  Math.floor(Math.random()*256);
//                const blue =  Math.floor(Math.random()*256);
//         //        console.log(red,green,blue)

//                const momo = `rgb(${red},${blue},${green})`
//         //        console.log(momo)

//                return momo
               
//          }
  
//            btn.addEventListener('click',()=>{
//              const c  = color()
//              body.style.backgroundColor = c
//            })


//     1.click
//     2.keypress event
//     3.mouseover event

//        const body = document.body;
//        body.addEventListener('keypress',(e)=>{
//         console.log(e.key)
//        })

        // const btn = document.querySelector('.btn')

        // btn.addEventListener('mouseover',(e)=>{
        //         console.log(e)
        // })

//     4. mouseleave event

       

     const dadaji = document.querySelector(".dadaji")
     const papaji = document.querySelector(".papaji")
     const child = document.querySelector(".bachha")
     const body = document.body

//      child.addEventListener('click',()=>{
//         console.log("hello child")
//      },true)


//      papaji.addEventListener('click',()=>{
//         console.log("hello papaji")
//      },true)


//      dadaji.addEventListener('click',()=>{
//         console.log("dadaji")
//      },true)


//      body.addEventListener('click',()=>{
//         console.log("hello body")
//      },true)



// child.addEventListener('click',()=>{
//         console.log("hello child")
//      })


//      papaji.addEventListener('click',()=>{
//         console.log("hello papaji")
//      })


//      dadaji.addEventListener('click',()=>{
//         console.log("dadaji")
//      })


//      body.addEventListener('click',()=>{
//         console.log("hello body")
//      })



// event delegation

    dadaji.addEventListener("click",(e)=>{
        console.log(e.target)
    });