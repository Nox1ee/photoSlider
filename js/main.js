let images = [{
    url: "./images/img-1.jpg",
    title: "Rostov-on-Don, Admiral"
}, {
    url: "./images/img-2.jpg",
    title: "Sochi Thieves"
}, {
    url: "./images/img-3.jpg",
    title: "Rostov-on-Don Patriotic"
}];

function initSlider() {
    if (!images || !images.length) return;
  
    let sliderImages = document.querySelector(".projects__slider-images");
    let sliderArrows = document.querySelector(".projects__arrows");
    let sliderDots = document.querySelector(".projects__slider-dots");
    let sliderLinks = document.querySelector(".projects__slider-list");
    let sliderDesc = document.querySelector(".projects");
  
    initImages();
    initArrows();
    initDots();
    initLinks();
    initDesc();

    function initImages() {
        images.forEach((image, index) => {
            let imageDiv = `<div class="image n${index} ${index === 0? "active" : ""}" style="background-image:url(${images[index].url});" data-index="${index}"></div>`;
            sliderImages.innerHTML += imageDiv;
        });
    }
  
    function initArrows() {
        sliderArrows.querySelectorAll(".projects__arrow").forEach(arrow => {
            arrow.addEventListener("click", function() {
                let curNumber = +sliderImages.querySelector(".active").dataset.index;
                let nextNumber;
                if (arrow.classList.contains("left")) {
                    nextNumber = curNumber === 0? images.length - 1 : curNumber - 1;
                } else {
                    nextNumber = curNumber === images.length - 1? 0 : curNumber + 1;
                }
                moveSlider(nextNumber);
            });
        });
    }

    function initDots() {
        images.forEach((image, index) => {
            let dot = `<div class="projects__slider-dots-item n${index} ${index === 0? "active" : ""}" data-index="${index}"></div>`;
            sliderDots.innerHTML += dot;
        });
        sliderDots.querySelectorAll(".projects__slider-dots-item").forEach(dot => {
            dot.addEventListener("click", function() {
                moveSlider(this.dataset.index);
            });
        });
    }

    function initLinks() {
        sliderLinks.querySelectorAll(".projects__slider-item").forEach((item, index) => {
            item.classList.add(`n${index}`);
            item.classList.toggle("active", index === 0);
            item.setAttribute("data-index", `${index}`);

            item.addEventListener("click", function() {
                moveSlider(this.dataset.index);
            });
        });
    }

    function initDesc() {
        sliderDesc.querySelectorAll(".projects__parameters").forEach((item, index) => {
            item.classList.add(`n${index}`);
            item.classList.toggle("active", index === 0);
            item.setAttribute("data-index", `${index}`);

            item.addEventListener("click", function() {
                moveSlider(this.dataset.index);
            });
        });
    }
    
  
    function moveSlider(num) {
        sliderImages.querySelector(".active").classList.remove("active");
        sliderImages.querySelector(".n" + num).classList.add("active");

        sliderDots.querySelector(".active").classList.remove("active");
        sliderDots.querySelector(".n" + num).classList.add("active");

        sliderLinks.querySelector(".active").classList.remove("active");
        sliderLinks.querySelector(".n" + num).classList.add("active");

        sliderDesc.querySelector(".active").classList.remove("active");
        sliderDesc.querySelector(".n" + num).classList.add("active");
    }
}

document.addEventListener("DOMContentLoaded", initSlider);
