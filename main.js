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
function gotResults(error,results){
  if (error ){
      console.log(error)

  }
  else {
      console.log(results);
      random_number_r = Math.floor(Math.random() *255 + 1)
      random_number_g = Math.floor(Math.random() *255 + 1)
      random_number_b = Math.floor(Math.random() *255 + 1)

      document.getElementById("spanSound").innerHTML = results[0].label;
      document.getElementById("spanAccurcy").innerHTML = (results[0].confidence *100 ).toFixed(2)+" %" ;
      document.getElementById("spanSound").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
      document.getElementById("spanAccurcy").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
      
      if (results[0].label == "cat" ){
          document.getElementById("ainmals").src="cat.png";
      }
      else if(results[0].label == "dog" ){
          document.getElementById("ainmals").src="dog.png";
      }

      else {
          document.getElementById("ainmals").src="ears.png";
      }
  } }