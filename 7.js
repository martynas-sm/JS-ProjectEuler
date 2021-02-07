// Sieve of Eratosthenes
let Sieve = new Array(1000001);
Sieve.fill(true);
Sieve[1] = false;

for (i = 2; i <= 1000000; i++) {
    if (!Sieve[i])
        continue;
    for (k = 2 * i; k <= 1000000; k += i) {
        Sieve[k] = false;
    }
}

let count = 1;

for (i = 2; i <= 1000000; i++) {
    if (!Sieve[i])
        continue;
    if (count == 10001) // 10001st
    {
        console.log(i);
        break;
    }
    count++;
}
