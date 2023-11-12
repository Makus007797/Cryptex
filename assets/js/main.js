$(document).ready(function () {
	// Preloader
	window.onload = function () {
		document.body.classList.add('loaded_hiding');
		window.setTimeout(function () {
			document.body.classList.add('loaded');
			document.body.classList.remove('loaded_hiding');
		}, 500);
	};

	// WOW
	wow = new WOW({
		mobile: false,
	});
	wow.init();

	// Hamburger
	$('.hamburger').click(function () {
		$(this).toggleClass('active');
		$('.header').toggleClass('active');
		$('body').toggleClass('menu-is-active');
	});

	$('.menu').click(function () {
		$('body').removeClass('menu-is-active');
		$('.header').removeClass('active');
		$('.hamburger').removeClass('active');
	});

	// Scroll anchors
	$('.menu, .footer-menu').on('click', 'a', function (event) {
		event.preventDefault();
		var id = $(this).attr('href'),
			top = $(id).offset().top;
		$('body,html').animate(
			{
				scrollTop: top,
			},
			1000
		);
	});

	// Scroll top
	$(window).scroll(function () {
		if ($(this).scrollTop() > 100) {
			$('#scroll-top').fadeIn();
		} else {
			$('#scroll-top').fadeOut();
		}
	});
	$('#scroll-top').click(function () {
		$('html, body').animate(
			{
				scrollTop: 0,
			},
			600
		);
		return false;
	});

	var scene = $('#scene').get(0);
	var parallaxInstance = new Parallax(scene);
});

// Cursore
let X = 0;
let Y = 0;
let mouse = { x: 0, y: 0 };

window.addEventListener('mousemove', function (event) {
	mouse.x = event.clientX - circle.offsetWidth / 2;
	mouse.y = event.clientY - circle.offsetHeight / 2;
});

function move() {
	X += (mouse.x - X) * 0.1;
	Y += (mouse.y - Y) * 0.1;
	circle.style.transform = `matrix(1, 0, 0, 1, ${X}, ${Y})`;
	requestAnimationFrame(move);
}

move();

const cursor = document.querySelector('.cursor');

const mouseMove = function (e) {
	let x = e.clientX;
	let y = e.clientY;
	cursor.style.left = x + 'px';
	cursor.style.top = y + 'px';
};

document.addEventListener('mousemove', mouseMove);


