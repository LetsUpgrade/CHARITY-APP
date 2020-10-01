// Get the modal
var modal = document.getElementById("Emg-Modal");

// Get the button that opens the modal
var btn = document.getElementById("Emg-btn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close1")[0];

// When the user clicks the button, open the modal 
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
var modal1 = document.getElementById("Ind-Modal");

// Get the button that opens the modal
var btn1 = document.getElementById("Ind-btn");

// Get the <span> element that closes the modal
var span1 = document.getElementsByClassName("close2")[0];

// When the user clicks the button, open the modal 
btn1.onclick = function() {
  modal1.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span1.onclick = function() {
  modal1.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal1) {
    modal1.style.display = "none";
  }
}





// Get the modal
var modal2 = document.getElementById("Org-Modal");

// Get the button that opens the modal
var btn2 = document.getElementById("Org-btn");

// Get the <span> element that closes the modal
var span2 = document.getElementsByClassName("close3")[0];

// When the user clicks the button, open the modal 
btn2.onclick = function() {
  modal2.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span2.onclick = function() {
  modal2.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
}