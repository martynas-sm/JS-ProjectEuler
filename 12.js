function Divisors(num) {
    let divs = 0;
    for (let i = 1; i <= Math.sqrt(num); i++) {
        if (num % i == 0) {
            if (i * i != num) {
                divs += 2;
            }
            else {
                divs++;
            }
        }
    }
    return divs;
}

let val = 0;
for (let x = 1; true; x++) {
    val += x;
    let divs = Divisors(val);
    if (divs > 500) {
        console.log(val);
        break;
    }
}
