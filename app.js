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


var products = [
    {
        id: 101,
        brand: "Xiaomi",
        Title: "Earhpones",
        variations: [
            {id: 1, color: "Black", quantity: 10},
            {id: 2, color: "White", quantity: 15},
            {id: 3, color: "Blue", quantity: 7}
        ],
        price: 2000 
    },
    {
        id: 102,
        brand: "Samsung",
        Title: "Earhpones",
        variations: [
            {id: 1, color: "Black", quantity: 20},
            {id: 2, color: "White", quantity: 25},
            {id: 3, color: "Green", quantity: 27}
        ],
        price: 3500 
    },
    {
        id: 103,
        brand: "Apple",
        Title: "Earhpones",
        variations: [
            {id: 1, color: "Black", quantity: 20},
            {id: 2, color: "White", quantity: 30}
        ],
        price: 2000 
    },
];
  var totalQuantity = 0;
// console.log(products[0].variations[0].quantity)
// console.log(products[1].variations[1].quantity)
for(i = 0; i<products.variations.length;i++){
   totalQuantity = totalQuantity + products[i].variations.quantity
}
console.log(totalQuantity)