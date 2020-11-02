// Write a function that accepts an array of 10 integers (between 0 and 9), 
// that returns a string of those numbers in the form of a phone number.

function createPhoneNumber(numbers){
  let result = "(";
  numbers.forEach((element, index) => {

      if (index > -1 ) {
        result = result + element;
      } 
      
      if (index === 2) {
          result = result + ") ";
      }

      if (result.length == 9) {
          result += "-";
      }
  });
  return result;
}

// The returned format must be correct in order to complete this challenge.
// Don't forget the space after the closing parentheses!

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]), "(123) 456-7890");
console.log(createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), "(111) 111-1111");
console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]), "(123) 456-7890");