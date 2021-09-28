// Sticky Header
window.addEventListener("scroll", () => {
  let header = document.getElementById("header");
  header.classList.toggle("sticky", window.scrollY > 150);
});

// Menu Burger

const menuBtn = document.querySelector(".menu-btn");

let menuOpen = false,
  links = document.querySelector(".links");

menuBtn.addEventListener("click", (e) => {
  //Stop Propagation
  e.stopPropagation();

  if (!menuOpen) {
    menuBtn.classList.add("open");
    menuOpen = true;
    links.classList.add("open");
  } else {
    menuBtn.classList.remove("open");
    menuOpen = false;
    links.classList.remove("open");
  }
});

// click anywhere outside menu Burger
document.addEventListener("click", (e) => {
  if (e.target !== menuBtn && e.target !== links) {
    if (links.classList.contains("open")) {
      menuBtn.classList.remove("open");
      menuOpen = false;
      links.classList.remove("open");
    }
  }
});

//Stop Propagation on Menu Burger
links.addEventListener("click", (e) => {
  e.stopPropagation();
});

// Testimonials Slider

const slides = document.querySelectorAll(".slider");

const imgIndecators = document.querySelector(".indicator").children;

for (let i = 0; i < imgIndecators.length; i++) {
  imgIndecators[i].addEventListener("click", function () {
    //Remove All Active Class From ImgIndecators
    for (j = 0; j < imgIndecators.length; j++) {
      imgIndecators[j].classList.remove("active");
    }
    this.classList.add("active");
    const id = this.getAttribute("data-id");
    //Remove All Active Class From Sliders
    for (j = 0; j < slides.length; j++) {
      slides[j].classList.remove("active");
    }
    slides[id].classList.add("active");
  });
}

// Switch Active Class On Links

let ul = document.querySelector('.header .links'),

    li = document.querySelectorAll('.header .links li');

li.forEach(el => { 
  el.addEventListener('click', () => {
    li.forEach(function (el) {
      el.classList.remove('active');
    });
    el.classList.add('active');
  })
})







