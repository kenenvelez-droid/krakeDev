calcularValorDescuento=function(monto,porcentajeDescuento){
    let descuento=monto*porcentajeDescuento;
    let valor=descuento/100;
    return valor;
}
calcularIva=function(monto){
    let iva=monto*0.12;
    return iva;
}
calcularSubtotal=function(precio,cantidad){
    let subtotal=precio*cantidad;
    return subtotal;
}
calcularTotal=function(subtotal,descuento,iva){
    let total=subtotal-descuento+iva;
    return total;
}