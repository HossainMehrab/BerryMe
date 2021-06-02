Parse.initialize('08xGrrKV6G4abmOxa8n8LWz3tWMmBOQtFny6JIo4','zD7gJ20GrHNsZs8ztNtTEcFosi48kIvWQkpXM5DB'); 
Parse.serverURL = "https://parseapi.back4app.com";


var Marker;

function saveBerry() {
	 var name = $("#selectB").val();
    lat = document.getElementById("lat").value;
    lang = document.getElementById("lang").value;
    loc =  new Parse.GeoPoint({latitude: parseFloat(lat), longitude: parseFloat(lang)});
	console.log(lat);
	console.log(loc);
	
            Marker = Parse.Object.extend('Marker');
            const myNewObject = new Marker();
            myNewObject.set('Name', name);
            myNewObject.set('Location', loc);
            myNewObject.set('Type', 'A string');

            myNewObject.save().then(
              (result) => {
                console.log(result);
				 alert("Congratulation ! Berry has been added succesfully!!");
              },
                       
               
                
              (error) => {
                console.error(error);
				alert("Something went wrong !");
              }
            );
}




function getBerry(type) {

    Marker = Parse.Object.extend('Marker');
const query = new Parse.Query(Marker);
//query.equalTo("Name", type);
//query.equalTo("Location", new Parse.GeoPoint({latitude: 40.0, longitude: //-30.0}));
//query.equalTo("Type", 'A string');
query.select("Name","Location");
    query.find().then((results) => {
  results.forEach((result) => {
    var Name = result.get("Name");
    var Lat = result.get("Location").latitude;
    var Lng = result.get("Location").longitude; 
    //const Type = result.get('Type');
    console.log(Name+" : "+Lat+" : "+Lng);
	console.log(result.get('Type'));
	addMarker({coords:{lat:Lat,lng:Lng},iconImage:'img/Berry.png',
                       content:'<h2>' + Name + '</h2>'});
      
  })
}, (error) => {
  console.log(error);
});

};
    
    