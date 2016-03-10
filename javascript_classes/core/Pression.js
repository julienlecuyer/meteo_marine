/*
 Classe Presison
 Définit une pression.
 Sa valeur contient deux 
*/

function Pression (laPression) {
	if(arguments.length == 0) { laPression = 0.0; }
	this.valeurPression = laPression;
}

Pression.prototype.getValeurPression = function() {
	return this.valeurPression.toFixed(2);
};

Pression.prototype.setValeurPression = function(nouvellePression) {
	this.valeurPression = nouvellePression;
};