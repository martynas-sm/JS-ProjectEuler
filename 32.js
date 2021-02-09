/*
    Idea: brute force oh yeah
*/

function GetDigits(num)
{
    return num.toString().split("").map(x => parseInt(x));
}

let Pandigitals = new Set;

for(let a = 1; a <= 9999; a++)
{
    for(let b = 1; b <= 9999, Math.trunc(Math.log10(a)) + Math.trunc(Math.log10(b)) + Math.trunc(Math.log10(a*b)) + 3 <= 9; b++)
    {
        let Digits = new Array(3);
        Digits[0] = GetDigits(a);
        Digits[1] = GetDigits(b);
        Digits[2] = GetDigits(a*b);
        if(Digits[0].length + Digits[1].length + Digits[2].length == 9 && [...Digits].every(Arr => Arr.every(x => x > 0)))
        {
            let S = new Set;
            [...Digits].forEach(Arr => Arr.forEach(x => S.add(x)));
            if(S.size == 9)
            {
                //console.log(`${a} * ${b} == ${a*b}`);
                Pandigitals.add(a*b);
            }
        }
    }
}

let sum = 0;
Pandigitals.forEach(x => sum += x);
console.log(sum);