var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 3500 || document.documentElement.scrollTop > 3500) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
window.alert("this page contains many monuments such as:: saqqara , pyramids of giza , Abu Simbel , Nubian Museum , Red Pyramid , temple of Luxor , temple of Abydos , Temple of Hatshepsut , Temple of Ramses II , Egyptian Museum , Karnak Temple , Coptic Museum , Hanging church , Museum of Islamic Art , mohammed ali mosque ,  The Greco-Roman Museum ");
