/*
    Idea: 
*/

let { readFileSync } = require('fs');

let raw = readFileSync('data/107.txt').toString();

let Adj = raw.split("\n").map(x => x.split(","));
let Edges = new Array;
let n = Adj.length;
let total = 0;
let minimalSpan = 0;

for(let i = 0; i < n; i++)
{
    let newRow = new Array;
    for(let j = 0; j < n; j++)
    {
        if(!isNaN(Adj[i][j]))
        {
            newRow.push({weight: parseInt(Adj[i][j]), v: j});
            total += newRow[newRow.length - 1].weight;
        }
    }
    Adj[i] = newRow;
}

let visited = new Array(n);
visited.fill(false);

let availableEdges = new Array;

availableEdges = Adj[0];
visited[0] = true;

// O(n*n*log(n)) n = 40 so its fine
for(let i = 0; i < n-1; i++)
{
    availableEdges.sort((a, b) => (a.weight < b.weight) ? 1 : -1); // PriorityQueue or ordered set is better
    while(visited[availableEdges[availableEdges.length - 1].v])
    {
        availableEdges.pop();
    }
    let edge = availableEdges[availableEdges.length - 1];
    //console.log(edge);
    visited[edge.v] = true;
    minimalSpan += edge.weight;
    Adj[edge.v].forEach(e => availableEdges.push(e));
}

total /= 2; // double counted in adj list
console.log(total - minimalSpan);