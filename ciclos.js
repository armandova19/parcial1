var x=1,n=20,s=0,fac=1,exponente;
function serie1(n,x)
{
    for(var i=0; i<n; i++)
    {
        exponente = Math.pow(x,i)/factorial(i);
        s+=exponente;
    }
    return s;
}
function factorial(n)
{
    for(var i=1; i<=n; i++)
    {
        fac *=i;
    }
    return fac;
}
console.log("resultado: "+ serie1(n,x));