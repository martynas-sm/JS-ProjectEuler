/*
    Idea: every 4 numbers (4 corners) gap increases by 2
*/

let sum = 0;
let gap = 1;
let curr = 1;
let k = 0;

while(curr <= 1001 * 1001)
{
    sum += curr;
    curr += gap + 1;
    k++;
    if(k % 4 == 0)
    {
        gap += 2;
    }
}

console.log(sum);