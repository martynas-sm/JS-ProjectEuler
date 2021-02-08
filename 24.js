function Factorial(num)
{
    let ans = 1;

    for(let i = 2; i <= num; i++)
        ans *= i;

    return ans;
}

let Permutations = []

function GetPermutations(num)
{
    if(num.length == 10)
    {
        Permutations.push(num);
        return;
    }
    for(let i = 0; i <= 9; i++)
    {
        if(!num.includes(i))
        {
            let newNum = [...num];
            newNum.push(i);
            GetPermutations(newNum);
        }
    }
}

GetPermutations([]);

console.log(Permutations[1000000-1].join(""));