/*
 Classe ZoneGeographique
 Définit une zone contenant un ensemble de points.
*/

function ZoneGeographique (twoDimArrayOfPointGeographiques) {
	this.pointsGeographiques = twoDimArrayOfPointGeographiques;
}

ZoneGeographique.prototype.getNombreDePointsGeographiques = function() {
	var nbPoints = 0;
	for (var i = 0; i < this.pointsGeographiques.length; i++) {
		var deeper = this.pointsGeographiques[i];
		for (var j = 0; j < deeper.length; j++, nbPoints++) {}
	}
	return nbPoints;
};

/*
 Retourne les points concernés.
*/
ZoneGeographique.prototype.getPointsParDate = function(date) {
	var lesPoints = [];
	for (var i = 0; i < this.pointsGeographiques.length; i++) {
		var currentPoint = this.pointsGeographiques[i];
		for (var j = 0; j < currentPoint.length; j++) {
			if(currentPoint[j].getDate() == date) {
				lesPoints.push(currentPoint[j]);
			}
		}
	}
	return lesPoints;
};

