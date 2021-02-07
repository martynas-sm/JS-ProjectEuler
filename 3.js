var num = 600851475143;
var factors = [];
for (var i = 2; i <= Math.sqrt(num); i++) {
    while (num % i == 0) {
        factors.push(i);
        num /= i;
    }
}
if (num > 1)
    factors.push(num);
factors.forEach(x => console.log(x));