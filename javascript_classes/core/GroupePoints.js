/*
	Classe GroupePoints
	Servant à regrouper 4 objets Previsions entre eux afin d'effectuer des moyennes sur leur vitesse, leur direction et leur pression.
	Dans le but de déterminer l'objet Prevision du niveau zoom inférieur 
	(exemple les 4 objet Prevision au niveau de zoom 1 donnent un seul objet Prevision au niveau de zoom 2)
*/


function GroupePoints (point0, point1, point2, point3) {
	this.points 	= new Array(4);
	this.points[0] 	= point0;
	this.points[1] 	= point1;
	this.points[2] 	= point2;
	this.points[3] 	= point3;
}

GroupePoints.prototype.getPoints = function() {
	return this.points;
};