let slides = document.querySelectorAll(".slide");
let dots = document.querySelectorAll(".dot");
let currentIndex = 0;
let interval = 2500; // 2.5 seconds

function showSlide(index){
    slides.forEach((slide,i)=>{
        slide.classList.remove("active");
        dots[i].classList.remove("active");
        if(i===index){
            slide.classList.add("active");
            dots[i].classList.add("active");
        }
    });
}

function nextSlide(){
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
}

function prevSlide(){
    currentIndex = (currentIndex -1 + slides.length) % slides.length;
    showSlide(currentIndex);
}

function currentSlide(index){
    currentIndex = index;
    showSlide(currentIndex);
}

setInterval(nextSlide, interval);