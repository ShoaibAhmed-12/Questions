// var students = [
//     {
//         name: "Ali",
//         marks: 70,
//         atten: true
//     },
//     {
//         name: "Ahmed",
//         marks: 85,
//         atten: true
//     },
//     {
//         name: "Zubair",
//         marks: 90,
//         atten: false
//     },
//     {
//         name: "Sara",
//         marks: 88,
//         atten: true
//     },
//     {
//         name: "Ayesha",
//         marks: 65,
//         atten: false
//     }
// ];
// for (var i = 0; i < students.length; i++){
//     console.log(students[i].name + " " + students[i].marks)

// }
// console.log(students[0].name);
// console.log(students[1].name);
// console.log(students[2].name);
// console.log(students[3].name);
// console.log(students[4].name);



// var students = [
//     {
//         name: "Ali",
//         marks: 70,
//         atten: true
//     },
//     {
//         name: "Ahmed",
//         marks: 85,
//         atten: true
//     },
//     {
//         name: "Zubair",
//         marks: 90,
//         atten: false
//     },
//     {
//         name: "Sara",
//         marks: 88,
//         atten: true
//     },
//     {
//         name: "Ayesha",
//         marks: 65,
//         atten: false
//     }
// ];
// for ( var i = 0; i < students.length; i++){
//     if(students[i].marks > 80){
//         console.log(students[i].name)
//     }
// }



// var students = [
//     {
//         name: "Ali",
//         marks: 70,
//         atten: true
//     },
//     {
//         name: "Ahmed",
//         marks: 85,
//         atten: true
//     },
//     {
//         name: "Zubair",
//         marks: 90,
//         atten: false
//     },
//     {
//         name: "Sara",
//         marks: 88,
//         atten: true
//     },
//     {
//         name: "Ayesha",
//         marks: 65,
//         atten: false
//     }
// ];
// var totalMarks = 0;
// for ( var i = 0; i < students.length; i++){
//    totalMarks = totalMarks + students[i].marks
// }
// console.log(totalMarks)

// var students = [
//         {
//             name: "Ali",
//             marks: 70,
//             atten: true
//         },
//         {
//             name: "Ahmed",
//             marks: 85,
//             atten: true
//         },
//         {
//             name: "Zubair",
//             marks: 90,
//             atten: false
//         },
//         {
//             name: "Sara",
//             marks: 88,
//             atten: true
//         },
//         {
//             name: "Ayesha",
//             marks: 65,
//             atten: false
//         }
//     ];
//     var totalMarks = 0;
//     for ( var i = 0; i < students.length; i++){
//        totalMarks = totalMarks + students[i].marks
//     }
//     var average = totalMarks / students.length;
//     console.log(totalMarks)
//     console.log(average)





// var products = [
//     {
//         id: 101,
//         brand: "Xiaomi",
//         Title: "Earhpones",
//         variations: [
//             { id: 1, color: "Black", quantity: 10 },
//             { id: 2, color: "White", quantity: 15 },
//             { id: 3, color: "Blue", quantity: 7 }
//         ],
//         price: 2000
//     },
//     {
//         id: 102,
//         brand: "Samsung",
//         Title: "Earhpones",
//         variations: [
//             { id: 1, color: "Black", quantity: 20 },
//             { id: 2, color: "White", quantity: 25 },
//             { id: 3, color: "Green", quantity: 27 }
//         ],
//         price: 3500
//     },
//     {
//         id: 103,
//         brand: "Apple",
//         Title: "Earhpones",
//         variations: [
//             { id: 1, color: "Black", quantity: 20 },
//             { id: 2, color: "White", quantity: 30 }
//         ],
//         price: 2000
//     }
// ];

// var totalQuantity = 0;

// for (var i = 0; i < products.length; i++) {
//     for (var j = 0; j < products[i].variations.length; j++) {
//         totalQuantity += products[i].variations[j].quantity;
//     }
// }

// console.log(totalQuantity);





// var companies = [
//     {
//       name: "Samsung",
//       phones: [
//         { model: "A15", stock: 10 },
//         { model: "A25", stock: 15 }
//       ]
//     },
//     {
//       name: "Apple",
//       phones: [
//         { model: "iPhone 13", stock: 5 },
//         { model: "iPhone 14", stock: 8 },
//         { model: "iPhone 15", stock: 12 }
//       ]
//     },
//     {
//       name: "Xiaomi",
//       phones: [
//         { model: "Redmi 12", stock: 20 }
//       ]
//     }
//   ];
//   var totalQuantity = 0;
//   for (var i = 0; i < companies[0].phones.length; i++) {
//     totalQuantity += companies[0].phones[i].stock;
// }

//   console.log(totalQuantity)
//   var totalQuantity = 0;
//   for (var i = 0; i < companies[1].phones.length; i++) {
//     totalQuantity += companies[1].phones[i].stock;
// }

//   console.log(totalQuantity)
//   var totalQuantity = 0;
//   for (var i = 0; i < companies[2].phones.length; i++) {
//     totalQuantity += companies[2].phones[i].stock;
// }

//   console.log(totalQuantity)


  
//   for(var i = 0; i < companies.length; i++){
//     for( var j = 0; j < companies[i].phones.length;j++){

//         totalQuantity += companies[i].phones[j].stock;
//     }
//   }
//   console.log(totalQuantity)



// var cinemas = [
//     {
//       name: "Cinema 1",
//       movies: [
//         { title: "Movie A", seats: 120 },
//         { title: "Movie B", seats: 80 }
//       ]
//     },
//     {
//       name: "Cinema 2",
//       movies: [
//         { title: "Movie C", seats: 150 },
//         { title: "Movie D", seats: 100 },
//         { title: "Movie E", seats: 90 }
//       ]
//     }
//   ];
//    totalsets = 0;
//   for (i = 0; i < cinemas.length; i++){
//    totalsets += cinemas[0].movies[i].seats
//   }
//   console.log(totalsets)









  
// var cinemas = [
//     {
//       name: "Cinema 1",
//       movies: [
//         { title: "Movie A", seats: 120 },
//         { title: "Movie B", seats: 80 }
//       ]
//     },
//     {
//       name: "Cinema 2",
//       movies: [
//         { title: "Movie C", seats: 150 },
//         { title: "Movie D", seats: 100 },
//         { title: "Movie E", seats: 90 }
//       ]
//     }
//   ];
//    totalsets = 0;

//    for (i = 0; i < cinemas.length; i++){
//       totalsets += cinemas[1].movies[i].seats
//    }
//    console.log(totalsets)







   
  
// var cinemas = [
//     {
//       name: "Cinema 1",
//       movies: [
//         { title: "Movie A", seats: 120 },
//         { title: "Movie B", seats: 80 }
//       ]
//     },
//     {
//       name: "Cinema 2",
//       movies: [
//         { title: "Movie C", seats: 150 },
//         { title: "Movie D", seats: 100 },
//         { title: "Movie E", seats: 90 }
//       ]
//     }
//   ];
//    totalsets = 0;

//    for(var i = 0; i < cinemas.length; i++){
//     for(var j = 0;j <cinemas[i]. movies.length; j++){
//         totalsets += cinemas[i].movies[j].seats
//     }
//    }
//    console.log(totalsets)

// for (var i = 0; i < products.length; i++) {
//     for (var j = 0; j < products[i].variations.length; j++) {
//         totalQuantity += products[i].variations[j].quantity;
//     }
// }

// console.log(totalQuantity);
   




//   for(var i = 0; i < companies.length; i++){
//     for( var j = 0; j < companies[i].phones.length;j++){

//         totalQuantity += companies[i].phones[j].stock;
//     }
//   }
//   console.log(totalQuantity)




// var libraries = [
//     {
//       name: "Library A",
//       books: [
//         { title: "Math", copies: 5 },
//         { title: "Science", copies: 7 }
//       ]
//     },
//     {
//       name: "Library B",
//       books: [
//         { title: "English", copies: 10 },
//         { title: "Urdu", copies: 8 }
//       ]
//     }
//   ];

//   totalbooks = 0;
//   for(i = 0; i < libraries.length; i++){
//     totalbooks += libraries[1].books[i].copies
//   }
//   console.log(totalbooks)




//   var libraries = [
//     {
//       name: "Library A",
//       books: [
//         { title: "Math", copies: 5 },
//         { title: "Science", copies: 7 }
//       ]
//     },
//     {
//       name: "Library B",
//       books: [
//         { title: "English", copies: 10 },
//         { title: "Urdu", copies: 8 }
//       ]
//     }
//   ];

//   totalbooks = 0;
//   for(i = 0; i < libraries.length; i++){
//    for(var j = 0; j < libraries[i].books.length; j++){
//     totalbooks += libraries[i].books[j].copies
//    }
//   }
//   console.log(totalbooks)



//  var school = [
//         {
//           class: "7A",
//           students: [
//             { name: "Ali", marks: 80 },
//             { name: "Ahmed", marks: 70 },
            
//           ]
//         },
//         {
//           class: "7B",
//           students: [
//             { name: "Sara", marks: 90 },
//             { name: "Ayesha", marks: 85 },
//             { name: "Hamza", marks: 75 }
//           ]
//         },
//         {
//             class: "7B",
//             students: [
//               { name: "Sara", marks: 90 },
//               { name: "Ayesha", marks: 85 },
//               { name: "Hamza", marks: 75 }
//             ]
//           }
//       ];
    
//       totalMarks = 0;
//       for(var i =0; i < school.length; i++){
//         for(j = 0; j <school[i].students.length; j++)
//         totalMarks += school[i].students[j].marks
//       }
//       console.log(totalMarks)

// var school = [
//     {
//         class: "7A",
//         students: [
//             { name: "Ali", marks: 80 },
//             { name: "Ahmed", marks: 70 }
//         ]
//     },
//     {
//         class: "7B",
//         students: [
//             { name: "Sara", marks: 90 },
//             { name: "Ayesha", marks: 85 },
//             { name: "Hamza", marks: 75 }
//         ]
//     },
//     {
//         class: "7C",
//         students: [
//             { name: "Sara", marks: 90 },
//             { name: "Ayesha", marks: 85 },
//             { name: "Hamza", marks: 75 }
//         ]
//     }
// ];

// for (var i = 0; i < school.length; i++) {

//     var totalMarks = 0;   // Har class ke liye reset

//     for (var j = 0; j < school[i].students.length; j++) {
//         totalMarks += school[i].students[j].marks;
//     }

//     console.log(school[i].class + " = " + totalMarks);
// }


// var school = [
//     {
//         class: "7A",
//         students: [
//             { name: "Ali", marks: 80 },
//             { name: "Ahmed", marks: 70 }
//         ]
//     },
//     {
//         class: "7B",
//         students: [
//             { name: "Sara", marks: 90 },
//             { name: "Ayesha", marks: 85 },
//             { name: "Hamza", marks: 75 }
//         ]
//     },
//     {
//         class: "7C",
//         students: [
//             { name: "Sara", marks: 90 },
//             { name: "Ayesha", marks: 85 },
//             { name: "Hamza", marks: 75 }
//         ]
//     }
// ];

// var grandTotal = 0; // Sab classes ka total

// for (var i = 0; i < school.length; i++) {

//     var totalMarks = 0; // Har class ka total

//     for (var j = 0; j < school[i].students.length; j++) {
//         totalMarks += school[i].students[j].marks;
//     }

//     console.log(school[i].class + " = " + totalMarks);

//     grandTotal += totalMarks; // Har class ka total grand total mein add
// }

// console.log("Grand Total = " + grandTotal);







    //    for(var i =0; i < school[0].students.length; i++) {
    //         totalMarks += school[0].students[i].marks;
    //         console.log("hello")
    //      }
    //      console.log(totalMarks)
















//var school = [
//     {
//       class: "7A",
//       students: [
//         { name: "Ali", marks: 80 },
//         { name: "Ahmed", marks: 70 },
        
//       ]
//     },
//     {
//       class: "7B",
//       students: [
//         { name: "Sara", marks: 90 },
//         { name: "Ayesha", marks: 85 },
//         { name: "Hamza", marks: 75 }
//       ]
//     },
//     {
//         class: "7B",
//         students: [
//           { name: "Sara", marks: 90 },
//           { name: "Ayesha", marks: 85 },
//           { name: "Hamza", marks: 75 }
//         ]
//       }
//   ];

 
//  var totalMarks = 0;

//  for(var i =0; i < school.length; i++) {
//     totalANYone = 0
//     for(var j = 0; j < school[i].students.length;j++)
//     totalMarks += school[i].students[j].marks;
//  }
//  console.lo
//  console.log(totalMarks)



//   var school = [
//     {
//       class: "7A",
//       students: [
//         { name: "Ali", marks: 80 },
//         { name: "Ahmed", marks: 70 }
//       ]
//     },
//     {
//       class: "7B",
//       students: [
//         { name: "Sara", marks: 90 },
//         { name: "Ayesha", marks: 85 },
//         { name: "Hamza", marks: 75 }
//       ]
//     }
//   ];

//  var toMarks = 0;
//  for(i = 0; i < school.length; i++){
//     toMarks += school[1].students[i].marks
//  }
//   console.log( "7b " + toMarks +" marks" )
  


  
//   var school = [
//     {
//       class: "7A",
//       students: [
//         { name: "Ali", marks: 80 },
//         { name: "Ahmed", marks: 70 }
//       ]
//     },
//     {
//       class: "7B",
//       students: [
//         { name: "Sara", marks: 90 },
//         { name: "Ayesha", marks: 85 },
//         { name: "Hamza", marks: 75 }
//       ]
//     }
//   ];

//  var totalMarks = 0;
//  for ( i = 0; i < school.length; i++){
//     for(j = 0; j <school[i].students.length; i++){
//         totalMarks += school[i].students[j].marks
//     }
//  }
//  console.log(toMarks)


var products = [
    {
        id: 101,
        title: "Apple AirPods (3rd Generation)",
        description: "Wireless earbuds with spatial audio and long battery life.",
        price: 24999,
        variations: [
            { color: "white", quantity: 6 },
            { color: "black", quantity: 4 }
        ],
        reviews: [
            {
                id: 110,
                comment: "Amazing sound quality and battery life.",
                rating: 4.8,
                date: "02/08/2026",
                status: true
            },
            {
                id: 111,
                comment: "A little expensive but worth it.",
                rating: 4.4,
                date: "02/08/2026",
                status: false
            },
            {
                id: 112,
                comment: "Fit could be better.",
                rating: 3.8,
                date: "02/08/2026",
                status: true
            }
        ]
    },
    {
        id: 102,
        title: "Samsung Galaxy Buds2 Pro",
        description: "Premium wireless earbuds with active noise cancellation.",
        price: 19999,
        variations: [
            { color: "graphite", quantity: 5 },
            { color: "white", quantity: 5 },
            { color: "purple", quantity: 5 }
        ],
        reviews: [
            {
                id: 120,
                comment: "Excellent noise cancellation.",
                rating: 4.7,
                date: "02/08/2026",
                status: true
            },
            {
                id: 121,
                comment: "Very comfortable to wear.",
                rating: 4.6,
                date: "02/08/2026",
                status: true
            },
            {
                id: 122,
                comment: "Battery could last longer.",
                rating: 3.9,
                date: "02/08/2026",
                status: true
            }
        ]
    },
    {
        id: 103,
        title: "Sony WH-1000XM5",
        description: "Industry-leading wireless noise-canceling headphones.",
        price: 42999,
        variations: [
            { color: "black", quantity: 5 },
            { color: "silver", quantity: 3 }
        ],
        reviews: [
            {
                id: 130,
                comment: "Best headphones I've ever owned.",
                rating: 5.0,
                date: "02/08/2026",
                status: true
            },
            {
                id: 131,
                comment: "Outstanding sound quality.",
                rating: 4.9,
                date: "02/08/2026",
                status: true
            },
            {
                id: 132,
                comment: "Price is a bit high.",
                rating: 4.2,
                date: "02/08/2026",
                status: true
            }
        ]
    },
];
var reviewsCount = 0;

for (var i = 0; i < products.length; i++) {

    const prodct = products[i];
    reviewsCount = prodct.reviews.length;
    var totalReviews = 0;
    
    for (var j = 0; j < prodct.reviews.length; j++) {
        totalReviews += prodct.reviews[j].rating;
    }
    
    var avrage = totalReviews / reviewsCount;
    
    console.log(`Product ${prodct.id} = ${avrage} (${reviewsCount} )`);
}

console.log(avrage)
// var reviewsCount = 0; // Sab classes ka total

// for (var i = 0; i < products.length; i++) {

//     const prodct = products[i]; // Har class ka total
//     var reviewsCount = prodct.reviews.length
//     var totalReviews =0

//     for (var j = 0; j <  products.reviews.length; j++) {
//         totalReviews += products.reviews[j].rating;
//     }


//  var avrage = totalReviews / reviewsCount
//  console.log(`prodct ${products.id} = ${avrage}(${reviewsCount})`)
// }

