var acum_monto = 0;
var monto;
function solicitar_nombre(){
	monto = parseFloat(prompt("Ingrese un monto"));
	acum_monto = acum_monto+ monto;
}
function solicitar_monto(){
	alert("El monto es :" +acum_monto);
}