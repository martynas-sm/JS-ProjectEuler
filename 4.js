var best = 0;
for(x = 100; x < 1000; x++)
{
    for(y = 100; y < 1000; y++)
    {
        var num = x*y;
        var s = (num).toString();
        if(s == s.split("").reverse().join(""))
        {
            best = Math.max(best, num);
        }
    }   
}
console.log(best);