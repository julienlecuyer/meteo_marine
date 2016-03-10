/*
 Classe Vent
 Définit les différentes composantes d'un objet vent.
*/

function Vent (vit, dir) {
	if(arguments.length == 0) { vit = 0.0; dir = 0.0; }
	this.vitesse   = vit;
	this.direction = dir;
}

Vent.prototype.getVitesse = function() {
	return this.vitesse.toFixed(2);
};

Vent.prototype.setVitesse = function(nouvelleVitesse) {
	this.vitesse = nouvelleVitesse;
};

Vent.prototype.getDirection = function() {
	return this.direction.toFixed(2);
};

Vent.prototype.set = function(nouvelleDirection) {
	this.direction = nouvelleDirection;
};