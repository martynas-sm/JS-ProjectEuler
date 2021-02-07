function gcd(a, b) {
    if (b == 0)
        return a;
    return gcd(b, a % b);
}

function lcm(a, b) {
    return a * b / gcd(a, b);
}

let Arr = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

let ans = 1;
Arr.forEach(x => ans = lcm(ans, x));

console.log(ans);