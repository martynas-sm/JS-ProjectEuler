let date = new Date();
date.setFullYear(1901, 1, 1);

let sundays = 0;
do {
    if(date.getDay() == 0)
    {
        sundays++;
    }
    date.setMonth(date.getMonth() + 1);
} while (date.getFullYear() < 2001);

console.log(sundays);