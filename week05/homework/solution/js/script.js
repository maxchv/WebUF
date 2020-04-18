window.addEventListener("load", () => {
    let slideIndex = 1;

    const dots = document.querySelectorAll(".dot");
    const slides = document.getElementsByClassName("mySlides");

    showSlides(slideIndex);

    document.querySelector(".prev")
        .addEventListener('click', function () {
            showSlides(--slideIndex);
        });

    document.querySelector(".next")
        .addEventListener('click', function () {
            showSlides(++slideIndex);
        });

    dots.forEach((dot, i) => {
        dot.addEventListener('click', () => {
            showSlides(slideIndex = i + 1);
        });
    });

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
});