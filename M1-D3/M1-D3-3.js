/*
ASSIGNMENT RULES
- All the answers must be in JavaScript
- You can google / use StackOverflow BUT we suggest you to use just the material provided
- You can ask for tutor's help
- You can test your code in a separate file or commenting the single parts in this file or directly in the Developer Console or in the Node Console.
*/

/* EXERCISE 1
Create and array with the first 5 positive numbers
*/
let numbers= [1, 2, 3, 4, 5];

console.log(numbers)



/* WRITE YOUR CODE HERE */

/* EXERCISE 2
Create an object containing your name, surname, email address and age.
*/
/*const student = {

    name: "Richard Johnson",
    surname: "Addai",
    age: 23,
    email: "richardstudent4@gmail.com",
    
}




/* WRITE YOUR CODE HERE */

/* EXERCISE 3
Add to the previously created object a boolean value to rappresent wheter you have or not a driving license*/

const student = {

    name: "Richard Johnson",
    surname: "Addai",
    age: 23,
    email: "richardstudent4@gmail.com",
    drivingLicense: "true"
}



if( student.drivingLicense===false){

  return console.log("You have bro")

}
 else

 {

    return console.log("Go and get it bro!!!")
 }


 console.log(student.drivingLicense)




/* EXERCISE 4
Remove from the previously created object the age*/

delete student.age



/* EXERCISE 5
Create a second object with name, surname, email address and verify that this object has a different email address
*/

const student = {

    name: "Richard Johnson",
    surname: "Addai",
    age: 23,
    email: "richardstudent4@gmail.com",
    
}


/*const student2= {

    name: "Richard Johnson",
    surname: "Addai",
    age: 23,
    email: "riccardocorona38@gmail.com",
    
}


if (student.email===student2.email)
{
   return console.log(true)
}
else{
   return console.log(false)
}


console.log(student.email)

/* WRITE YOUR CODE HERE */

/* EXERCISE 6
You are working for an eCommerce. In the variable totalShoppingCart you have the total amount spent by the current user.
In your eCommerce you have a promotion: if the customer shopping cart is more than 50€, they can have free shipping (otherwise it costs 10€).
Write an algorithm that calculate totalCost based on this assumption.*/


let totalShoppingCart = 10;

if( totalShoppingCart > 50 )
{
    return console.log("Free shipment")
}
else {
     return console.log(totalShoppingCart+10 + "€")
}

console.log(totalShoppingCart)



/* EXERCISE 7
You are working for the same eCommerce. Today is the black friday and everything has a 20% discount at the end of the purchase.
Modify the previous answer inserting this information and, applying the same rules for the shipping cost, calculate the totalShopping.*/



let totalShoppingCart = 100;

if( totalShoppingCart > 50 )
{
    return console.log("Free shipment"+" "+(totalShoppingCart-(totalShoppingCart*20/100))+"€")
}
else {
     return console.log("plus shipmento cost"+" "+(totalShoppingCart-(totalShoppingCart*20/100)) + "€")
}

console.log(totalShoppingCart)


/* EXERCISE 8
Create an object rapresenting a car with properties like brand, model, licensePlate.
After you create the first car, clone it and change the licensePlate without affecting the original car.
Do it for five cars.*/

const car={

    brand: "Ferrari",
  
    model: "Gatta bastarda",
  
    licensePlate: "logologos"
  
  }

  let car2= Object.assign({}, car)

  
   car2.licensePlate= "ioioio"

   

/* EXERCISE 9
Create a new array called carsForRent containing all the cars from the previous exercise*/

const carForRent= [car, car2]



/* EXERCISE 10
Remove the first and the last car from the carsForRent array.*/

carForRe.shift()




/* EXERCISE 11
Print in the console, the types of a single car, of the car licensePlate and of the brand
*/

let carsModel= [car.model, car2.model]

let carsLicensePlate=[car.licensePlate, car2.licensePlate]

let carsBrand=[car.brand, car2.brand]



/* EXERCISE 12
Create a new array called carsForSale and insert 3 cars in it.
Store in the variable totalCars the number of cars in both carsForSale and carsForRent arrays
*/

car3= Object.assign({}, car)

car4= Object.assign({}, car)

car5= Object.assign({}, car)

const  carsForSale= [car3, car4, car5];

const  carForRent= [car, car2]

const totalCars= [carForRent, carsForSale]


/* EXERCISE 13
Print in the console the data from each car in the carsForSale array*/

console.log(carsForSale)

/* WHEN YOU ARE FINISHED
Send the code on Discord via a message to your tutor! In the next days we'll also learn how to use GIT 
*/
