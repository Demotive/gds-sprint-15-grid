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
  },
  {
    url: '/licensing/realtime',
    selector: '#licensing'
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
        $(realtimeServices[i].selector).text(addCommas(d));
      }
    });
  }
}

/////////////////////////////////////////////////////////////////////////////////////////

$(function() {
  if (typeof offline === 'undefined') {
    updateUsers();
    var pollServices = window.setInterval(updateUsers, 2*60*1000);
  }
});
