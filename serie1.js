var aux=1,suma=0,x=1;
function serie1(n)
{
    for(var i=0; i<=n; i++)
    {
        suma += x*(4/aux);
        x*=-1;
        aux+=2;
    }
    return suma;
}
var n;
console.log(serie1(1));
