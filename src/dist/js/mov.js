//mov

"use strict";

function playVideo() {
	document.getElementById("v").style.display = "block";

	var video = document.getElementById("v");
	video.controls = false;
	if (video.paused) {
		video.play();
	} else {
		video.pause();
	}

	setInterval = (function () {
		var canvas = document.getElementById("c");
		canvas.getContext("2d").drawImage(video, 0, 0, 480, 270);
	}, 1000 / 30);
}

function restart() {
	var video = document.getElementById("v");
	video.currentTime = 0;
}