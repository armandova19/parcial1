var coseno=0,n=2,fac=1;
function coseno_fun(n)
{
    for(var i=0; i<n; i++)
    {
        coseno+= Math.pow(-1,i)/factorial(2*i);
    }
    return coseno;
}
function factorial(n)
{
    for(var i=1; i<=n; i++)
    {
        fac *=i;
    }
    return fac;
}
console.log("resulatdo: " + coseno_fun(n));