/*
    Idea: forward, push dp (just copied 31st solution)
*/

let ways = new Array(101);
ways.fill(0);
ways[0] = 1;

for(let x = 1; x <= 99; x++)
{
    for(let i = 0; i + x <= 100; i++)
    {
        ways[i + x] += ways[i];
    }
}

console.log(ways[100]);