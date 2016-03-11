var allEdit = new Array();
var allZoneConfig = new Array();
var nbEdit = 0;
var zoneCrt = -1;

$(function() {
  $('#butSuppr').hide();
  $("#infoPos").hide();
  $('#butRet').hide();
  
    $( "#slider-vitVent" ).slider({
      orientation: "vertical",
      range: "min",
      min: 0,
      max: 100,
      value: 10,
      slide: function( event, ui ) {
        $( "#valVitVent" ).val( ui.value + "kt" );
      }
    });
    $( "#valVitVent" ).val( $( "#slider-vitVent" ).slider( "value" ) +"kt" );

    $( "#slider-pression" ).slider({
      orientation: "vertical",
      range: "min",
      min: 940,
      max: 1080,
      value: 1005,
      slide: function( event, ui ) {
        $( "#valPression" ).val( ui.value + "hPa" );
      }
    });
    $( "#valPression" ).val( $( "#slider-pression" ).slider( "value" ) +"hPa" );


    $( "#slider-dirVent" ).slider({
      orientation: "vertical",
      range: "min",
      min: 0,
      max: 360,
      value: 0,
      slide: function( event, ui ) {
        $( "#valdirVent" ).val( ui.value + "°" );
      }
    });
    $( "#valdirVent" ).val( $( "#slider-dirVent" ).slider( "value" ) +"°" );



$.datetimepicker.setLocale('fr');


$('#datetimepicker').datetimepicker();
$('#datetimepicker').datetimepicker({step:60});

$('.some_class').datetimepicker();

$('#default_datetimepicker').datetimepicker({
	formatTime:'H:i',
	formatDate:'d.m.Y',
	defaultTime:'10:00',
	timepickerScrollbar:false
});



});


$("#butVal").click(function(){

  var nbEditCrt = nbEdit;
  if(zoneCrt != -1){

    $('#butSuppr').hide();
    $('#butRet').hide();
    $('#zone'+zoneCrt).remove();
    $('#butVal').val("Valider sur toute la carte");
      console.log("5");
    var marker = allEdit[zoneCrt];
      console.log("5");
    var nbMarker = allZoneConfig[zoneCrt].nbMarker;
      console.log("6");
    for(var i = 0; i<nbMarker; i++){
      _map.removeLayer(marker[i]);
      console.log(i);

    }
    nbEditCrt = zoneCrt;
}

    var laFin = parseFloat($("#result .lane").val());
    var loFin = parseFloat($("#result .lone").val());
    var laDeb = parseFloat($("#result .laso").val());
    var loDeb = parseFloat($("#result .loso").val());
    var dirVent = $( "#valdirVent" ).val();
    var pression = $( "#valPression" ).val();
    var vitVent = $( "#valVitVent" ).val();

    var donnee = new Object();
    var zoneConfig = new Object();
    var listDonnee= new Array();
    var listMarker = new Array();
    var nbDonnee = 0;

      var SizeOfIcon = 40;
      var beaufort = [
        L.icon({ iconUrl: 'src/img/beaufort/beaufort0.png', iconSize: [SizeOfIcon, SizeOfIcon], iconAnchor: [SizeOfIcon/2, SizeOfIcon/2]}),
        L.icon({ iconUrl: 'src/img/beaufort/beaufort1.png', iconSize: [SizeOfIcon, SizeOfIcon], iconAnchor: [SizeOfIcon/2, SizeOfIcon/2]}),
        L.icon({ iconUrl: 'src/img/beaufort/beaufort2.png', iconSize: [SizeOfIcon, SizeOfIcon], iconAnchor: [SizeOfIcon/2, SizeOfIcon/2]}),
        L.icon({ iconUrl: 'src/img/beaufort/beaufort3.png', iconSize: [SizeOfIcon, SizeOfIcon], iconAnchor: [SizeOfIcon/2, SizeOfIcon/2]}),
        L.icon({ iconUrl: 'src/img/beaufort/beaufort4.png', iconSize: [SizeOfIcon, SizeOfIcon], iconAnchor: [SizeOfIcon/2, SizeOfIcon/2]}),
        L.icon({ iconUrl: 'src/img/beaufort/beaufort5.png', iconSize: [SizeOfIcon, SizeOfIcon], iconAnchor: [SizeOfIcon/2, SizeOfIcon/2]}),
        L.icon({ iconUrl: 'src/img/beaufort/beaufort6.png', iconSize: [SizeOfIcon, SizeOfIcon], iconAnchor: [SizeOfIcon/2, SizeOfIcon/2]}),
        L.icon({ iconUrl: 'src/img/beaufort/beaufort7.png', iconSize: [SizeOfIcon, SizeOfIcon], iconAnchor: [SizeOfIcon/2, SizeOfIcon/2]}),
        L.icon({ iconUrl: 'src/img/beaufort/beaufort8.png', iconSize: [SizeOfIcon, SizeOfIcon], iconAnchor: [SizeOfIcon/2, SizeOfIcon/2]}),
        L.icon({ iconUrl: 'src/img/beaufort/beaufort9.png', iconSize: [SizeOfIcon, SizeOfIcon], iconAnchor: [SizeOfIcon/2, SizeOfIcon/2]}),
        L.icon({ iconUrl: 'src/img/beaufort/beaufort10.png', iconSize: [SizeOfIcon, SizeOfIcon], iconAnchor: [SizeOfIcon/2, SizeOfIcon/2]}),
        L.icon({ iconUrl: 'src/img/beaufort/beaufort11.png', iconSize: [SizeOfIcon, SizeOfIcon], iconAnchor: [SizeOfIcon/2, SizeOfIcon/2]}),
        L.icon({ iconUrl: 'src/img/beaufort/beaufort12.png', iconSize: [SizeOfIcon, SizeOfIcon], iconAnchor: [SizeOfIcon/2, SizeOfIcon/2]})
      ];




    for (var i = laDeb; i <= laFin; i = i + 0.5) { 
        for (var j = loDeb; j <= loFin; j = j + 0.5) { 
          donnee.lat = i;
          donnee.long = j;
          donnee.speed = vitVent;
          donnee.direction = dirVent;


          var power = _draw.speedToBeaufort(parseInt(donnee.speed));
          var marker =  L.marker([donnee.lat, donnee.long], {
            icon: beaufort[power], iconAngle: parseInt(donnee.direction)
          });

          marker.addTo(_map).bindPopup("Latitude : "+ donnee.lat +"<br>Longitude : "+ donnee.long +"<br>Vitesse : "+ donnee.speed +" Noeuds<br>Force : "+ power +"<br>Direction : "+ donnee.direction +"°");      
          

          listMarker[nbDonnee] = marker;
          listDonnee[nbDonnee] = JSON.parse(JSON.stringify(donnee));
          nbDonnee++;
        }
    }


    zoneConfig.laFin = laFin;
    zoneConfig.loFin = loFin;
    zoneConfig.laDeb = laDeb;
    zoneConfig.loDeb = loDeb;
    zoneConfig.dirVent = dirVent;
    zoneConfig.pression = pression;
    zoneConfig.vitVent = vitVent;
    zoneConfig.nbMarker = nbDonnee;
    allZoneConfig[nbEditCrt] = zoneConfig;

    allEdit[nbEditCrt] = listMarker;
    $('#allEdit').append($('<input class="butZone" type="button" id="zone'+nbEditCrt+'" value="Selectionner zone de prévision N°'+nbEditCrt+'">'));
    
    if(nbEditCrt == nbEdit){
      nbEdit ++;
    } 

    var datePick = $("#datetimepicker").val();
    ///([0-9]{2})/.exec(txt);
    datePick = parseInt(datePick.replace(/[^0-9\.]/g, ''), 10);

    var nameFic = datePick.toString().substring(2,10);
    //"previons" + RegExp.$2 + RegExp.$3 + RegExp.$4 + RegExp.$5; 
    var jsonDonnee = JSON.stringify(listDonnee);


  if(zoneCrt != -1){
    zoneCrt = -1;
  }

});


//Editer une zone
$('#allEdit').on('click', '.butZone', function(){

  $('#butSuppr').show();
  $('#butRet').show();
  var zoneId = parseInt($(this).attr('id').replace(/[^0-9\.]/g, ''), 10);
  $('#butVal').val("Modifier la zone N°"+zoneId);
  zoneCrt = zoneId;

  var config = allZoneConfig[zoneCrt];
  var marker = allEdit[zoneCrt];

  $( "#valVitVent" ).val( config.vitVent );
  $( "#valPression" ).val( config.pression );
  $( "#valdirVent" ).val( config.dirVent );

//recuperation de la zone de selection
  areaSelect.remove();
  areaSelect = L.areaSelect({
          width:100, 
          height:150, 
  });
  areaSelect.on("change", function() {
                  var bounds = this.getBounds();
                  $("#result .laso").val(bounds.getSouthWest().lat);
                  $("#result .loso").val(bounds.getSouthWest().lng);
                  $("#result .lane").val(bounds.getNorthEast().lat);
                  $("#result .lone").val(bounds.getNorthEast().lng);
              });
  areaSelect.addTo(_map);


});



$('#butSuppr').click(function(){

  $('#butSuppr').hide();
  $('#butRet').hide();
  $('#zone'+zoneCrt).remove();
  $('#butVal').val("Valider sur toute la carte");
    console.log("5");
  var marker = allEdit[zoneCrt];
    console.log("5");
  var nbMarker = allZoneConfig[zoneCrt].nbMarker;
    console.log("6");
  for(var i = 0; i<nbMarker; i++){
    _map.removeLayer(marker[i]);
    console.log(i);

  }
  zoneCrt = -1;
});

$('#butRet').click(function(){

  $('#butSuppr').hide();
  $('#butRet').hide();
  $('#butVal').val("Valider sur toute la carte");
  zoneCrt = -1;
});


//BUTTON SELECTION
$('#butSelect').click(function(){
    if (!this.checked) {
            areaSelect.remove();
            $("#infoPos").hide();
    		$("#butVal").attr("value","Valider sur toute la carte");
    }else{

  		//	$("#infoPos").show();
    		$("#butVal").attr("value","Valider sur la zone");
    		areaSelect = L.areaSelect({
			    width:100, 
			    height:150, 
			});
			areaSelect.on("change", function() {
			            var bounds = this.getBounds();
			            $("#result .laso").val(bounds.getSouthWest().lat);
                  $("#result .loso").val(bounds.getSouthWest().lng);
			            $("#result .lane").val(bounds.getNorthEast().lat);
                  $("#result .lone").val(bounds.getNorthEast().lng);
			        });
			areaSelect.addTo(_map);
	}
}) 



