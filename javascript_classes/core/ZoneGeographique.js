/*
 Classe ZoneGeographique
 Définit une zone contenant un ensemble de points.
*/

function ZoneGeographique (twoDimArrayOfPointGeographiques, date) {
	this.pointsGeographiques = twoDimArrayOfPointGeographiques;
	this.date = date.toLocaleDateString()+' '+date.toLocaleTimeString();
}

ZoneGeographique.prototype.getNombreDePointGeographique = function() {
	var nbPoints = 0;
	for (var i = 0; i < this.pointsGeographiques.length; i++) {
		var deeper = this.pointsGeographiques[i];
		for (var j = 0; j < deeper.length; j++, nbPoints++) {}
	}
	return nbPoints;
};	

ZoneGeographique.prototype.getPointGeographique = function(iIndex, jIndex) {
	return this.pointsGeographiques[iIndex][jIndex];
};