(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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
},{}]},{},[1]);
