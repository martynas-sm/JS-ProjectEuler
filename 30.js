function DigitPower5Sum(num)
{
    let digits = num.toString().split("").map(x => parseInt(x)); // why? because I can
    let sum = 0;
    digits.forEach(x => sum += x**5);
    return sum;
}

const MAX_N = 200000;
let sum = 0;

for(let i = 2; i < MAX_N; i++)
{
    if(DigitPower5Sum(i) == i)
    {
        sum += i;
    }
}

console.log(sum);