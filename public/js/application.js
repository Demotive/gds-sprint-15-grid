var flipCards = [];

// Returns a random integer between min (included) and max (excluded)
// Using Math.round() will give you a non-uniform distribution!
getRandomInt = function(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

// reset previously flipped card
var resetFlipCard = function() {
  var $flipped = $('.flipped');
  if ($flipped.length > 0) {
    $flipped.each(function() {
      var $this = $(this);
      var rotation = $this.data('rotation');
      rotation = rotation + 180;
      $this
        .css({
          transform: 'rotateY(' + (rotation) + 'deg)'
        })
        .data('rotation', rotation)
        .one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(e) {
          $(this).removeClass('flipped');
          //flipCard();
        });
    });
    flipCard();
  } else {
    flipCard();
  }
}

var flipCard = function() {
  var random = getRandomInt(0, 10);
  if (flipCards[random].hasClass('flipped')) {
    return false;
  }
  var rotation = flipCards[random].data('rotation');
  rotation = rotation + 180;
  flipCards[random]
    .css({
      transform: 'rotateY(' + (rotation) + 'deg)'
    })
    .data('rotation', rotation)
    .one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(e) {
      $(this).toggleClass('flipped');
    });
}

// cascade script
/*var flipNextCard = function(i) {
  if (i === flipCards.length) {
    return false;
  }
  flipCard(flipCards[i]);
  flipCards[i].one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(e) {
    i++;
    flipNextCard(i);
  });
}*/

var init = function() {

  $('.flip-card').each(function() {
    $this = $(this);
    $this.data('rotation', 0);
    flipCards.push($this);
  });

  var intervalID = window.setInterval(resetFlipCard, 5*1000);

  // make this a random timer call
  /*$(document).on('click', '.flip-card', function() {
    var random = getRandomInt(0, 10);
    // this one is to be the random one
    flipCard(flipCards[random]);
  });*/

  // cascade style
  /*$(document).on('click', '.sprint-logo', function() {
    var i = 0;
    flipNextCard(i);
  });*/

};

$(function() {
  init();
});
