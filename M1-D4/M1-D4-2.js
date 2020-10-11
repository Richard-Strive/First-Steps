/*
ASSIGNMENT RULES
- All the answers must be in JavaScript
- The solution must be pushed to the repository and be available for the tutors by the end of the day
- You can ask for tutor's help
- You can google / use StackOverflow BUT we suggest you to use just the material provided
*/

/* EXERCISE 1
Write a function "area" which receives 2 parameters (l1,l2) and calculate the area of the rectangle.
*/

const area= function(l1,l2){

    result= l1 * l2;

    return result 

}
console.log(area(2,2))

/* EXERCISE 2
Write a function "crazySum" which receives two given integers. If the two values are same, then returns triple their sum.
*/

const crazySum= function(x,y){

    if(x===y){

      result= (x+y)*3  
    }
else
{

  result="GO A WAY!!!"

}

return result
}

console.log(crazySum(3,3))



/* EXERCISE 3
Write a function "crazyDiff" that computes the 
absolute difference between a given number and 19. 
Returns triple their absolute difference if 
the specified
number is greater than 19.
*/

const crazyDiff= function(x){


    if(x>19){


    result= (Math.floor(Math.abs(x-19)*3))

    }

    else{

        result= "SONO L'01: 12 AM"

    }

return result

}

console.log(crazyDiff(20))




/* EXERCISE 4
Write a function "boundary" which accept an integer N and returns true if N is within 20 and 100 (included) or equal to 400.
*/


const boundary= function(N){

    result= (20 < N,  N >= 100? true : false)
  
  
    return result
  }
  
  console.log(boundary(N))



/* EXERCISE 5
Write a function "strivify" which accepts a string S. Add to S "Strive" in front of a given string, if the given string begins with "Strive" then return the original string.
*/

const strivify= function(string){


  if(string === "Strive" ){


    result= string

}
else
{

    result= "Strive"+string

}

    return result

}



/* WRITE YOUR CODE HERE */

/* EXERCISE 6
Write a function "check3and7" which accepts a positive number and check if it is a multiple of 3 or a multiple of 7.
HINT: Module Operator
*/

const check3and7= function(N){
  if(N%3===0 || N%7===0){
    return "Hello"
}
else
{
     return "Hellya"
}
    return
}

console.log(check3and7(4))

/* EXERCISE 7
Write a function "reverseString" to reverse programmatically a given string (es.: Strive => evirtS).
*/

const  reverseString= function(string){

  return string.split("").reverse().join("")

}

console.log(reverseString("Hello"))

/* EXERCISE 8
Write a function "upperFirst" to capitalize the first letter of each word of a given string passed as parameter
*/

const upperFirst = function(string){

    
  return string.charAt(0).toUpperCase()+string.slice(1)


}

console.log(upperFirst("Hello"))


/* EXERCISE 9
Write a function "cutString" to create a new string without the first and last character of a given string.
*/

const cutString = function(string){


  return string.substring(1,4)

}

console.log(cutString("Hello"))

/* EXERCISE 10
Write a function "giveMeRandom" which accepts a number n and returns an array containing n random numbers between 0 and 10
*/

const giveMeRandom= function(n){

          
       return [Math.floor(Math.random()*19)]

}

console.log(giveMeRandom())

/* WHEN YOU ARE FINISHED
Commit and push the code to your personal GitHub repository and share the link to your commit with your tutor.
*/
