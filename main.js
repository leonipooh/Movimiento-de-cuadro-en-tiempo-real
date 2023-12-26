var noseX = 0;
var noseY = 0;
var wristR = 0;
var wristL = 0;

function setup(){
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.position(50, 200)
    canvas = createCanvas(500, 500);
    canvas.position(500, 200);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses)
}

function modelLoaded(){
    console.log("PoseNet se esta inicializando");
}

function gotPoses(XD){
    if (XD.length > 0){
        console.log(XD);
        noseX = XD[0].pose.nose.x;
        noseY = XD[0].pose.nose.y;
        wristR = XD[0].pose.rightWrist.x;
        wristL = XD[0].pose.leftWrist.x;
    }
}

function draw(){
    image(video, 0, 0, 300, 300);
    background("#dea002");
}