/* 
1.You should create a function named confirmEnding that takes two parameters: the string to check and the string to check against.

2.The function should return true if the first string ends with the second string, and false otherwise.

3.You should not use the .endsWith() method; instead, use one of the JavaScript substring methods to achieve this.
*/
		   function confirmEnding (strCheck, strCheckAgain) {
		   	 return strCheck.substring(strCheck.length - strCheckAgain.length).includes(strCheckAgain);
		   }
// test 
console.log(confirmEnding("Bastian", "n")); // true
console.log(confirmEnding("Congratulation", "on")); // true
console.log(confirmEnding("Connor", "n")); // false
console.log(confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification")); // false
console.log(confirmEnding("He has to give me a new name", "name")); // true
console.log(confirmEnding("Open sesame", "same")); // true
console.log(confirmEnding("Open sesame", "sage")); // false
console.log(confirmEnding("Open sesame", "game")); // false
console.log(confirmEnding("If you want to save our world, you must hurry. We don't know how much longer we can withstand the nothing", "mountain")); // false

console.log(confirmEnding("Abstraction", "action")); // true

		
		
        
	
       
		 