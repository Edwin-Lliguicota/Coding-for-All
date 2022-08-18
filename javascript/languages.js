// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


// Get the modal
var modalTwo = document.getElementById("myModalTwo");

// Get the button that opens the modal
var btnTwo = document.getElementById("myBtnTwo");

// Get the <span> element that closes the modal
var spanTwo = document.getElementsByClassName("close-two")[0];

// When the user clicks on the button, open the modal
btnTwo.onclick = function() {
  modalTwo.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
spanTwo.onclick = function() {
  modalTwo.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modalTwo) {
    modalTwo.style.display = "none";
  }
}


// Get the modal
var modalThree = document.getElementById("myModalThree");

// Get the button that opens the modal
var btnThree = document.getElementById("myBtn-three");

// Get the <span> element that closes the modal
var spanThree = document.getElementsByClassName("close-three")[0];

// When the user clicks on the button, open the modal
btnThree.onclick = function() {
  modalThree.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
spanThree.onclick = function() {
  modalThree.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modalThree) {
    modalThree.style.display = "none";
  }
}



// Get the modal
var modalFour = document.getElementById("myModalFour");

// Get the button that opens the modal
var btnFour = document.getElementById("myBtn-four");

// Get the <span> element that closes the modal
var spanFour = document.getElementsByClassName("close-four")[0];

// When the user clicks on the button, open the modal
btnFour.onclick = function() {
  modalFour.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
spanFour.onclick = function() {
  modalFour.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modalFour.style.display = "none";
  }
}