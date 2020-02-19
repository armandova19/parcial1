var suma=0;

function suma_par(cuantos)
{
    for(var i=0; i<=cuantos*2; i++)
    {
        if(i%2==0)
        {
            suma+=i;
        }
    }
    return suma;
}
var n=5; 
console.log(suma_par(n));