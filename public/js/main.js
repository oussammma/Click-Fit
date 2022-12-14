const bars = document.querySelector('.bars');
const slide = document.querySelector('.nav-links');
bars.addEventListener('click', () => {
    // bars.classList.toggle('bars-active');
    if (bars.classList.contains('bars-active')) {
        bars.classList.remove('bars-active');
    } else {
        bars.classList.add('bars-active');
    }
    if (slide.classList.contains('slide')) {
        slide.classList.remove('slide')
    } else {
        slide.classList.add('slide')
    }
})

var options = {
    accessibility: true,
    prevNextButtons: true,
    pageDots: true,
    setGallerySize: false,
    arrowShape: {
      x0: 10,
      x1: 60,
      y1: 50,
      x2: 60,
      y2: 45,
      x3: 15
    }
  };
  var carousel = document.querySelector('[data-carousel]');
  var slides = document.getElementsByClassName('carousel-cell');
  var flkty = new Flickity(carousel, options);
  
  flkty.on('scroll', function () {
    flkty.slides.forEach(function (slide, i) {
      var image = slides[i];
      var x = (slide.target + flkty.x) * -1/3;
      image.style.backgroundPosition = x + 'px';
    });
  });



const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

tl.to(".text", { y: "0%", duration: 1, stagger: 0.25 });
tl.to(".slider", { y: "-100%", duration: 1.5, delay: 0.5 });
tl.to(".intro", { y: "-100%", duration: 1 }, "-=1");
tl.fromTo("#logo", { opacity: 0 }, { opacity: 1, duration: 1 });
tl.fromTo(".nav-links li a", { opacity: 0 }, { opacity: 1, duration: 1 }, "-=1");
tl.fromTo(".join", { opacity: 0 }, { opacity: 1, duration: 1 }, "-=1");
tl.fromTo(".bars", { opacity: 0 }, { opacity: 1, duration: 1 }, "-=1");
tl.fromTo(".inner", { opacity: 0 }, { opacity: 1, duration: 1 }, "-=0.5");



const selectImage = document.querySelector('.select-image');
const inputFile = document.querySelector('#file');
const imgArea = document.querySelector('.img-area');

selectImage.addEventListener('click', function () {
	inputFile.click();
})

inputFile.addEventListener('change', function () {
	const image = this.files[0]
	if(image.size < 2000000) {
		const reader = new FileReader();
		reader.onload = ()=> {
			const allImg = imgArea.querySelectorAll('img');
			allImg.forEach(item=> item.remove());
			const imgUrl = reader.result;
			const img = document.createElement('img');
			img.src = imgUrl;
			imgArea.appendChild(img);
			imgArea.classList.add('active');
			imgArea.dataset.img = image.name;
		}
		reader.readAsDataURL(image);
	} else {
		alert("Image size more than 2MB");
	}
})

window.onscroll = function () { myFunction() };


var navbar = document.querySelector("nav");
var home = document.querySelector('.hero-slider');
var sticky = navbar.offsetHeight;

function myFunction() {
    if (window.pageYOffset > sticky -77) {
        navbar.classList.add("sticky");
        home.classList.add("home-sticky");
    } else {
        navbar.classList.remove("sticky");
        home.classList.remove("home-sticky");

    }
}


