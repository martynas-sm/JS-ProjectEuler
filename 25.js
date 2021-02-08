// a, b - strings
function AddNumbers(a, b)
{
    if(a.length == 0)
        return b;
    if(b.length == 0)
        return a;
    let ArrA = a.split("").reverse();
    let ArrB = b.split("").reverse();

    if(ArrA.length < ArrB.length)
    {
        [ArrA, ArrB] = [ArrB, ArrA];
    }

    ArrA.forEach((val, index) => ArrA[index] = parseInt(val));
    ArrB.forEach((val, index) => ArrB[index] = parseInt(val));

    for(let i = 0; i < Math.min(ArrA.length, ArrB.length); i++)
    {
        ArrA[i] = ArrA[i] + ArrB[i];
    }

    ArrA.push(0);

    for(let i = 0; i < ArrA.length - 1; i++)
    {
        ArrA[i + 1] += Math.trunc(ArrA[i] / 10);
        ArrA[i] %= 10;
    }

    if(ArrA[ArrA.length - 1] == 0)
    {
        ArrA.pop();
    }

    return ArrA.reverse().join("");
}

let a = "1", b = "1";
let index = 2;
while (true) {
    index++;
    a = AddNumbers(a, b);
    [a, b] = [b, a];
    if (b.length >= 1000) {
        console.log(index);
        console.log(b);
        break;
    }
}