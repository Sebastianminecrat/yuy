

function setup() {
    canvas = createCanvas(280, 280);
    canvas.center();
    background("white");
  canvas.mouseReleased(salellunea);
synth=window.speechSynthesis;
  }
  
  function preload() {
    classifier = ml5.imageClassifier('DoodleNet');
    
  
   
  }
  
  
  
  
  function draw() {
  
    // Establece el grosor del stroke (trazo) a 13.
    strokeWeight(13);
    // Establece el color del stroke (trazo) a negro.
    stroke(0);
    // Si el mouse está presionado, dibuja una línea entre la posición previa y la actual del mouse.
    if (mouseIsPressed) {
      line(pmouseX, pmouseY, mouseX, mouseY);
    }
  }
  
  function tronco(){
  background("green")
  }
  
  
  function salellunea(){
classifier.classify(canvas, jkojdbdksmo)
  }
  function jkojdbdksmo(error,resultados){
if (error){
console.log(error);
}else{
console.log(resultados);
document.getElementById("lololi").innerHTML=resultados[0].label;
}
  }