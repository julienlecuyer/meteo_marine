$(function() {
    if (!this.checked) {
            areaSelect.remove();
    }else{
    		areaSelect = L.areaSelect({
			    width:100, 
			    height:150, 
			});
			areaSelect.on("change", function() {
			            var bounds = this.getBounds();
			            $("#result .so").val(bounds.getSouthWest().lat + ", " + bounds.getSouthWest().lng);
			            $("#result .ne").val(bounds.getNorthEast().lat + ", " + bounds.getNorthEast().lng);
			        });
			areaSelect.addTo(_map);
	}
});

$('#cmn-toggle-1').click(function(){
    if (!this.checked) {
            areaSelect.remove();
    }else{
    		areaSelect = L.areaSelect({
			    width:100, 
			    height:150, 
			});
			areaSelect.on("change", function() {
			            var bounds = this.getBounds();
			            $("#result .so").val(bounds.getSouthWest().lat + ", " + bounds.getSouthWest().lng);
			            $("#result .ne").val(bounds.getNorthEast().lat + ", " + bounds.getNorthEast().lng);
			        });
			areaSelect.addTo(_map);
	}
}) 
