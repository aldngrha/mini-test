// function to check if a number is a prime number
function isPrime(num) {
    if (num <= 1) return false; // numbers less than or equal to 1 are not prime numbers
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false; // if there's a remainder when dividing, it's not a prime number
    }
    return true; // if no remainders when dividing, it's a prime number
}

// function to generate a list of numbers from 1 to 100 following certain rules
function generateList() {
    const numbers = [];
    for (let i = 1; i <= 100; i++) {
        numbers.push(i); // inserting numbers from 1 to 100 into the 'numbers' array
    }

    // loop to print numbers according to the specified rules
    for (let i = numbers.length - 1; i >= 0; i--) {
        const num = numbers[i];
        if (isPrime(num)) continue; // if the number is a prime number, move to the next number
        else if (num % 3 === 0 && num % 5 === 0) process.stdout.write("FooBar "); // numbers divisible by both 3 and 5
        else if (num % 3 === 0) process.stdout.write("Foo "); // numbers divisible by 3
        else if (num % 5 === 0) process.stdout.write("Bar "); // numbers divisible by 5
        else process.stdout.write(num + " "); // other numbers
    }
}

// calling the function
generateList();