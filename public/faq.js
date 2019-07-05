$('.faq .question').on('click', function() {
  $(this).siblings('.answer').toggle();
});

if(location.hash) {
  $('.question', location.hash).trigger('click')
}