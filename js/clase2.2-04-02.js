console.log("EJERCICIO 3");
var sueldo = prompt("Ingresa el sueldo: ");
var descuento = (confirm("¿Se le aplica descuento?")) ? descuento= sueldo*0.1 : descuento = 0
console.log("el sueldo ingresado es : " +sueldo);
console.log("el descuento al sueldo es : " +descuento);
var sueldo_total = sueldo -descuento;
console.log("el sueldo total es: " + sueldo_total);
alert("el sueldo es : " +sueldo_total);