const MAX_N = 1000000;

function Collatz(num) {
    if (num == 1)
        return 1;
    if (num % 2 == 0) {
        return 1 + Collatz(num / 2);
    }
    else {
        return 1 + Collatz(3 * num + 1);
    }
}

let bestChain = 0;
let bestNumber = 0;
for (let i = 2; i < MAX_N; i++) {
    let chain = Collatz(i);
    if (chain > bestChain) {
        bestNumber = i;
        bestChain = chain;
    }
}
console.log(bestNumber);