//mov

"use strict";

function playVideo() {
	var video = document.getElementById("v");
	video.style.display = "block";
	video.controls = false;
	video.play();

	setInterval(function () {
		var canvas = document.getElementById("c");
		canvas.getContext("2d").drawImage(video, 0, 0, 480, 270);
	}, 1000 / 30);
}

function restart() {
	var video = document.getElementById("v");
	video.currentTime = 0;
}