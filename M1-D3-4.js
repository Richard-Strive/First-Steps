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

const myArray = [ 1, 2, 3, 4, 5 ];

console.log(myArray[ 2 ])

/* EXERCISE 2
Create an object containing your name, surname, email address and age.
*/

const student = {

    name: "Richard Johnson",
    surname: "Addai",
    age: 23,
    email: "richardstudent4@gmail.com",
    

}

/* EXERCISE 3
Add to the previously created object a boolean value to rappresent wheter you have or not a driving license
*/

const student = {

    name: "Richard Johnson",
    surname: "Addai",
    age: 23,
    email: "richardstudent4@gmail.com",
}
student.drivingLicense= true

stupidDog= drivingLicense===false? true: false

console.log(stupidDog)


/* EXERCISE 4
Remove from the previously created object the age
*/

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



const student2= {

name: "Steave",

surname: "Jobs",

email2: "steavejobs4@gmail.com",

}


/*apple= student.email===student2.email2 ? true : false


console.log(apple)

/* EXERCISE 6
You are working for an eCommerce. In the variable totalShoppingCart you have the total amount spent by the current user.
In your eCommerce you have a promotion: if the customer shopping cart is more than 50€, they can have free shipping (otherwise it costs 10€).
Write an algorithm that calculate totalCost based on this assumption.
*/

/*let totalShippingCart= 60

stupidDog= totalShippingCart>50 ? "Free from shipment fee" : " + 10 final cost"

console.log(stupidDog)


/* EXERCISE 7
You are working for the same eCommerce. Today is the black friday and everything has a 20% discount at the end of the purchase.
Modify the previous answer inserting this information and, applying the same rules for the shipping cost, calculate the totalShopping.
*/

/*console.log(totalShoppingCart - (totalShoppingCart * 20 / 100))

/* EXERCISE 8
Create an object rapresenting a car with properties like brand, model, licensePlate.
After you create the first car, clone it and change the licensePlate without affecting the original car.
Do it for five cars.
*/

/*car2.licensePlate="CupCake";

car3.licensePlate="MilkShake";

car4.licensePlate="Donuts";

car5.licensePlate="Banana"

/* EXERCISE 9
Create a new array called carsForRent containing all the cars from the previous exercise
*/

/*const carsForRent=[car,car2,car3,car4,car5]

/* EXERCISE 10
Remove the first and the last car from the carsForRent array.
*/

/*carsForRent.pop()
carsForRent.shift()
console.log(carsForRent)

/* EXERCISE 11
Print in the console, the types of a single car, of the car licensePlate and of the brand
*/

/*let mike= [car.name, car2.name,car3.name, car4.name, car5.name]

let hugo= [car.model, car2.model, car4.model, car5.model]

let armando=[ car.licensePlate, car2.licensePlate, car3.licensePlate, car4.licensePlate, car5.licensePlate]

console.log(mike, hugo, armando)

/* EXERCISE 12
Create a new array called carsForSale and insert 3 cars in it.
Store in the variable totalCars the number of cars in both carsForSale and carsForRent arrays
*/

/*const carForSale2 = [car, car2, car3];

const carForRent2 = [car, car2, car3, car4, car5];

const totalCars2 = carForSale2.length + carForRent2.length;

console.log(totalCars2)



/* EXERCISE 13
Print in the console the data from each car in the carsForSale array
*/

for(i= 0; i< carForSale2; i++){

    console.log(carForSale2[i])
}

/* WRITE YOUR CODE HERE */

/* WHEN YOU ARE FINISHED
Send the code on Discord via a message to your tutor! In the next days we'll also learn how to use GIT 
*/
