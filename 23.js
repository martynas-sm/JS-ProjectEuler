const MAX_N = 28123;

function Divisors(num) {
    let sum = 1;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i == 0) {
            if (i * i != num) {
                sum += i + num / i;
            }
            else
            {
                sum += i;
            }
        }
    }
    return sum;
}

let Abundant = [];
let Exists = new Set;

for(let i = 2; i < MAX_N; i++)
{
    if(i < Divisors(i))
    {
        Abundant.push(i);
        Abundant.forEach(x => Exists.add(i + x));
    }
}

let sum = 1; // 1/2 not possible

for(let i = 2; i < MAX_N; i++)
{
    if(!Exists.has(i))
    {
        sum += i;
    }
}
console.log(sum);