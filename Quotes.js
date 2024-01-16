function nextSlide() {
    const slides = document.getElementById('slides');
    const firstSlide = slides.firstElementChild;

    slides.style.transition = 'transform 1s ease-in-out';
    slides.style.transform = 'translateX(-' + firstSlide.offsetWidth + 'px)';

    setTimeout(() => {
        slides.appendChild(firstSlide);
        slides.style.transition = 'none';
        slides.style.transform = 'translateX(0)';
    }, 1000);
}

setInterval(nextSlide, 3000);



        document.addEventListener("DOMContentLoaded", function () {
            var scrollingWord = document.getElementById("scrollingWord");

            window.addEventListener("scroll", function () {
                var scrollPosition = window.scrollY;

                
                var newColor = calculateColor(scrollPosition);

               
                scrollingWord.style.color = newColor;
            });

            function calculateColor(scrollPosition) {
               
                var colorValue = Math.min(scrollPosition / 10, 255);

                
                var color = "rgb(" + colorValue + ", " + colorValue + ", " + colorValue + ")";

                return color;
            }
        });

document.addEventListener("DOMContentLoaded", function () {
    var rollingText = document.getElementById("rollingText");
    rollingText.style.opacity = 1;
    rollingText.style.transform = "translateX(0)";
});
    
