let num = [1];
for (let i = 2; i <= 100; i++) {
    num.forEach((val, index) => num[index] = val * i);
    let n = num.length;
    num.push(0, 0);
    for (let j = 0; j < n; j++) {
        if (num[j] > 99) {
            num[j + 2] += Math.floor(num[j] / 100);
            num[j] %= 100;
        }
    }
    for (let j = 0; j < n; j++) {
        if (num[j] > 9) {
            num[j + 1] += Math.floor(num[j] / 10);
            num[j] %= 10;
        }
    }
}
let sum = 0;
num.forEach(x => sum += x);
console.log(sum);
while(num.length && num[num.length - 1] == 0)
    num.pop();
console.log(num.reverse().join(""));