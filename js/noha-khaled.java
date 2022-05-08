 #myBtn{
Display: none;
Position: fixed;
Bottom: 20px;
Right: 30px;
z-index: 99;
font-size: 18px;
border: none;
outline: none;
background-color: #e91e63;
color: white;
cursor: pointer;
padding: 15px;
border-radius: 4px;
}
#myBtn:hover {
Background-color: #555;
}
Var mybutton = document.getElementById("myBtn") ;
// When the user scrolls down 20px from the top of the document, show the button
Window.onscroll = function() {scrollFunction()};
Function scrollFunction() {
 If (document.body.scrollTop > 3500 || document.documentElement.scrollTop > 3500) {
 Mybutton.style.display = "block";
 } else {
 Mybutton.style.display = "none";
 }
}
// When the user clicks on the button, scroll to the top of the document
Function topFunction() {
 Document.body.scrollTop = 0;
 Document.documentElement.scrollTop = 0
 Window.alert(this page talk about karnak temple)