/*
 Classe PrevisionFactory
 Définit une usine à objets de Prevision.

*/

function PrevisionFactory () {}

PrevisionFactory.prototype.creerPrevisionVide = function() {
	return new Prevision();
};

PrevisionFactory.prototype.creerPrevision = function(vitesse, direction, u, v) {
	return new Prevision(vitesse, direction, u, v);
};

PrevisionFactory.prototype.creerPrevisionDepuisJSON = function(jsonObject) {
	// DO some stuff with the JSON object
	return new Prevision();
};