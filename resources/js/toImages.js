$(document).ready(function($) {
	$("#guardar").click(function(event) {
		var can = $('#myCanvas');
		html2canvas(can, {
		  useCORS: true,
		  onrendered: function(canvas) {
			    var img = canvas.toDataURL()
			    alert(img);
			  },
			
			  height: can.height()
		});
	});	
});
