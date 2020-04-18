const slides = document.querySelectorAll(".slide");

const dots = document.querySelectorAll(".dot");

const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

let slideIndex = 1;

function showSlides(n) {
    if (n > slides.length) {
        slideIndex = 1;
    }

    if (n < 1) {
        slideIndex = slides.length;
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove("active");
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].classList.add("active");
}

showSlides(slideIndex);

prev.addEventListener('click', function () {
    showSlides(--slideIndex);
});

next.addEventListener('click', function () {
    showSlides(++slideIndex);
});

for (let i = 0; i < dots.length; i++) {
    dots[i].addEventListener('click', () => {
        showSlides(slideIndex = i + 1);
    });
}