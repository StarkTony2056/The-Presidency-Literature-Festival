$(document).ready(function() {
  // Toggle for Advisor and Convener section
  $('.toggle-header-advcon').click(function() {
    $(this).toggleClass('active');
    $(this).siblings('.toggle-body-advcon').toggleClass('show');
  });

  // Toggle for Volunteers section
  $('.toggle-header-volunteers').click(function() {
    $(this).toggleClass('active');
    $(this).siblings('.toggle-body-volunteers').toggleClass('show');
  });
});