		
function addMarker(props){
            var marker = new google.maps.Marker({
              position:props.coords, 
                map:map,
            });
        if(props.iconImage){
          marker.setIcon(props.iconImage);
        }
       if(props.content){
          var infoWindow = new google.maps.InfoWindow({
              content:props.content 
          });

          marker.addListener('click', function(){
            infoWindow.open(map, marker);
          });
   }
 };
