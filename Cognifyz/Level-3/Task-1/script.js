const thumbnails = document.querySelectorAll('.thumbnail');
const expandedImg = document.getElementById('expanded-img');
const expandedImgContent = document.getElementById('expanded-img-content');
const closeBtn = document.querySelector('.close-btn');

thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('click', () => {
        const fullSrc = thumbnail.dataset.fullSrc;
        expandedImgContent.src = fullSrc;
        expandedImg.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    });
});

closeBtn.addEventListener('click', () => {
    expandedImg.style.display = 'none';
    document.body.style.overflow = 'auto';
});

expandedImg.addEventListener('click', (event) => {
  if (event.target === expandedImg) {
    expandedImg.style.display = 'none';
    document.body.style.overflow = 'auto';
  }
});

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}