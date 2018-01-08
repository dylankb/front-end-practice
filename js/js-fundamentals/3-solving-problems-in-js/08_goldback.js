

function isPrime(n) {
  if (n < 2) return false;
  for(var i = 2; i < n; i++) {
    if (n % i === 0 ) {
      return false;
    }
  }
  return true;
}

function getPrimes(n) {
  var primes = [];
  for(var i = 1; i < n; i++) {
    if (isPrime(n-i)) {
      primes.push(n-i);
    }
  }
  return primes;
}

function checkGoldbach(n) {
  var primes = getPrimes(n);
  var goldbacks = [];
  for(var i = 0; i < primes.length; i++) {
    // setting j to i ensures that j will always be greater than i (removing ability for there to be duplicates)
    for(var j = i; j < primes.length; j++) {
      if (primes[i] + primes[j] === n) {
        goldbacks.push([primes[i],primes[j]])
      }
    }
  }
  return goldbacks.join("")
}
console.log(checkGoldbach(12));
