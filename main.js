function preload() {
}

function setup() {
    canvas = createCanvas(400, 400);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(700, 700);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log("poseNet is initiated")
}
function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        console.log("position of nose in x value = " + results[0].pose.nose.x);
        console.log("position of nose in y value = " + results[0].pose.nose.y);

    }
}

function draw() {
    image(video, 0,0, 700,700);
}



function take_snap() {
    save('cloneface.png');
}