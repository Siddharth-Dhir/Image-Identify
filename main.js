Webcam.set({
width: 300,
height:270,
image_format:"png",
png_quality:100


});
Camera = document.getElementById("Camera");
Webcam.attach("#Camera");
function Take()
{
    Webcam.snap(function(data_uri){
        document.getElementById("Risult").innerHTML = '<img id="Captured_Image" src="' + data_uri + '"/>';

    });
    
}









console.log("ml5 version", ml5.version);
classifier= ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/v_sl95BzE/model.json",modelLoaded);
 function modelLoaded(){
     console.log("Model Loaded");
 }
 function Check()
 {
     img = document.getElementById("Captured_Image");
     classifier.classify(img,gotResult);
 }
 function gotResult(error,results)
 {
if (error){
    console.error(error);
}else{
    console.log(results);
    document.getElementById("Risult_Object_Name").innerHTML= results[0].label;
    document.getElementById("Risult_Object_Accuracy").innerHTML= results[0].confidence.toFixed(3);
}
 }