Parse.initialize('08xGrrKV6G4abmOxa8n8LWz3tWMmBOQtFny6JIo4','zD7gJ20GrHNsZs8ztNtTEcFosi48kIvWQkpXM5DB'); 
Parse.serverURL = "https://parseapi.back4app.com";

const Berry = Parse.Object.extend('Berry');


function saveBerry() {

    // post berry data to the backend
    var name = $("#selectB").val();
    lat = document.getElementById("lat").value
    lang = document.getElementById("lang").value
    loc = lat +','+ lang
    console.log(loc)

    const myNewObject = new Marker();

    myNewObject.set('Name', name);
    myNewObject.set('Location', loc);

    //alert("Please insert required fields")

    myNewObject.save({
        success: function () {
            alert("Congratulation ! Berry has been added succesfully!!")
        }, error: function (error) {
            alert("Something went wrong !")
            console.log("Error:" + error.message);
        }
    });
};

