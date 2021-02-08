let Pyramid = [
    [75],
    [95, 64],
    [17, 47, 82],
    [18, 35, 87, 10],
    [20, 04, 82, 47, 65],
    [19, 01, 23, 75, 03, 34],
    [88, 02, 77, 73, 07, 63, 67],
    [99, 65, 04, 28, 06, 16, 70, 92],
    [41, 41, 26, 56, 83, 40, 80, 70, 33],
    [41, 48, 72, 33, 47, 32, 37, 16, 94, 29],
    [53, 71, 44, 65, 25, 43, 91, 52, 97, 51, 14],
    [70, 11, 33, 28, 77, 73, 17, 78, 39, 68, 17, 57],
    [91, 71, 52, 38, 17, 14, 91, 43, 58, 50, 27, 29, 48],
    [63, 66, 04, 68, 89, 53, 67, 30, 73, 16, 69, 87, 40, 31],
    [04, 62, 98, 27, 23, 09, 70, 98, 73, 93, 38, 53, 60, 04, 23]
];

const MAX_N = 15;

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