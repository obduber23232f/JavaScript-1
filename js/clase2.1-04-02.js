console.log("EJERCICIO 2");
var pantalon1,pantalon2,pantalon3,tipo,cantidad,precio,nombre,total,clase;
nombre = "obduber";
cantidad = Math.random()*10;
cantidad = Math.round(cantidad)
tipo = Math.random()*3;
tipo = Math.round(tipo);
pantalon1 = 141246.25;
pantalon2 = 96.720;
pantalon3 = 58.900;


switch(tipo){
	case 1:
	  total = cantidad*pantalon1;
	  clase = "A";
	break;

	case 2:
	  total = cantidad*pantalon2;
	  clase = "B";
	break;

	case 3:
	  total = cantidad*pantalon3;
	  clase = "C"
	break;

	default :
	clase = ("No compro nada");
	total = ("No compro nada");
}	

console.log("El nombre del cliente es :" +nombre);
console.log("El tipo de pantalon es :" + clase);
console.log("El precio del pantalon es:" + total+ "Bs");