let [a, b] = [1, 1];
let sum = 0;
while (b < 4000000) {
    a = b + a;
    [a, b] = [b, a];
    if (b % 2 == 0) {
        sum += b;
    }
}
console.log(sum);