/*
 Classe PointGeographique
 Définit une coordonnée précise.
*/

function PointGeographique (vent, point, pression, date) {
	this.vent     = vent;
	this.point    = point;
	this.pression = pression;
	this.date     = date.toLocaleDateString()+' '+date.getHours();
}

PointGeographique.prototype.getVent = function() {
	return this.vent;
};

PointGeographique.prototype.setVent = function(vent) {
	this.vent = vent;
};

PointGeographique.prototype.getPoint = function() {
	return this.point;
};

PointGeographique.prototype.setPoint = function(point) {
	this.point = point;
};

PointGeographique.prototype.getPression = function() {
	return this.pression;
};

PointGeographique.prototype.setPression = function(pression) {
	this.pression = pression;
};

PointGeographique.prototype.getDate = function() {
	return this.date;
};