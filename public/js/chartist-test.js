// https://www.gov.uk/performance/register-to-vote/user-satisfaction
new Chartist.Pie('.graph-register-to-vote',
  {
    series: [95.4, 4.6]
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
    series: [93.8, 6.2]
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
    series: [90.7, 9.3]
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
  series: [60.2, 22.2, 17.6]
};

new Chartist.Pie('.graph-prison-visits', deviceData, {
  showLabel: false,
  chartPadding: 0
});

/////////////////////////////////////////////////////////////////////////////////////////

// https://www.gov.uk/performance/sorn/digital-takeup
new Chartist.Pie('.graph-sorn',
  {
    series: [90.1, 9.9]
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
  series: [57.5, 29.6, 12.9]
};
new Chartist.Pie('.graph-govuk', govukDevices, {
  showLabel: false,
  chartPadding: 0
});

/////////////////////////////////////////////////////////////////////////////////////////

//https://www.gov.uk/performance/digital-by-default-service-assessments/service-assessment-pass-rate
var lineData = {
  labels: ['Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr'],
  series: [
    [45.5, 77.8, 80, 87.5, 63.6, 71.4,75, 80]
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

