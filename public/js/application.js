
var flipCard = function($card) {
  var rotation = $card.data('rotation');
  rotation = rotation + 180;
  $card.css({
    transform: 'rotateY(' + (rotation) + 'deg)'
  });
  $card.data('rotation', rotation);
}

var init = function() {

  $('.flip-card').each(function() {
    $(this).data('rotation', 0);
  });

  // make this a random timer call
  $(document).on('click', '.flip-card', function() {
    flipCard($(this));
  });

};

$(function() {
  init();
});
