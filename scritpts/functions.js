
let slideIndex1 = 0;
showSlides1();

function showSlides1() {
  let i;
  let slides = document.getElementsByClassName("pic_set_1");
  let next = document.getElementsByClassName("next");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex1++;
  if (slideIndex1 > slides.length) {slideIndex1 = 1}    
  for (i = 0; i < next.length; i++) {
    next[i].className = next[i].className.replace(" active", "");
  }
  slides[slideIndex1-1].style.display = "block";  
  next[slideIndex1-1].className += " active";
  setTimeout(showSlides1, 3000); // Change image every 3 seconds
}


let slideIndex2 = 0;
showSlides2();

function showSlides2() {
  let i;
  let slides = document.getElementsByClassName("pic_set_2");
  let next = document.getElementsByClassName("next");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex2++;
  if (slideIndex2 > slides.length) {slideIndex2 = 1}    
  for (i = 0; i < next.length; i++) {
    next[i].className = next[i].className.replace(" active", "");
  }
  slides[slideIndex2-1].style.display = "block";  
  next[slideIndex2-1].className += " active";
  setTimeout(showSlides2, 3000); // Change image every 3 seconds
}


let slideIndex3 = 0;
showSlides3();

function showSlides3() {
  let i;
  let slides = document.getElementsByClassName("pic_set_3");
  let next = document.getElementsByClassName("next");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex3++;
  if (slideIndex3 > slides.length) {slideIndex3 = 1}    
  for (i = 0; i < next.length; i++) {
    next[i].className = next[i].className.replace(" active", "");
  }
  slides[slideIndex3-1].style.display = "block";  
  next[slideIndex3-1].className += " active";
  setTimeout(showSlides3, 3000); // Change image every 3 seconds
}