/*
	Classe servant à regrouper 4 objets Previsions entre eux afin d'effectuer des moyennes sur leur vitesse, leur direction et leur pression.
	Dans le but de déterminer l'objet Prevision du niveau zoom inférieur 
	(exemple les 4 objet Prevision au niveau de zoom 1 donnent un seul objet Prevision au niveau de zoom 2)
*/

function groupePrevisions (point0, point1, point2, point3) {
	this.tabPrev = new Array(4);
	this.tabPrev[0] = point0;
	this.tabPrev[1] = point1;
	this.tabPrev[2] = point2;
	this.tabPrev[3] = point3;
}

