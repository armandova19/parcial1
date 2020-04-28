const btn = document.getElementById("btnrectangulo");
btn.addEventListener('click' , ()=>{

    let base = document.getElementById("base").value;

    let altura = document.getElementById("altura").value;

    base= parseInt(base);
    altura=parseInt(altura);


    let rect1=new Rectangulo(base,altura);
    let divRes=document.getElementById("resultados");
    divRes.innerHTML="<p>Rectangulo con base de " + rect1.base + " y una altura  de " + rect1.altura + "</p>";
    divRes.innerHTML+="<p>con un area de: " + rect1.area() + "</p>";
}); 

const b2 = document.getElementById("btntriangulo");
b2.addEventListener('click' , ()=>{

    let base = document.getElementById("base").value;

    let altura = document.getElementById("altura").value;

    base=parseInt(base);
    altura=parseInt(altura);

    let rect2=new Triangulo(base,altura);

    let divRes=document.getElementById("resultados");
    divRes.innerHTML="<p>Triangulo con base de " + rect2.base + " y una altura  de " + rect2.altura + "</p>";
    divRes.innerHTML+="<p>con un area de: " + rect2.area_t() + "</p>";
});

const b3 = document.getElementById("btncuadrado");
b3.addEventListener('click' , ()=>{

    let base = document.getElementById("base").value;

    base=parseInt(base);

    let rect2=new Cuadrado(base);

    let divRes=document.getElementById("resultados");
    divRes.innerHTML="<p>Cuadrado con base de " + rect2.base + " y una altura  de (como es un cuadrado la formula es lado*lado solo se necesita el primer valor"  + "</p>";
    divRes.innerHTML+="<p>, el cual la altura es la misma que la base) con un area de: " + rect2.area_c() + "</p>";
});
