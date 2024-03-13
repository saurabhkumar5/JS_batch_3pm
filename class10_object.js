//   Object => key-value pair


    //  const obj  = {
    //         naam:"subham",
    //         rollNo : 15,
    //         hobbey : "playing cricket",
    //         study: "good student"
    //     }


        // 1. dot notation
        // console.log(typeof(obj))
        // console.log(obj.hobbey)

        // 2. bracket notation

        // console.log(obj["study"])

    // let arr = [[1,2],[5,6],[8,9]]

    //   let obj   = {
    //         name:"aniket",
    //         rollno:15,
    //         hobbey:"study",
    //         place:{
    //             country:"India",
    //             state:"HP",
    //             dist:"shimla",
    //             pincode:123
    //         }
    //       }

    //       console.log(obj.place.pincode)



    let obj = {
        name:"yashdeep",
        age:22,
        class:"mca",    //mca, ind,patiyala,galino.,houseno.
        address:{
            country:"ind",
            state:"panjab",
            dist:"patiyala",
            vill:{
                name: "hello",
                galino:123,
                houseno:12
            }

        }

    }

    // console.log(obj.class)
    // console.log(obj.address.country)
    // console.log(obj.address.dist)
    // console.log(obj.address.vill.galino)
    console.log(obj.address.vill.houseno)