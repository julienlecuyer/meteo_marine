/*
 Classe Prevision
 Définit une prévision météorologique.
*/

function Prevision (singleDimTabOfZoneGeo, date) {
	this.zonesGeographiques = singleDimTabOfZoneGeo;
	datePrevision = date;
}

Prevision.prototype.getZone = function(index) {
	return this.zonesGeographiques[index];
};