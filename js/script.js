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
		elementvisible = document.querySelectorAll(".visible");
		elementvisible2 = document.querySelectorAll(".visible2");
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
		//sidebar
		for (var i = 0; i < elementvisible2.length; i++) {
			var element = elementvisible[i];
			var element2 = elementvisible2[i];
			var positionFromTop = elementvisible2[i].getBoundingClientRect().bottom;

			if (positionFromTop - windowHeight / 6 <= 0) {
				element.classList.add("sidebar__visible");
				element.classList.remove("visible");
				element2.classList.remove("visible2");
			} else {
				element.classList.remove("sidebar__visible");
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

// Toggle nav

let navLink1 = document.querySelector(".nav__items--1");
let navLink2 = document.querySelector(".nav__items--2");
let navLink3 = document.querySelector(".nav__items--3");
let navLink4 = document.querySelector(".nav__items--4");
let sideNav = document.getElementById("navi-toggle");
navLink1.addEventListener("click", function checkBox1() {
	document.getElementById("navi-toggle").checked = false;
});
navLink2.addEventListener("click", function checkBox2() {
	document.getElementById("navi-toggle").checked = false;
});
navLink3.addEventListener("click", function checkBox3() {
	document.getElementById("navi-toggle").checked = false;
});
navLink4.addEventListener("click", function checkBox4() {
	document.getElementById("navi-toggle").checked = false;
});

// This is causing everything below the header to not work?
//Smooth Scroll

// function smoothScroll(target, duration) {
// 	let target = document.querySelector(target);
// 	let targetPosition = document.getBoundingClientRect().top;
// 	let startPosition = window.pageYOffset;
// 	let distance = targetPosition - startPosition;
// 	let startTime = null;
// }
// smoothScroll(".container", 1000);

const links = document.querySelectorAll(".header");

for (const link of links) {
	link.addEventListener("click", clickHandler);
}

function clickHandler(e) {
	e.preventDefault();
	const href = this.getAttribute("href");
	const offsetTop = document.querySelector(href).offsetTop;

	scroll({
		top: offsetTop,
		behavior: "smooth",
	});
}
