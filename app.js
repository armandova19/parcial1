class Articulo {
    constructor(costo, cantidad) {
        this.costo = costo;
        this.cantidad = cantidad;
    }
    total() {
        return this.costo * this.cantidad;
    }
}

class Venta {
    constructor(costo, cantidad, pagar) {
        this.costo = costo;
        this.cantidad = cantidad;
        this.pagar = pagar;
    }
    pagar() {
        return this.costo * this.cantidad - this.pagar;
    }
}

const btn = document.getElementById("agregar_producto");

btn.addEventListener('click', () => {
    let costo = document.getElementById("costo").value;
    let cantidad = document.getElementById("cantidad").value;

    costo = parseInt(costo);
    cantidad = parseInt(cantidad);

    let total = new Articulo(costo, cantidad);
    let resTotal = document.getElementById("total");

    resTotal.innerHTML += "$" + total.total();
});

const pagar = document.getElementById("pagar_productos");

pagar.addEventListener('click', () => {
    let costo = document.getElementById("costo").value;
    let cantidad = document.getElementById("cantidad").value;
    let pagar = document.getElementById("pagar").value;

    costo = parseInt(costo);
    cantidad = parseInt(cantidad);
    total = costo * cantidad;
    pagar = parseInt(pagar);

    let total_pagar = new Venta(costo, cantidad, pagar);
    let estatus = document.getElementById("estatus");


    estatus.innerHTML += "Cuenta pagada con exito " + "Usted debe " + total_pagar.pagar();

    estatus.innerHTML += "Cuenta no pagada " + "Usted debe " + total_pagar.pagar();
});