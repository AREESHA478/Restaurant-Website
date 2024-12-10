//   scroll bar
const ScrollRevealOption = {
    distance : "50px",
    origin : "bottom",
    duration : 1000,
};
ScrollReveal().reveal(".image1", {
    ...ScrollRevealOption,
    origin: "left",
});
ScrollReveal().reveal(".text", {
    ...ScrollRevealOption,
    delay: 300,
});
ScrollReveal().reveal(".head", {
    ...ScrollRevealOption,
    delay: 1000,
});
ScrollReveal().reveal(".lh-lg", {
    ...ScrollRevealOption,
    delay: 1200,
});
ScrollReveal().reveal(".image2", {
    ...ScrollRevealOption,
    origin: "left",
});
ScrollReveal().reveal(".image3", {
    ...ScrollRevealOption,
    origin: "right",
});

ScrollReveal().reveal(".client_image img", {
    ...ScrollRevealOption,
    origin: "left",
});
ScrollReveal().reveal(" .section_subheader", {
    ...ScrollRevealOption,
    delay: 500,
});
ScrollReveal().reveal(".section_header", {
    ...ScrollRevealOption,
    delay: 700,
});
ScrollReveal().reveal(" .section_description", {
    ...ScrollRevealOption,
    delay: 800,
});
ScrollReveal().reveal(".client_details", {
    ...ScrollRevealOption,
    delay: 1200,
});
ScrollReveal().reveal(".client-rating", {
    ...ScrollRevealOption,
    delay: 1400,
});

ScrollReveal().reveal(".open", {
    ...ScrollRevealOption,
    origin: "right",
});
ScrollReveal().reveal(".open2", {
    ...ScrollRevealOption,
 delay: "500",
});
ScrollReveal().reveal(".open1", {
    ...ScrollRevealOption,
    delay: "1000",
});
ScrollReveal().reveal(".service", {
    ...ScrollRevealOption,
    origin: "right",
});

ScrollReveal().reveal(".service1", {
    ...ScrollRevealOption,
    delay: "500",
});

ScrollReveal().reveal(".listproduct", {
    ...ScrollRevealOption,
    origin: "right",
});
ScrollReveal().reveal(".section-heading", {
    ...ScrollRevealOption,
    orign: "left",
});ScrollReveal().reveal(".section-heading", {
    ...ScrollRevealOption,
    orign: "left",
});ScrollReveal().reveal(".section-heading", {
    ...ScrollRevealOption,
    orign: "left",
});ScrollReveal().reveal(".section-heading", {
    ...ScrollRevealOption,
    orign: "left",
});ScrollReveal().reveal(".category-heading", {
    ...ScrollRevealOption,
    delay: "100",
});




let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}
