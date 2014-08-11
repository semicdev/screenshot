var map;
var mapa = {
 	x:640,
 	y:300,
 	markers:[],
 	addMarker:function(marker){
 		this.markers.push(marker);
 	},
 	useMap : function(mapa){
 		this.mapa = mapa;
 	},
	url: function(){
		var url="http://maps.googleapis.com/maps/api/staticmap?";
        url += this.mapCenter()+this.zoom()+this.size()+this.urlMarkers()+this.urlPolyPath()+"maptype=hybrid&sensor=false&key=AIzaSyDGAc2LNcqcMIqjFIocrQWZ_HYsaKvtpRQ";
		return url;
	},
	mapCenter : function(){
	    return	"center="+this.mapa.getCenter().lat()+","+this.mapa.getCenter().lng()+"&";
	},
	zoom : function(){
	    return	"zoom="+this.mapa.getZoom()+"&";
	},
	size : function(){
	    return	"size="+this.x+"x"+this.y+"&";
	},
	setMapa: function(elemento){
		
		elemento.attr({
			width: this.x+'px',
			height: this.y+'px',
			src: this.url()
		});
		elemento.appendTo('body');
	},
	urlMarkers:function(){
		var url="";
		$.each(this.markers, function(index, val) {
			 /* iterate through array or object */
			 var urlRed ="markers="+val.getPosition().lat()+","+val.getPosition().lng()+"&";
			url += urlRed;			
		});

		return url;
	},
	urlPolyPath: function(){
		var path = "path=color:0x0000ff|weight:5|fillcolor:0xFFFF0033"; 
		$.each(this.markers, function(index, val) {
			 /* iterate through array or object */
			 var urlPath ="|"+val.getPosition().lat()+","+val.getPosition().lng();
			path += urlPath;			
		});

		return path+"&";
	}

}


var initialize =function() {
  var mapOptions = {
    zoom: 19,
    center: new google.maps.LatLng(19.4326, -99.133158),
    mapTypeId: google.maps.MapTypeId.HYBRID
  };
  map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);
  mapa.useMap(map);
google.maps.event.addListener(map, "dblclick", function(event)
            {
                // place a marker
                placeMarker(event.latLng);
            });
}

google.maps.event.addDomListener(window, 'load', initialize);

function placeMarker(location) {
    var marker = new google.maps.Marker({
      		        position: location, 
            	  	map: map
                });
    mapa.addMarker(marker);
    	console.log(mapa.markers);
	}

 


//center=40.714728,-73.998672&zoom=12&size=400x400&sensor=false
