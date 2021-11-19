function setup() {
    canvas = createCanvas(355,300);
    canvas.center();
    background("white");
    canvas.mouseReleased(classifyCanvas);
    synth = window.speechSynthesis; 
}

function preLoad() {
    classifier = ml5.imageClassifier('DoodleNet');
}

function draw() {
    strokeWeight(5);
    if (mouseIsPressed) {
        line(pmouseX, pmouseY, mouseX, mouseY);
    } 
}
function classifyCanvas() {
    classifier.classify(canvas, gotResult);
}

function gotResult(error, results) {
    if (error) {
        console.log(error);
    } 
    console.log(results);
    document.getElementById("label").innerHTML = "Sketch Results: " + results[0].label;
    document.getElementById("confidence").innerHTML = "Confidence: " + Math.round (results[0].confidence * 100);
}

function clearCanvas() {
    background("white");
}