//https://teachablemachine.withgoogle.com/models/iI4XuVyLL/

function startClassification(){
    navigator.mediaDevices.getUserMedia({
        audio:true
    });
    classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/iI4XuVyLL/model.json",modelReady);
  
}
function modelReady(){
  classifier.classify(gotResults);
}
function gotResults(error,results){
  console.log("got results");
  console.log(results);
}