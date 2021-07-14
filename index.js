var boombtn = document.getElementById("boom");
var clap = document.getElementById("clap");
var hihat = document.getElementById("hihat");
var kick = document.getElementById("kick");
var openhat = document.getElementById("openhat");
var ride = document.getElementById("ride");
var snare = document.getElementById("snare");
var tink = document.getElementById("tink");
var tom = document.getElementById("tom");
console.log("script")
document.body.addEventListener('keydown', function(e) {
    var keycode = e.keyCode;
    if (keycode === 65) {
        // console.log("audio")
        aaudio.play();
        console.log("boom");
        document.body.onkeypress = function() {
            boombtn.style.color = "gold"
        }
        document.body.onkeyup = function() {
            boombtn.style.color = "white"
        }
    }
    if (keycode === 83) {
        // console.log("audio")
        saudio.play();
        console.log("clap");
        document.body.onkeypress = function() {
            clap.style.color = "gold"
        }
        document.body.onkeyup = function() {
            clap.style.color = "white"
        }
    }
    if (keycode === 68) {
        // console.log("audio")
        daudio.play();
        console.log("hihat");
        hihat.style.color = "gold";
        document.body.onkeypress = function() {
            hihat.style.color = "gold"
        }
        document.body.onkeyup = function() {
            hihat.style.color = "white"
        }
    }
    if (keycode === 70) {
        // console.log("audio")
        faudio.play();
        console.log("kick");
        kick.style.color = "gold";
        document.body.onkeypress = function() {
            kick.style.color = "gold"
        }
        document.body.onkeyup = function() {
            kick.style.color = "white"
        }
    }
    if (keycode === 71) {
        // console.log("audio")
        gaudio.play();
        console.log("openhat");
        openhat.style.color = "gold";
        document.body.onkeypress = function() {
            openhat.style.color = "gold"
        }
        document.body.onkeyup = function() {
            openhat.style.color = "white"
        }
    }
    if (keycode === 72) {
        // console.log("audio")
        haudio.play();
        console.log("ride");
        ride.style.color = "gold";
        document.body.onkeypress = function() {
            ride.style.color = "gold"
        }
        document.body.onkeyup = function() {
            ride.style.color = "white"
        }
    }
    if (keycode === 74) {
        // console.log("audio")
        jaudio.play();
        console.log("snare");
        snare.style.color = "gold";
        document.body.onkeypress = function() {
            snare.style.color = "gold"
        }
        document.body.onkeyup = function() {
            snare.style.color = "white"
        }
    }
    if (keycode === 75) {
        // console.log("audio")
        kaudio.play();
        console.log("tink");
        tink.style.color = "gold";
        document.body.onkeypress = function() {
            tink.style.color = "gold"
        }
        document.body.onkeyup = function() {
            tink.style.color = "white"
        }
    }
    if (keycode === 76) {
        // console.log("audio")
        laudio.play();
        console.log("tom");
        tom.style.color = "gold";
        document.body.onkeypress = function() {
            tom.style.color = "gold"
        }
        document.body.onkeyup = function() {
            tom.style.color = "white"
        }
    }
});

var aaudio = new Audio();
aaudio.src = "/music/boom.wav";

var saudio = new Audio();
saudio.src = "/music/clap.wav";

var daudio = new Audio();
daudio.src = "/music/hihat.wav";

var faudio = new Audio();
faudio.src = "/music/kick.wav";

var gaudio = new Audio();
gaudio.src = "/music/openhat.wav";

var haudio = new Audio();
haudio.src = "/music/ride.wav";

var jaudio = new Audio();
jaudio.src = "/music/snare.wav";

var kaudio = new Audio();
kaudio.src = "/music/tink.mp3";

var laudio = new Audio();
laudio.src = "/music/tom.mp3";