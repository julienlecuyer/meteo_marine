$(function() {

  $("#infoPos").hide();
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
$('#datetimepicker').datetimepicker({step:10});

$('.some_class').datetimepicker();

$('#default_datetimepicker').datetimepicker({
	formatTime:'H:i',
	formatDate:'d.m.Y',
	defaultTime:'10:00',
	timepickerScrollbar:false
});



});


$("#butVal").click(function(){
var laDeb = $("#result .lane").val();
var loDeb = $("#result .lone").val();
var laFin = $("#result .laso").val();
var loFin = $("#result .loso").val();
alert(laDeb + 1);

});


//BUTTON SELECTION
$('#butSelect').click(function(){
    if (!this.checked) {
            areaSelect.remove();
            $("#infoPos").hide();
    		$("#butVal").attr("value","Valider sur toute la carte");
    }else{

  			$("#infoPos").show();
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
