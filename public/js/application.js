var flipCards = [];

var flipCard = function($card) {
  var rotation = $card.data('rotation');
  rotation = rotation + 180;
  $card.css({
    transform: 'rotateY(' + (rotation) + 'deg)'
  });
  /*$card.one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(e) {
    console.log('flipped');
  });*/
  $card.data('rotation', rotation);
}

var flipNextCard = function(i) {
  if (i === flipCards.length) {
    return false;
  }
  flipCard(flipCards[i]);
  flipCards[i].one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(e) {
    i++;
    flipNextCard(i);
  });
}

var init = function() {

  $('.flip-card').each(function() {
    $this = $(this);
    $this.data('rotation', 0);
    flipCards.push($this);
  });

  // make this a random timer call
  $(document).on('click', '.flip-card', function() {
    flipCard($(this));
  });

  // try this
  $(document).on('click', '.sprint-logo', function() {
    var i = 0;
    flipNextCard(i);
    // All cards at once
    /*for (var i=0; i<flipCards.length; i++) {
      var current = flipCards[i];
      flipCard(current);
    }*/
  });

};

$(function() {
  init();
});
