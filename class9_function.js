


// types of function
// 1. simple function
// 2. arrow function
// 3. callback function
// 4. self invoking function
// 5. closure function
// 6. function hosting
// 7. generator function
// 8. async  await function
// 9. function constructor
// 10. recursive function
// 11. lexical environment
// 12. inner function
// 13. promises
// 14. callback hell
// 15. high order function



// 1. normal function

        // function Momo(){

        //     console.log("hello");
            
        // }

        // Momo();
        // Momo();
        // Momo();


        // function Add(a,b,c){
        //     console.log(a+b);
        //     console.log(a-b);
        //     console.log(a*b);
        //     console.log(a/b);
        // }

        // Add(4,5);

        // function Sub(x,y){
        //     console.log("subraction",x-y)
        // }
        // Sub(5,2)
        // Sub(10,30)





        // function kullu(x,y,z){
        //     console.log(x,y);
        //     for(let a of z){
        //         console.log(a)
        //     }
        // }
        // kullu("manali",12,["spiti",10,true]);


    //  const value  = function (age){
             
    //         return age;
    //     }
    //          const a  = value(110)
    //           if(a>18){
    //             console.log("you can travel outside")
    //           }
    //           else{
    //             console.log("you cant travel outside")
    //           }


    //           if(a>10){
    //             console.log("you can play video games")
    //           }
    //           else{
    //             console.log("you cant play video game")
    //           }
        




    //  function Greet(a,b){

    //   console.log(a+b)
    //   return "kullu"
    //  }
       
    // //  console.log(Greet("welcome"));
    //    let age  = Greet(4,5)
    //    console.log(age)
    //    if(age>5){
    //     console.log("hello")
    //    }

        
       

    // function naam(a,b,c){
       
    //     // console.log(a+b+c)
   
    //   return a+b+c
    // }
        
    //   const z  = naam(4,5,6);

    //   console.log(z)
      // if(z>12){
      //   console.log("hello")
      // }

      // for(let i = 0; i<z;i++){
      //   console.log(i)
      // }



    // let a  = function (){
    //     console.log("hello")
    //    }

    //    a()

    // let a = function(){

    //   return "mannat ,vidyanand khusi, arshdeep"
    // }

    // // console.log(a())
    // let b  = a()
    // console.log(b)

     
    //***** */ 3. arrow function

          //  const a = ()=>{
          //          console.log("hello")
          //    }
          //    a()


          //  const age  = ()=>{
            
          //           return "hello";
          //           console.log("kullu")
                    
                    
          //     }   

          //      const b  = age()
          //      console.log(b)




      //  const a  = ()=>console.log("hello");
      //             a();

            //  const age = ()=>"sanju"
                     
            //   const a  = age()
            //   console.log(a)


          //  var a  = (a,b)=>a+b
          //      const b  = a(5,60)
          //      console.log(b)



          // function table(n){
          //   for(let i = 1;i<=10;i++){
          //     console.log(i*n)
          //   }
          // }
          //     table(2) 
          //     table(3)
          //     table(4)
         
        

// 4 self invoking function

    //  (
    //   function (a){
    //     console.log("kullu",a)
    //   }
    //  )(2)


    // 3. callback function
// let a  = function(){
//   console.log("hello")
// }


      //  function app(a){
      //   // console.log(a)
      //     a()

      //   console.log("hello")
      //  }


      // //  app(123)
      // // app("manali")
      // app(function (){console.log("khusi")})
      

  //     function bulbul(a){
  //             a()
  //         console.log("delhi")
  //     }
  //  let b  = ()=>console.log("good")

  //     bulbul(b)