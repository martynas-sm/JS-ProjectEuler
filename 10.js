// Sieve of Eratosthenes
const MAX_N = 2e6;
let Sieve = new Array(MAX_N + 1);
Sieve.fill(true);
Sieve[1] = false;

for(i = 2; i < MAX_N; i++)
{
    if(!Sieve[i])
        continue;
    for(k = 2*i; k < MAX_N; k += i)
    {
        Sieve[k] = false;
    }
}

let sum = 0;

for(let i = 2; i < MAX_N; i++)
{
    if(Sieve[i])
        sum += i;
}

console.log(sum);