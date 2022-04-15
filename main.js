prediction1=""
prediction2=""
Webcam.set({
width:350,   
height:300,
img_format:"png",
png_quality:90
})
camera=document.getElementById("camera")
Webcam.attach("camera")
function take_snapshot() {
 Webcam.snap(function (data_uri) {
  document.getElementById("result").innerHTML="<img src='"+data_uri+"' id='capturedimage'>"
 }) 
}
console.log(ml5.version)
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/iq7lSplOX/model.json',modelloaded)
function modelloaded(){
console.log ("model is loaded!!!")    
}
function check(){
img=document.getElementById("captured image")    
classifier.classify(img,gotresult)
}
function gotresult(error,results){
if(error){console.error(error)}  
else{
console.log(results);    
}  
}