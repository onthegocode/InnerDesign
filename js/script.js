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

// /////////////////////////////////
// Animate on View
///////////////////////////////////

(function () {
	var elements;
	var elements2;
	var elements3;
	var elements4;
	var elements5;
	var windowHeight;

	function init() {
		elements = document.querySelectorAll(".hidden");
		elements2 = document.querySelectorAll(".hidden2");
		elements3 = document.querySelectorAll(".hidden3");
		elements4 = document.querySelectorAll(".hidden4");
		elements5 = document.querySelectorAll(".hidden5");
		windowHeight = window.innerHeight;
	}

	function checkPosition() {
		//interior
		for (var i = 0; i < elements.length; i++) {
			var element = elements[i];
			var positionFromTop = elements[i].getBoundingClientRect().top;

			if (positionFromTop - windowHeight / 2 <= 0) {
				element.classList.add("interior__animate");
				element.classList.remove("hidden");
			}
		}
		//styles
		for (var i = 0; i < elements2.length; i++) {
			var element = elements2[i];
			var positionFromTop = elements2[i].getBoundingClientRect().top;

			if (positionFromTop - windowHeight / 2 <= 0) {
				element.classList.add("styles__animate");
				element.classList.remove("hidden2");
			}
		}
		//dream
		for (var i = 0; i < elements3.length; i++) {
			var element = elements3[i];
			var positionFromTop = elements3[i].getBoundingClientRect().top;

			if (positionFromTop - windowHeight / 2 <= 0) {
				element.classList.add("dream__animate");
				element.classList.remove("hidden3");
			}
		}
		//footer
		for (var i = 0; i < elements4.length; i++) {
			var element = elements4[i];
			var positionFromTop = elements4[i].getBoundingClientRect().top;

			if (positionFromTop - windowHeight / 1.5 <= 0) {
				element.classList.add("footer__animate");
				element.classList.remove("hidden4");
			}
		}

		for (var i = 0; i < elements5.length; i++) {
			var element = elements5[i];
			var positionFromTop = elements5[i].getBoundingClientRect().bottom;

			if (positionFromTop - windowHeight * 1.2 <= 0) {
				element.classList.add("copyright__animate");
				element.classList.remove("hidden5");
			}
		}
	}

	window.addEventListener("scroll", checkPosition);
	window.addEventListener("resize", init);

	init();
	checkPosition();
})();

document.onscroll = function () {
	if ((window.innerHeight + window.scrollY) / 2 > document.body.clientHeight) {
		document.getElementById("scroll-top").style.display = "block";
	} else {
		document.getElementById("scroll-top").style.display = "none";
	}
};
