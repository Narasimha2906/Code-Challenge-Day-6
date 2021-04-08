// Complete the function that takes two numbers as input, num and nth and return the nth digit of num (counting from right to left).

// Note
// If num is negative, ignore its sign and treat it as a positive value
// If nth is not positive, return -1
// Keep in mind that 42 = 00042. This means that findDigit(42, 5) would return 0


// Write the function to find the findDigit obtained.
var findDigit = function(num, nth){
     //your code here
     if(num == 0){
       return 0
     }
     else if(num < 0 && nth>0){
       num = -1 * num;
       var num1 = num.toString();
       return Number(num1.slice(-nth,(1-nth))) 

     }
     else if(num>0 && nth>0){
      var num1 = num.toString();
      return Number(num1.slice(-nth,(1-nth)))
     }
     else if(nth<0){
       return -1
     }
  }

//Use SpecRunner to check the Test Cases.