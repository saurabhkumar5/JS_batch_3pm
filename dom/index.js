
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



const btn = document.querySelectorAll('button')
   
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

btn.forEach(function(value){
        value.addEventListener('click',function(){
                console.log(this)
        })
})



    




