function preload() {
  catnoselist = [""];
  catnose = loadImage("Cat Filter - Copy.png");
  catears = loadImage("Cat Filter.png");
}
function setup() {
  canvas = createCanvas(300, 280);
  canvas.center();
  video = createCapture(VIDEO);
  video.size(300, 300);
  video.hide();
  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on("pose", gotPoses);
}
function modelLoaded() {
  console.log("Pose Net is Initialized!");
}
noseX = 0;
noseY = 0;
function gotPoses(results) {
  if (results.length > 0) {
    console.log(results);
    noseX = results[0].pose.nose.x;
    noseY = results[0].pose.nose.y;
    console.log("nose x=" + results[0].pose.nose.x);
    console.log("nose y=" + results[0].pose.nose.y);
  }
}
function draw() {
  image(video, 0, 0, 300, 300);
  image(catnose, noseX - 80, noseY - 10, 150, 150);
  image(catears, noseX - 65, noseY - 130, 150, 100);
}
function take_snapshot() {
  save("Cat Filter.png");
}
function filterback() {
  window.location = "kwitter_room.html";
}
