var express = require('express')
var request = require('request');
var app = express();
var port = (process.env.PORT || 3000);



// serve anything in /public directly, ie http://xxxxx.xxxxx.xxx/layout-scamp.html
app.use(express.static(__dirname + '/public'));
app.use('/bower_components', express.static(__dirname + '/bower_components'));

// JSON proxies to performance platform
var failure = { error: true };
var service = 'https://www.performance.service.gov.uk/data/';


// ----------------------------------------------------------------------------

// standardised realtime query - returns single latest result
var realtimeQuery = '/realtime?flatten=true&limit=1&sort_by=_timestamp%3Adescending';

// realtime function
var getRealtime = function(query, req, res) {
  request(service + query + realtimeQuery, function (error, response, serviceData) {
    if (!error && response.statusCode == 200) {
      var parsed = JSON.parse(serviceData);
      //console.log(serviceData);
      res.json(parsed.data[0].unique_visitors);
    } else {
      res.json(failure);
    }
  });
}

// Realtime proxy routes
app.get('/govuk/realtime', function (req, res) {
  getRealtime('government', req, res);
});

app.get('/driving-test/realtime', function (req, res) {
  getRealtime('driving-test-practical-public', req, res);
});

app.get('/blood-donor-appointments/realtime', function (req, res) {
  getRealtime('blood-donor-appointments', req, res);
});

app.get('/prison-visits/realtime', function (req, res) {
  getRealtime('prison-visits', req, res);
});

app.get('/carers-allowance/realtime', function (req, res) {
  getRealtime('carers-allowance', req, res);
});

app.get('/tax-disc/realtime', function (req, res) {
  getRealtime('tax-disc', req, res);
});

app.get('/view-driving-record/realtime', function (req, res) {
  getRealtime('view-driving-record', req, res);
});

app.get('/registered-traveller-scheme/realtime', function (req, res) {
  getRealtime('registered-traveller-scheme', req, res);
});

app.get('/register-to-vote/realtime', function (req, res) {
  getRealtime('register-to-vote', req, res);
});

app.get('/sorn/realtime', function (req, res) {
  getRealtime('sorn', req, res);
});


// ----------------------------------------------------------------------------

// govuk by device (last week)
app.get('/govuk/devices', function (req, res) {
  var query = service + 'govuk/devices?duration=1&collect=visitors%3Asum&group_by=deviceCategory&period=week';
  request(query, function (error, response, serviceData) {
    if (!error && response.statusCode == 200) {
      var parsed = JSON.parse(serviceData);
      var total = 0;
      for (var i=0; i<parsed.data.length; i++) {
        total += parsed.data[i]['visitors:sum'];
      }
      var devices = [];
      for (var i=0; i<parsed.data.length; i++) {
        var arr = [];
        arr.push(parsed.data[i].deviceCategory);
        arr.push(Math.round((parsed.data[i]['visitors:sum'] / total) * 100));
        devices.push(arr);
      }
      res.json(devices);
    } else {
      res.json(failure);
    }
  });
});


// ----------------------------------------------------------------------------

var server = app.listen(port, function () {

  var host = server.address().address
  var port = server.address().port

  console.log('Example app listening at http://%s:%s', host, port)

});