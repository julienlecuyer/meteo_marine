/*
 Classe Point
 Définit une coordonnée précise.
*/

function Point (lat, lon) {
	if(arguments.length == 0) { lat = 0.0; lon = 0.0; }
	this.latitude  = lat;
	this.longitude = lon;
}

Point.prototype.getLatitude = function() {
	return this.latitude.toFixed(2);
};

Point.prototype.setLatitude = function(nouvelleLatitude) {
	this.latitude = nouvelleLatitude;
};

Point.prototype.getLongitude = function() {
	return this.longitude.toFixed(2);
};

Point.prototype.setLongitude = function(nouvelleLongitude) {
	this.longitude = nouvelleLongitude;
};