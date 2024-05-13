/* 
* ----------------CODYTECH DAILY----------------------



Javascript for reversal of string
The below code logic was to split the string and swap the first (i) and last(j) characters like an array
But apparently strings are not exactly array and are IMMUTABLE unlike array
Hence using tempString and exchanging characters won't alter the string.
But strings can be reassigned with new values.*/

/*
?  function reverse(message) {
?    //let tempString; //Type will be undefined
?    let tempString = ""; //Will be string
?    let newMessage = message;
?    let i;
?    let j;
?    for (i = 0, j = newMessage.length - 1; i < message.length, j >= 0; i++, j--) {
?      tempString = message[i];
?      newMessage[i] = message[j];
?      newMessage[j] = tempString;
?      console.log(`${i}. ${message[j]} ${newMessage}`);
?    }
?    console.log(message);
?    console.log(newMessage);
?  }

?  reverse("hello");

Select ?, press ctrl +shift + L, press Delete
----------------------------------------------------------------------------------- */

/*
The traditional method is to use an empty string and add the last letter by concatenation.
*/

/* 
& function reverse(message){
&  let reverseString = "";
&  for(let i = message.length - 1 ; i>=0 ; i--){
&    reverseString += message[i];
&  }
&  console.log(reverseString);
& }

& reverse("hello"); 
*/

/*Shift + Alt + A to comment out block code
----------------------------------------------------------------------------------- */

// By inbuilt methods

function reverse(message){
  const reverseString = message.split("").reverse().join("");
  console.log(reverseString);
}

reverse("Welcome to Home");

//----------------------------------------------------------------------------------- 

//Or with Recursion