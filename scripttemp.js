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
