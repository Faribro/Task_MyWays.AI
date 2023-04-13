const fizzBuzzContact = (phone) => {

const digits = phone.split('').map(Number);

const sum = digits.reduce((acc, curr) => acc + curr, 0);

let output = '';

for(let i = 1; i<= sum; i++) {

if(i % 4 === 0 && i%5 ===0) {
output += 'FizzBuzz ';
} else if(i % 4 === 0) {
output += 'Fizz ';
} else if(i % 5 === 0) {
output += 'Buzz ';
} else {
output += i + ' ';
}

}
console.log(output.trim());
}

fizzBuzzContact('9000000099');

// Write a Fizz Buzz function that will accept your phone number as the input then it will calculate sum of your phone number and run a loop from 1 to the sum. For every iteration you have to Print Fizz if the number is divisible by 4, Buzz if the number divisible by 5 and FizzBuzz if its divisible by both 4 and 5 else just print the number.

// Example Input: 9000000099

// Example Output: 1 2 3 Fizz Buzz 6 7 Fizz 9 Buzz 11 Fizz 13 14 Buzz Fizz 17 18 19 FizzBuzz 21 22 23 Fizz Buzz 26 27

// Fill the form with the details: name, email, phone and output. After success alert of submission make sure to fill the google form