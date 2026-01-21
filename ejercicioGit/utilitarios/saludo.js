saludar=function(){
    //Recuperar el valor de la caja de texto txtNombre
    let nombre=recuperarTexto("txtNombre");
    //Recuperar el valor de la caja de texto txtApellido
    let apellido=recuperarTexto("txtApellido");

    let edad=recuperarInt("txtEdad");

    let estatura=recuperarFloat("txtEstatura");

    let mensajeBienvenida="Bienvenido "+nombre+" "+apellido;

    mostrarTexto("lblResultado",mensajeBienvenida);

    mostrarImagen("imgSaludo","kid-hi.gif")

    mostrarTextoEnCaja("txtNombre","");
}