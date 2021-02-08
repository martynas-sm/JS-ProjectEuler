function Divisors(num) {
    let sum = 1;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i == 0) {
            if (i * i != num) {
                sum += i + num / i;
            }
        }
    }
    return sum;
}

let S = new Set;
let sum = 0;
for(let a = 220; a < 10000; a++)
{
    let b = Divisors(a);
    if(a == Divisors(b))
    {
        if(a != b)
        {
            sum += a;
        }
    }
}
console.log(sum);