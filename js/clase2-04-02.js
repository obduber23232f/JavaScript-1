var nombre,sueldo_base,year,numeros_cursos,aumento,total1;
numeros_cursos = Math.random()*5;
sueldo_base = 100;
nombre = "obduber";
year = Math.random()*10;
/*year = year.toFixed(0);*/
bono = 25000;


if (year >= 5) {
	aumento = (sueldo_base*0.1) + sueldo_base;

}else aumento=0

if (numeros_cursos > 3) {
   total1 = sueldo_base+bono;
}else total1=0
console.log("El Nombre del Empleado es: " + nombre);
console.log("Si tiene mas de 5 años de servicio el aumento del sueldo base es : " + aumento);
console.log("Si tiene como minimo 4 cursos realizados, su bono es : " + total1);