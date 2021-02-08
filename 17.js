function isAlpha(c)
{
    return (c >= 'a' && c <= 'z') || (c >= 'A' && c <= 'Z');
}

function countAlpha(s)
{
    let cnt = 0;
    [...s].forEach(c => {if(isAlpha(c)) cnt++;} );
    return cnt;
}

let Below10 = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]; // zero not used
let From10To19 = ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
let From20to90 = ["twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];

function getNumber(num)
{
    let name = "";
    let andExists = false;
    let aboveHundred = num > 100;
    if(num >= 100)
    {
        name += Below10[Math.trunc(num / 100)] + " hundred";
        num %= 100;
    }
    if(num >= 20)
    {
        if(name.length != 0)
        {
            name += " and ";
            andExists = true;
        }
        name += From20to90[Math.trunc(num / 10) - 2];
        num %= 10;
    }
    else if(num > 9)
    {
        if(name.length != 0)
        {
            name += " and ";
            andExists = true;
        }
        name += From10To19[num % 10];
        num = 0;
    }
    if(num > 0)
    {
        if(!andExists && aboveHundred)
        {
            name += " and";
        }
        if(name.length != 0)
        {
            name += " ";
        }
        name += Below10[num];
    }
    return name;
}

let letters = 0;

for(let i = 1; i < 1000; i++)
{
    letters += countAlpha(getNumber(i));
}
letters += countAlpha("one thousand");

console.log(letters);