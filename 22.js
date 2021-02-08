function getAlphaValue(name)
{
    let val = 0;
    for(let i = 0; i < name.length; i++)
    {
        val += name.charCodeAt(i) - 64;
    }
    return val;
}

let fs = require('fs');
let raw = fs.readFileSync('data/22.txt').toString();
raw = raw.slice(1, raw.length - 1);

let list = raw.split('","');
list.sort();

let sum = 0;
for(let i = 0; i < list.length; i++)
{
    sum += (i + 1) * getAlphaValue(list[i]);
}
console.log(sum);