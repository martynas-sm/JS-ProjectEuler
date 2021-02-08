// 1/y
function cycleLength(d)
{
    let M = new Map;
    let numerator = 1;
    let shifts = 0;
    let k = 0;
    while(true)
    {
        if(numerator == 0)
        {
            return 0;
        }
        if(M.has(numerator))
        {
            return shifts - M.get(numerator);
        }
        else
        {
            M.set(numerator, shifts);
        }
        if(numerator >= d)
        {
            numerator %= d;
        }
        numerator *= 10;
        shifts++;
    }
}

let d = 1;
let longestCycle = 0;

for(let i = 2; i < 1000; i++)
{
    if(cycleLength(i) > longestCycle)
    {
        longestCycle = cycleLength(i);
        d = i;
    }
}

console.log(d);