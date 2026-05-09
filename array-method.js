// Method Push
 const lunches = [];
	 	    function addLunchToEnd(arr, str) {
	 	    	 arr.push(str);
	 	    	 console.log(`${str} added to the end of the lunch menu.`);
	 	        return arr;
	 	    }
addLunchToEnd(lunches, "Tacos");

// Method unshift
function addLunchToStart (arr, str) {
	 	         arr.unshift(str);
	 	    	 console.log(`${str} added to the start of the lunch menu.`);
	 	        return arr;
	 	    }
addLunchToStart(lunches, "Sushi");
 
 // Method pop
  function removeLastLunch (arr) {	 	 
	 	   if( arr.length === 0 ) {
            console.log("No lunches to remove.");
	 	   } else { 
            console.log(`${arr[arr.length - 1]} removed from the end of the lunch menu.`);
     }	  
       arr.pop();
	 	   return arr;	
}

removeLastLunch(["Stew", "Soup", "Toast" ]);

// Method shift
function removeFirstLunch (arr) {
	 	    	 if( arr.length === 0 ) {
            console.log("No lunches to remove.");
	 	   } else { 
            console.log(`${arr[0]} removed from the start of the lunch menu.`);
     }	  
       arr.shift();
	 	   return arr;	
}

// Array Randomly
removeFirstLunch(["Salad", "Eggs", "Cheese"]);
            
           function getRandomLunch (arr) {
          	    if( arr.length === 0 ) {
            console.log("No lunches available.");
	 	         }
                 const randomLunches =  Math.floor(Math.random() * (arr.length - 0) + 0);
                 console.log(`Randomly selected lunch: ${arr[randomLunches]}`);
          }

          getRandomLunch(["Salad", "Eggs", "Cheese"]);

 // Method Join
     function showLunchMenu (arr) {
          	   if( arr.length === 0 ) {
                  console.log("The menu is empty.");
	 	         } else {
	 	         	   console.log(`Menu items: ${arr.join(", ")}`);
	 	         }
          }
   
    showLunchMenu(["Greens", "Corns", "Beans"])