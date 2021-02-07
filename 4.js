let best = 0;
for (x = 100; x < 1000; x++) {
    for (y = 100; y < 1000; y++) {
        let num = x * y;
        let s = num.toString();
        if (s == s.split("").reverse().join("")) {
            best = Math.max(best, num);
        }
    }
}
console.log(best);