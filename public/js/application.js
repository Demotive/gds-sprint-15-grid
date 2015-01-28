var flipCards = [];

// Returns a random integer between min (included) and max (excluded)
// Using Math.round() will give you a non-uniform distribution!
getRandomInt = function(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

// add commas to long numbers
var addCommas = function(n) {
  n += '';
  x = n.split('.');
  x1 = x[0];
  x2 = x.length > 1 ? '.' + x[1] : '';
  var rgx = /(\d+)(\d{3})/;
  while (rgx.test(x1)) {
    x1 = x1.replace(rgx, '$1' + ',' + '$2');
  }
  return x1 + x2;
}

// reset previously flipped card(s)
var resetFlipCard = function() {
  if (document.visibilityState === 'hidden') {
    return false;
  }
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

/////////////////////////////////////////////////////////////////////////////////////////


var init = function() {

  $('.flip-card').each(function() {
    $this = $(this);
    $this.data('rotation', 0);
    flipCards.push($this);
  });

  var flipTiming = window.setInterval(resetFlipCard, 10*1000);

};

$(function() {
  init();
});
