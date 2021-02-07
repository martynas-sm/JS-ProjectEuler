
const MAX_N = 21;
let dp = new Array(MAX_N);
for (let i = 0; i < MAX_N; i++) {
    dp[i] = new Array(MAX_N);
}

for (let i = 0; i < MAX_N; i++) {
    dp[0][i] = 1;
    dp[i][0] = 1;
}

for (let i = 1; i < MAX_N; i++) {
    for (let j = 1; j < MAX_N; j++) {
        dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
    }
}

console.log(dp[MAX_N - 1][MAX_N - 1]);


