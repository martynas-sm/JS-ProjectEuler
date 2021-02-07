let num = [1];
for (let i = 0; i < 1000; i++) {
    num.forEach((val, index) => num[index] = val * 2);
    for (let j = 0; j < num.length - 1; j++) {
        if (num[j] > 9) {
            num[j + 1] += Math.floor(num[j] / 10);
            num[j] %= 10;
        }
    }
    if(num[num.length - 1] > 9)
    {
        num[num.length] = Math.floor(num[num.length - 1] / 10);
        num[num.length - 2] %= 10;
    }
    //console.log(num.join(""));
}
let sum = 0;
num.forEach(x => sum += x);
console.log(sum);
console.log(num.reverse().join(""));