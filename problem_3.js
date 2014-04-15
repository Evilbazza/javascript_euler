//The prime factors of 13195 are 5, 7, 13 and 29.
//What is the largest prime factor of the number 600851475143 ?

var isPrime = function(number) { 
    if (number % 2 === 0){
        return false;
    }
    var max = Math.sqrt(number);
    for (i=3; i<=max; i+=2) {
        if (number % i === 0) {
            return false;
        }
    }
 return true;
};

var num = 600851475143;
var factors = [];

for (i=2; i<=Math.floor(Math.sqrt(num)); i++) {
    if (num % i === 0) {
        factors.push(i);
    }
}
var primeFactors = [];

for (j=0; j<factors.length; j++) {
    if (isPrime(factors[j]) === true) {
        primeFactors.push(factors[j]);
    }
}
var largest = Math.max.apply(0, primeFactors);
console.log(largest);

//6857
