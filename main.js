//https://teachablemachine.withgoogle.com/models/UzyNwZSdE/
Webcam.set({
    width: 360,
    height: 300,
    image_format: "png"
    ,png_quality: 90
})
camera=document.getElementById("camera")
Webcam.attach("#camera")
function takesnap() {
    Webcam.snap(function (data_url) {
        document.getElementById("result").innerHTML='<img id="capture_image" src="'+data_url+'"/>'
    })
}
console.log('ml5version :',ml5.version)
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/UzyNwZSdE/model.json",modelloaded)
function modelloaded() {
    console.log("modelloaded")
}