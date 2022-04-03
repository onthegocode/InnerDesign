let video = document.querySelector(".video");
let myVideo = document.getElementById("video");
let videoPlayer = document.querySelector(".video-player");
let color = document.querySelector(".bar");
let btn = document.getElementById("play-pause");
let mainBtn = document.querySelector(".main-btn");
function togglePlayPause() {
	if (video.paused) {
		btn.className = "pause";
		video.play();
		btn.style.cursor = "pointer";
		mainBtn.style.display = "none";
		videoPlayer.style.animation = "none";
	} else {
		btn.className = "play";
		video.pause();
	}
}

btn.onclick = function () {
	togglePlayPause();
};

video.addEventListener("timeupdate", function () {
	let colorPos = video.currentTime / video.duration;
	color.style.width = colorPos * 100 + "%";
	if (video.ended) {
		btn.className = "play";
		btn.style.cursor = "pointer";
		mainBtn.style.display = "flex";
		video.currentTime = 0;
		video.load();
		videoPlayer.style.animation = "fadedownheader 0.8s ease-in-out";
	}
});

//Scroll Progress

const scrollProgressElement = document.querySelector("#scroll-progress");

function scrollProgress() {
	const webpageHeight = document.body.scrollHeight;
	const currentDistance = document.documentElement.scrollTop;

	const windowHeight = document.documentElement.clientHeight;

	const scrollPercentage =
		(currentDistance / (webpageHeight - windowHeight)) * 100;
	scrollProgressElement.style.width = Math.round(scrollPercentage) + "%";
}

document.addEventListener("scroll", scrollProgress);
