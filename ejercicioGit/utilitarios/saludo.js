saludar = function () {
    //recuperar el valor de la una caja texto txtNombre
    let nombre = recuperarTexto("txtNombre")
    //recuperar el valor de la una caja texto txtNombre
    let apellido = recuperarTexto("txtApellido")
    let edad = recuperarInt("txtEdad");

    let estatura = recuperarFloat("txtEstatura");
}
recuperarTexto = function (idComponente) {
    let componente;
    let valorIngresado;
    componente = document.getElementById(idComponente);
    valorIngresado = componente.value;
    return valorIngresado;
}

recuperarInt = function (idComponente) {
    let componente;
    let valorIngresado;
    componente = document.getElementById(idComponente);
    valorIngresado = componente.value;
    return valorIngresado;
}
recuperarFloat = function (idComponente) {
    let componente;
    let valorIngresado;
    componente = document.getElementById(idComponente);
    valorIngresado = componente.value;
    return valorIngresado;
}