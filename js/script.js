Parse.initialize('08xGrrKV6G4abmOxa8n8LWz3tWMmBOQtFny6JIo4','zD7gJ20GrHNsZs8ztNtTEcFosi48kIvWQkpXM5DB'); 
Parse.serverURL = "https://parseapi.back4app.com";


var Marker;

//function saveBerry() {
//            
//            const myNewObject = new Marker();
//            myNewObject.set('Name', 'name');
//            myNewObject.set('Location', location);
//            myNewObject.set('Type', 'A string');
//
//            myNewObject.save().then(
//              (result) => {
//                console.log(result);
//              },
//                       
//               
//                
//              (error) => {
//                console.error(error);
//              }
//            );
//}

//abc

const Marker = Parse.Object.extend('Marker');


function saveBerry() {

    // post berry data to the backend
    var name = $("#selectB").val(); 
    
    var lat = document.getElementById("lat").value;
    var lang = document.getElementById("lang").value;
    var location = lat +','+ lang;
    
    const myNewObject = new Marker();

    myNewObject.set('Name', name);
    myNewObject.set('Location', location);

    myNewObject.save({
        success: function(){
            alert(" Congratulation ! Berry has been added succesfully!!")
        }, error: function(error){
            alert("problem Found!")
            console.log("Error:" + error.message);
        }
    });
};


//abc


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
  })
}, (error) => {
  console.log(error);
});

};
    
    