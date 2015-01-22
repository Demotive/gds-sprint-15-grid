
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

var lineData = {
  labels: ['Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  series: [
    [75, 100, 66.7, 57.1, 60, 45.5, 77.8, 72.7, 100]
  ]
};

new Chartist.Line('.graph-2', lineData, {
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

/////////////////////////////////////////////////////////////////////////////////////////

var deviceData = {
  labels: ['Desktop', 'Mobile', 'Tablet'],
  series: [62.3, 25.1, 12.6]
};

new Chartist.Pie('.graph-3', deviceData, {
  showLabel: false,
  chartPadding: 0
});

/////////////////////////////////////////////////////////////////////////////////////////

new Chartist.Pie('.graph-4',
  {
    series: [91, 9]
  },
  {
    showLabel: false,
    chartPadding: 0
  }
);

/////////////////////////////////////////////////////////////////////////////////////////

new Chartist.Line('.graph-5', lineData, {
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

/////////////////////////////////////////////////////////////////////////////////////////

new Chartist.Pie('.graph-6',
  {
    series: [91, 9]
  },
  {
    showLabel: false,
    chartPadding: 0
  }
);

/////////////////////////////////////////////////////////////////////////////////////////

new Chartist.Line('.graph-7', lineData, {
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

/////////////////////////////////////////////////////////////////////////////////////////

new Chartist.Pie('.graph-8', deviceData, {
  showLabel: false,
  chartPadding: 0
});

/////////////////////////////////////////////////////////////////////////////////////////

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

