var seno=0,n=2,fac=1;
function seno_fun(n)
{
    for(var i=0; i<n; i++)
    {
        seno+= Math.pow(-1,i)/factorial(2*i+1);
    }
    return seno;
}
function factorial(n)
{
    for(var i=1; i<=n; i++)
    {
        fac *=i;
    }
    return fac;
}
console.log("resulatdo: " + seno_fun(n));