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
	),
	/*animar los botones al hacer click*/
	animacionuno: function(tecla){
		document.getElementById(tecla).style.transform="scale(0.9)";
		setTimeout(function() {document.getElementById(tecla).style.transform="scale(1)";}, 200);
	},
	/*funcion restar*/
		menos: function(){
			this.animacionuno("menos");
			this.num1 = Number(this.pantalla);
			this.pantalla = "",
			this.opcion = 2,
			this.auxestado = 0,
			this.signo = 0,
			this.auxnum = 0,
			this.auxestado = 0,
			this.decimal = 0,
			this.viewdisplay();
	},
	/*funcion multiplica*/
		por: function(){
			this.animacionuno("por");
			this.num1 = Number(this.pantalla),
			this.pantalla = "",
			this.opcion = 3,
			this.auxestado = 0,
			this.signo = 0,
			this.auxnum = 0,
			this.auxestado = 0,
			this.decimal = 0,
			this.viewdisplay();
	},
	/*funcion dividir*/
		dividido: function(){
			this.animacionuno("dividido");
			this.num1 = Number(this.pantalla),
			this.pantalla = "",
			this.opcion = 4,
			this.auxestado = 0,
			this.signo = 0,
			this.auxnum = 0,
			this.auxestado = 0,
			this.decimal = 0,
			this.viewdisplay();
	},
	/*funcion sumar*/
	mas: function(){
			this.animacionuno("mas");
			this.num1 += Number(this.pantalla),
			this.pantalla = "",
			this.opcion = 1,
			this.auxestado = 0,
			this.signo = 0,
			this.auxnum = 0,
			this.auxestado = 0,
			this.decimal = 0,
			this.viewdisplay();
 }
}
Calculadora.inicio();
