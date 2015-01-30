// https://www.gov.uk/performance/register-to-vote/user-satisfaction
new Chartist.Pie('.graph-register-to-vote',
  {
    series: [93.2, 6.8]
  },
  {
    showLabel: false,
    chartPadding: 0
  }
);

/////////////////////////////////////////////////////////////////////////////////////////

// https://www.gov.uk/performance/renew-patent/digital-takeup
new Chartist.Pie('.graph-renew-a-patent',
  {
    series: [94.1, 5.9]
  },
  {
    showLabel: false,
    chartPadding: 0
  }
);

/////////////////////////////////////////////////////////////////////////////////////////

// https://www.gov.uk/performance/carers-allowance/user-satisfaction
new Chartist.Pie('.graph-carers-allowance',
  {
    series: [90.9, 9.1]
  },
  {
    showLabel: false,
    chartPadding: 0
  }
);

/////////////////////////////////////////////////////////////////////////////////////////

//https://www.gov.uk/performance/prison-visits/device-type
var deviceData = {
  labels: ['Mobile', 'Desktop', 'Tablet'],
  series: [59.4, 21.3, 19.3]
};

new Chartist.Pie('.graph-prison-visits', deviceData, {
  showLabel: false,
  chartPadding: 0
});

/////////////////////////////////////////////////////////////////////////////////////////

// https://www.gov.uk/performance/sorn/digital-takeup
new Chartist.Pie('.graph-sorn',
  {
    series: [86.4, 13.6]
  },
  {
    showLabel: false,
    chartPadding: 0
  }
);

/////////////////////////////////////////////////////////////////////////////////////////

//https://www.gov.uk/performance/site-activity/device-type
var govukDevices = {
  labels: ['Desktop', 'Mobile', 'Tablet'],
  series: [62.3, 25.1, 12.6]
};
new Chartist.Pie('.graph-govuk', govukDevices, {
  showLabel: false,
  chartPadding: 0
});

/////////////////////////////////////////////////////////////////////////////////////////

//https://www.gov.uk/performance/digital-by-default-service-assessments/service-assessment-pass-rate
var lineData = {
  labels: ['Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  series: [
    [75, 100, 66.7, 57.1, 60, 45.5, 77.8, 72.7, 100]
  ]
};

new Chartist.Line('.graph-service-assessments', lineData, {
  axisX : {
    //showLabel: false,
    showGrid: false
  },
  axisY : {
    //showLabel: false,
    showGrid: false
  },
  showPoint: false,
  chartPadding: 0
});

