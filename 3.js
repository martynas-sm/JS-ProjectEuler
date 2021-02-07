let num = 600851475143;
let factors = [];
for (let i = 2; i <= Math.sqrt(num); i++) {
    while (num % i == 0) {
        factors.push(i);
        num /= i;
    }
}
if (num > 1)
    factors.push(num);
factors.forEach(x => console.log(x));