/*
    Idea: forward, push dp yay
*/

let ways = new Array(201);
ways.fill(0);
ways[0] = 1;

[1,2,5,10,20,50,100,200].forEach(x =>
    {
    for(let i = 0; i + x <= 200; i++)
    {
        ways[i + x] += ways[i];
    }
});

console.log(ways[200]);