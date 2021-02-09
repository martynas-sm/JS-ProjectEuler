let S = new Set;

for(let a = 2; a <= 100; a++)
{
    for(let b = 2; b <= 100; b++)
    {
        S.add(a**b);
    }   
}

console.log(S.size);