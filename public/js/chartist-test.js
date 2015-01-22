// https://www.gov.uk/performance/lasting-power-of-attorney/user-satisfaction
new Chartist.Pie('.graph-0',
  {
    series: [90, 10]
  },
  {
    showLabel: false,
    chartPadding: 0
  }
);

/////////////////////////////////////////////////////////////////////////////////////////

// https://www.gov.uk/performance/renew-patent/digital-takeup
new Chartist.Pie('.graph-1',
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
new Chartist.Pie('.graph-9',
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

new Chartist.Pie('.graph-3', deviceData, {
  showLabel: false,
  chartPadding: 0
});

/////////////////////////////////////////////////////////////////////////////////////////

//https://www.gov.uk/performance/pay-register-birth-abroad/user-satisfaction
new Chartist.Pie('.graph-4',
  {
    series: [86.7, 13.3]
  },
  {
    showLabel: false,
    chartPadding: 0
  }
);

/////////////////////////////////////////////////////////////////////////////////////////

//https://www.gov.uk/performance/registered-traveller/user-satisfaction
new Chartist.Pie('.graph-5',
  {
    series: [90, 10]
  },
  {
    showLabel: false,
    chartPadding: 0
  }
);

/*new Chartist.Line('.graph-5', lineData, {
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
});*/

/////////////////////////////////////////////////////////////////////////////////////////

// https://www.gov.uk/performance/sorn/digital-takeup
new Chartist.Pie('.graph-6',
  {
    series: [86.4, 13.6]
  },
  {
    showLabel: false,
    chartPadding: 0
  }
);

/////////////////////////////////////////////////////////////////////////////////////////

// https://www.gov.uk/performance/register-to-vote/user-satisfaction
new Chartist.Pie('.graph-7',
  {
    series: [93.4, 6.6]
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
new Chartist.Pie('.graph-8', govukDevices, {
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

new Chartist.Line('.graph-9', lineData, {
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

