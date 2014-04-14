
var isPrime = function(number) {
  for (i=2; i<number; i++) {
      if (number % i === 0) {
          return false;
      }
  }
  return true;
};

var num = 13195;
var factors = [];

for (i=2; i<num; i++) {
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
console.log(primeFactors);
