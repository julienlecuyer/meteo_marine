/*
 Classe Prevision
 Définit une prévision météorologique.
*/

function Prevision (singleDimTabOfZoneGeo, startDate, endDate) {
	this.zonesGeographiques = singleDimTabOfZoneGeo;
	this.dateDebutPrevision = startDate;
	this.dateFinPrevision = endDate;
}

Prevision.prototype.getZoneParCoordonnees = function(index) {
	// TODO return this.zonesGeographiques[].???;
};

Prevision.prototype.getPointsParDate = function(date) {
	var lesPoints = [];
	for(var i = 0; i < this.zonesGeographiques.length; i++) {
		lesPoints = lesPoints.concat(this.zonesGeographiques[i].getPointsParDate(date));
	}
	return lesPoints;
};

Prevision.prototype.modifierAttributsPoints = function(date, lat, lon, objVent) {
	var pointsAModifier = this.getPointsParDate(date);
	for(var i=0; i < pointsAModifier.length; i++) {
		pointsAModifier[i].setVent(objVent);
		console.log(pointsAModifier[i].getVent());
	}
};