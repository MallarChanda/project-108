

function startclassification(){
navigator.mediaDevices.getUserMedia({audio:true});
classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/Sq1Kku96-/model.json',modelReady);
}

function modelReady(){
classifier.classify(gotResults);
}

function gotResults(error,results){
if (error) {
console.error(error);  
}
else{
console.log(results);
random_number_r = Math.floor(Math.random()*255) + 1;
random_number_g = Math.floor(Math.random()*255) + 1;
random_number_b = Math.floor(Math.random()*255) + 1;

document.getElementById("result_label").innerHTML = 'I can hear- '+results[0].label;
document.getElementById("result_confidence").innerHTML = 'Accuracy- '+(results[0].confidence*100).toFixed(2)+"%";
document.getElementById("result_label").style.color = 'rgb('+random_number_r+','+random_number_g+','+random_number_b+')';
document.getElementById("result_label").style.color = 'rgb('+random_number_r+','+random_number_g+','+random_number_b+')';

if (results[0].label=="Chirp") {
document.getElementById("birdy").style.width = "300";
document.getElementById("birdy").style.height = "300";
}else if (results[0].label=="Bark") {
document.getElementById("doggy").style.width = "300";
document.getElementById("doggy").style.height = "300"; 
}else if (results[0].label=="Meow") {
document.getElementById("Meow").style.width = "300";
document.getElementById("Meow").style.height = "300"; 
}else{
document.getElementById("birdy").style.width = "250";
document.getElementById("birdy").style.height = "250";
document.getElementById("doggy").style.width = "250";
document.getElementById("doggy").style.height = "250";
document.getElementById("Meow").style.width = "250";
document.getElementById("Meow").style.height = "250"; 
}

}
}
