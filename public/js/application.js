var flipCards = [];

// Returns a random integer between min (included) and max (excluded)
// Using Math.round() will give you a non-uniform distribution!
getRandomInt = function(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

// reset previously flipped card
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

/////////////////////////////////////////////////////////////////////////////////////////

var realtimeServices = [
  {
    url: '/govuk/realtime',
    selector: '#govuk'
  },
  {
    url: '/driving-test/realtime',
    selector: '#driving-test'
  },
  {
    url: '/blood-donor-appointments/realtime',
    selector: '#blood-donor-appointments'
  },
  {
    url: '/prison-visits/realtime',
    selector: '#prison-visits'
  },
  {
    url: '/carers-allowance/realtime',
    selector: '#carers-allowance'
  },
  {
    url: '/tax-disc/realtime',
    selector: '#tax-disc'
  },
  {
    url: '/view-driving-record/realtime',
    selector: '#view-driving-record'
  },
  {
    url: '/registered-traveller-scheme/realtime',
    selector: '#registered-traveller-scheme'
  },
  {
    url: '/register-to-vote/realtime',
    selector: '#register-to-vote'
  },
  {
    url: '/sorn/realtime',
    selector: '#sorn'
  }
];

var updateUsers = function() {
  for (var i=0; i<realtimeServices.length; i++) {
    $.ajax({
      dataType: 'json',
      cache: false,
      async: false,
      url: realtimeServices[i].url,
      success: function(d) {
        $(realtimeServices[i].selector).text(d);
      }
    });
  }
}

/////////////////////////////////////////////////////////////////////////////////////////


var init = function() {

  $('.flip-card').each(function() {
    $this = $(this);
    $this.data('rotation', 0);
    flipCards.push($this);
  });

  var flipTiming = window.setInterval(resetFlipCard, 5*1000);
  var pollServices = window.setInterval(updateUsers, 30*1000);

};

$(function() {
  updateUsers();
  init();
});
