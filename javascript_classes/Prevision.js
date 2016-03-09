/*
 Classe Prevision
 Définit une prévision météorologique.
*/

function Prevision (vitesse, direction, u, v) {
	// Pour utiliser un constructeur avec paramètres ou sans
	// on doit vérifier le nombre d'arguments
	if (arguments.length == 4) {
		this.vitesse_du_vent = vitesse;     // en m/s
		this.direction_du_vent = direction; // en km/h
		this.composante_u_du_vent = u;      // U rayon
		this.composante_v_du_vent = v;      // V rayon
	} else {
		this.vitesse_du_vent = 0;        // en m/s
		this.direction_du_vent = 0;      // en km/h
		this.composante_u_du_vent = 0.0; // U rayon
		this.composante_v_du_vent = 0.0; // V rayon
	}
}

Prevision.prototype.getVitesseDuVent = function() {
	return this.vitesse_du_vent;
};

Prevision.prototype.setVitesseDuVent = function(nouvelleVitesse) {
	this.vitesse_du_vent = nouvelleVitesse;
};

Prevision.prototype.getDirectionDuVent = function() {
	return this.direction_du_vent.toFixed(2);
};

Prevision.prototype.setDirectionDuVent = function(nouvelleDirection) {
	this.direction_du_vent = nouvelleDirection;
};

Prevision.prototype.getComposanteUDuVent = function() {
	return this.composante_u_du_vent.toFixed(2);
};

Prevision.prototype.setComposanteUDuVent = function(nouveauU) {
	this.composante_u_du_vent = nouveauU;
};

Prevision.prototype.getComposanteVDuVent = function() {
	return this.composante_v_du_vent.toFixed(2);
};

Prevision.prototype.setComposanteVDuVent = function(nouveauV) {
	this.composante_v_du_vent = nouveauV;
};

Prevision.prototype.genererDetails = function() {
	var message = 'Direction du vent : '+this.getDirectionDuVent()+'<br>'
	+'Vitesse du vent : '+this.getVitesseDuVent()+'<br>'
	+'Composante V du vent : '+this.getComposanteVDuVent()+'<br>'
	+'Composante U du vent : '+this.getComposanteUDuVent();
	return message;
};