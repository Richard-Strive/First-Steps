//different way of declaring strings

const doubleQuotes = "hello world"
const singleQuotes = 'hello world'

const example = 7;
const templateLiterals = `My favourite number is ${example}`; //the template literals used with the ` gives me the possibility to inject variables in my string thank to the syntax ${myvariable}
console.log(templateLiterals);


console.log(templateLiterals.toUpperCase()); //majes all my sentence in capital letters

console.log(templateLiterals.slice(4, 10)); //will cut my sentence from the 4th to 10th letters  
console.log(templateLiterals.indexOf("n")); //will return the position of the first "n" found
console.log(templateLiterals.indexOf("is")); //will return the position of the first "is" found

const arrayOfWords = templateLiterals.split(" "); //will divide the sentence in an array of words by splitting where he finds a space so it will return ["my", "favourite", "number", "is"] etc
console.log(arrayOfWords);

const joinedWithDots = arrayOfWords.join("........."); //The join() method returns the array as a string.
//The elements will be separated by a specified separator. 
console.log(joinedWithDots);

console.log("hi".repeat(3)); //will repeat what the value passed for the number of time wanted