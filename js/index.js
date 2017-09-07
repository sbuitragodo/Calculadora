var Calculadora = {
	/* DeclaraciÃ³n de variable*/
	pantalla: document.getElementById("display").innerHTML,
	decimal: 0,
	signo: 0,
	controlen: 8,
	stop: 0,
	num1: 0,
	opcion: 0,
	auxnum: 0,
	auxestado: 0,
	auxresultado: 0,
	inicio: (
		function(){
			this.EventosClick();
		}
}
Calculadora.inicio();
