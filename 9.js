for(let a = 1; a <= 1000-2; a++)
{
    for(let b = a+1; b <= 1000-1; b++)
    {
        if(a*a + b*b == Math.pow(1000-a-b, 2))
        {
            console.log(a*b*(1000-a-b));
            return;
        }
    }
}