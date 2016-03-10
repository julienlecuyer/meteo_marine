/*
 Classe PointGeographique
 Définit une coordonnée précise.
*/

function PointGeographique (vent, point, pression) {
	this.vent     = vent;
	this.point    = point;
	this.pression = pression;
}

PointGeographique.prototype.getVent = function() {
	return this.vent;
};

PointGeographique.prototype.getPoint = function() {
	return this.point;
};

PointGeographique.prototype.getPression = function() {
	return this.pression;
};