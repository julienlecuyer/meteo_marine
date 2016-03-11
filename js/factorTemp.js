/*
 Calcule facteur pour la interpolation temporalle
*/

function factorTime (TempVecteur1, TempVecteur2, TempObservation) {
	this.facteurTemp;
	this.calculeFacteur(TempVecteur1, TempVecteur2, TempObservation);
}

factorTime.prototype.getFactor = function() {
	return this.facteurTemp;
};

/*
 Retourne  :
 - facteur
*/

//    tObs
//|----*----------|
//0               1
//t1              t2

factorTime.prototype.calculeFacteur = function(TempVecteur1, TempVecteur2, TempObservation){
	var t1    = TempVecteur1.getTemp();
	var t2    = PointVecteur2.getTemp();
	var tObs  = TempObservation.getTemp();

	var tempTotal  = t2-t1;
	var tempAt1    = tObs - t1
	
	this.facteurTemp = tempTotal / tempAt1;

};
