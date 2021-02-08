let fs = require('fs');

let Pyramid = fs.readFileSync('data/67.txt').toString().split('\n');
for(let i = 0; i < Pyramid.length; i++)
{
    Pyramid[i] = Pyramid[i].split(' ');
}
Pyramid.forEach((row, i) => {
    row.forEach(
        (val, j) => Pyramid[i][j] = parseInt(val)
    )
});

const MAX_N = 100;

let dp = new Array(MAX_N);
for(let n = 1; n <= MAX_N; n++)
{
    dp[n-1] = new Array(n);
    dp[n-1].fill(0);
}

for(let i = 0; i < MAX_N - 1; i++)
{
    for(let j = 0; j <= i; j++)
    {
        dp[i+1][j] = Math.max(dp[i+1][j], dp[i][j] + Pyramid[i][j]);
        dp[i+1][j+1] = Math.max(dp[i+1][j+1], dp[i][j] + Pyramid[i][j]);
    }
}

dp[MAX_N-1].forEach((val, index) => dp[MAX_N-1][index] += Pyramid[MAX_N-1][index]);

console.log(Math.max(...dp[MAX_N-1]));
