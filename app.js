
var x = document.getElementById("sidenav");

function myFunction() {
  x.classList.toggle('show')
}


let slideIndex = 1;

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
  showSlides(slideIndex);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("card-m");
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

/*Totally options- script for changing texts in loader animation*/

var text = ["Get set Go..", "This Shouldn't take much time", "Hang on few sec.."];
var counter = 0;
var elem = document.getElementById("changeText");
var inst = setInterval(change, 3000);

/*Function to swipe the cards*/
function change() {
  elem.innerHTML = text[counter];
  counter++;
  if (counter >= text.length) {
    counter = 0;
  }
}
/*Loading animation*/
function loader(){
  var x= document.getElementById('preload');
  document.body.style.overflow="unset"
  x.style.display="none";
}


/*Function to auto-hide the nav in mobile, when clicked on menu*/

var links=document.getElementById('mob');
links.addEventListener('click',()=>{
  x.classList.remove('show')
})