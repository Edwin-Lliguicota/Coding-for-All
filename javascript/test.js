// Get the modal
var modalOne = document.getElementById("myModalOne");

// Get the button that opens the modal
var btnOne = document.getElementById("myBtnOne");

// Get the <span> element that closes the modal
var spanOne = document.getElementsByClassName("closeOne")[0];

// When the user clicks on the button, open the modal
btnOne.onclick = function() {
  modalOne.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
spanOne.onclick = function() {
  modalOne.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modalOne) {
    modalOne.style.display = "none";
  }
}