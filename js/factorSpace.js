/*
 Calcule facteur pour la interpolation spatiale
*/

function factorSpace (PointVecteur1, PointVecteur2, PointObservation) {
	this.facteur;
	this.calculeFacteur(PointVecteur1, PointVecteur2, PointObservation);
}

factorSpace.prototype.getFactor = function() {
	return this.facteur;
};

/*
 Retourne  :
 - facteur
*/

//    pObs
//|----*----------|
//0               1
//v1              v2

factorSpace.prototype.calculeFacteur = function(PointVecteur1, PointVecteur2, PointObservation){
	var p1 = PointVecteur1.getPoint();
	var p2 = PointVecteur2.getPoint();
	var pObs  = PointObservation.getPoint();

	var distanceTotal  = p2-p1;
	var distanceAp1    = Obs - p1
	
	this.facteur = distanceAp1 / distanceTotal;

};
