// note that the appendData task in Gruntfile.js defines the offline variable

if (typeof offline !== 'undefined') {

  var counter = 0;

  var offlineServices = [
    {
      jsonData: govuk_json,
      selector: '#govuk'
    },
    {
      jsonData: driving_test_practical_public_json,
      selector: '#driving-test'
    },
    {
      jsonData: blood_donor_appointments_json,
      selector: '#blood-donor-appointments'
    },
    {
      jsonData: prison_visits_json,
      selector: '#prison-visits'
    },
    {
      jsonData: carers_allowance_json,
      selector: '#carers-allowance'
    },
    {
      jsonData: tax_disc_json,
      selector: '#tax-disc'
    },
    {
      jsonData: view_driving_record_json,
      selector: '#view-driving-record'
    },
    {
      jsonData: registered_traveller_scheme_json,
      selector: '#registered-traveller-scheme'
    },
    {
      jsonData: register_to_vote_json,
      selector: '#register-to-vote'
    },
    {
      jsonData: sorn_json,
      selector: '#sorn'
    },
    {
      jsonData: licensing_json,
      selector: '#licensing'
    }
  ];

  function pad(value) {
    if(value < 10) {
        return '0' + value;
    } else {
        return value;
    }
  }

  var updateUsersOffline = function() {

    var now = new Date;
    now.setTime(Date.now());
    var hour = pad(now.getHours());
    var min = pad(now.getMinutes());
    var tempDate = new Date;

    // for each of the JSON blocks
    for (var i=0; i<offlineServices.length; i++) {

      //console.log(offlineServices[i].selector);

      // loop through the data set and match the time as closely as possible.
      var data = offlineServices[i].jsonData['data'];

      //for (var c = 0; c < data.length; c++) {
      for (var c = data.length-1; c >= 0; c--) {

        tempDate.setTime(Date.parse(data[c]._timestamp));
        tempHour = pad(tempDate.getHours());

        if (tempHour === hour) {
          tempMin = pad(tempDate.getMinutes());
          if (tempMin === min) {
            counter = c;
            //console.log('MATCH - json: ' + tempHour + ':' + tempMin);
            break;
          }
          // catch and go back 1 if we've shot over the nearest minutes
          if (tempMin > min) {
            counter = c-1;
            //console.log('MATCH with a rewind - json: ' + tempHour + ':' + tempMin);
            break;
          }
        }

      }
      
      $(offlineServices[i].selector).text(addCommas(data[counter]['unique_visitors']));

    }
  }

  ///////////////////////////////////////////////////////////////////////////////////////

  $(function() {
    updateUsersOffline();
    var pollServices = window.setInterval(updateUsersOffline, 2*60*1000);
  });

}