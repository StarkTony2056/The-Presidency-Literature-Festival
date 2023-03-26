$(document).ready(function() {
  // Toggle for Advisor and Convener section
  $('.btn btn-link').click(function() {
    $(this).toggleClass('active');
    $(this).siblings('.collapse show').toggleClass('show');
  });

  // Toggle for Volunteers section
  $('.toggle-header-volunteers').click(function() {
    $(this).toggleClass('active');
    $(this).siblings('.toggle-body-volunteers').toggleClass('show');
  });
});

// Get the button
var scrollButton = document.getElementById("scrollButton");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollButton.style.display = "block";
  } else {
    scrollButton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
