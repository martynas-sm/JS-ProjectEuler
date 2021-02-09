/*
f(n) = n^2 + an + b;
O(a*b*n*sqrt(f(n)))
*/

function gcd(a, b)
{
    if(b == 0)
        return a;
    return gcd(b, a % b);
}

function ValidateAddends(a, b, c)
{
    a = Math.abs(a);
    b = Math.abs(b);
    c = Math.abs(c);

    if(a == 0 && b == 0)
    {
        return true;
    }
    else if(a == 0)
    {
        return gcd(b, c) == 1;
    }
    else if(b == 0)
    {
        return gcd(a, c) == 1;
    }
    return gcd(a, gcd(b, c)) == 1;
}

function isPrime(num)
{
    if(num == 1) return false;
    for(let i = 2; i <= Math.sqrt(num); i++)
    {
        if(num % i == 0)
        {
            return false;
        }
    }
    return true;
}

let consecutiveN = 0;
let bestA = 0, bestB = 0;
for(let a = -999; a <= 999; a++)
{
    for(let b = -1000; b <= 1000; b++)
    {
        let Addends = new Array(3);
        for(let n = 0; true; n++)
        {
            Addends[0] = n*n;
            Addends[1] = a*n;
            Addends[2] = b;
            if(Addends[0] + Addends[1] + Addends[2] > 0 && ValidateAddends(...Addends))
            {
                if(!isPrime(Addends[0] + Addends[1] + Addends[2]))
                {
                    if(n > consecutiveN)
                    {
                        consecutiveN = n;
                        bestA = a;
                        bestB = b;
                    }
                    break;
                }
            }
            else
            {
                if(n > consecutiveN)
                {
                    consecutiveN = n;
                    bestA = a;
                    bestB = b;
                }
                break;
            }
        }
    }
}
console.log(`${consecutiveN} consecutive`);
console.log(`${bestA} * ${bestB}`);
console.log(bestA * bestB);