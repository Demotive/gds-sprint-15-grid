module.exports = function(grunt) {

//////////////////////////////////////////////////////////////////////////////////////////

  function pad(n) {
      return (n < 10) ? ("0" + n) : n;
  }

  // Set a new date (now)
  var tStart = new Date();
  // We are gathering 24 hours of data from YESTERDAY
  tStart.setDate(tStart.getDate() - 1);

  // format a start string for the performance platform urls
  var startStr = (tStart.getFullYear() + '-' + (pad(tStart.getMonth() + 1)) + '-' + pad(tStart.getDate()));
    
  var globalConfig = {
    serviceUrl: 'https://www.performance.service.gov.uk/data/',
    dateCollected: tStart,
    queryStr: '/realtime?start_at=' + startStr + 'T00%3A00%3A00%2B00%3A00&end_at=' + startStr + 'T23%3A59%3A59%2B00%3A00'
  };

//////////////////////////////////////////////////////////////////////////////////////////

  grunt.initConfig({
    sass: {
      dist: {
        files: {
          'public/css/application.css': 'public/scss/application.scss'
        },
        options: {
          loadPath: 'node_modules/govuk_frontend_toolkit/stylesheets'
        }
      }
    },
    watch: {
      files: ['public/scss/*'],
      tasks: ['sass:dist']
    },
    nodemon: {
      dev: {
        script: 'app.js'
      }
    },
    concurrent: {
        target: {
            tasks: ['watch', 'nodemon'],
            options: {
                logConcurrentOutput: true
            }
        }
    },
    smoosher: {
      options: {
        jsTags: { // optional
          start: '<script type="text/javascript">', // default: <script>
          end: '</script>'
        },
        jsDir: ['public', 'bower_components'],
        cssDir: 'public'
      },
      all: {
        files: {
          'public/offline-version.html': 'public/index.html',
        },
      },
    },
    curl: {
      'public/offline-data/govuk.json': globalConfig.serviceUrl + 'government' + globalConfig.queryStr,
      'public/offline-data/driving-test-practical-public.json': globalConfig.serviceUrl + 'driving-test-practical-public' + globalConfig.queryStr,
      'public/offline-data/blood-donor-appointments.json': globalConfig.serviceUrl + 'blood-donor-appointments' + globalConfig.queryStr,
      'public/offline-data/prison-visits.json': globalConfig.serviceUrl + 'prison-visits' + globalConfig.queryStr,
      'public/offline-data/carers-allowance.json': globalConfig.serviceUrl + 'carers-allowance' + globalConfig.queryStr,
      'public/offline-data/tax-disc.json': globalConfig.serviceUrl + 'tax-disc' + globalConfig.queryStr,
      'public/offline-data/view-driving-record.json': globalConfig.serviceUrl + 'view-driving-record' + globalConfig.queryStr,
      'public/offline-data/registered-traveller-scheme.json': globalConfig.serviceUrl + 'registered-traveller-scheme' + globalConfig.queryStr,
      'public/offline-data/register-to-vote.json': globalConfig.serviceUrl + 'register-to-vote' + globalConfig.queryStr,
      'public/offline-data/sorn.json': globalConfig.serviceUrl + 'sorn' + globalConfig.queryStr,
      'public/offline-data/licensing.json': globalConfig.serviceUrl + 'licensing' + globalConfig.queryStr
    },
    appendData: {
      files: ['public/offline-data/*.json']
    },
  });

//////////////////////////////////////////////////////////////////////////////////////////

  [
    'grunt-contrib-watch',
    'grunt-contrib-sass',
    'grunt-nodemon',
    'grunt-concurrent',
    'grunt-html-smoosher',
    'grunt-curl'
  ].forEach(function (task) {
    grunt.loadNpmTasks(task);
  });

//////////////////////////////////////////////////////////////////////////////////////////

  grunt.registerMultiTask('appendData', 'Appends JSON data into the single offline document.', function() {

    var allTheThings = '<script type="text/javascript">\n';
    allTheThings += 'var offline = true;\n\n';

    this.files.forEach(function(file) {
      var items = file.src.map(function(filepath) {

        var jsonBlockName = filepath.split('/');
        jsonBlockName = jsonBlockName[jsonBlockName.length-1];
        jsonBlockName = jsonBlockName.replace(/[-\.]/g, "_");

        var jsonBlock = grunt.file.read(filepath);

        allTheThings += 'var ' + jsonBlockName + ' = ';
        allTheThings += jsonBlock;
        allTheThings += ';\n';

      });
    });

    allTheThings += '</script>\n';

    var existing = grunt.file.read('public/offline-index.html');
    var splitSrc = existing.split('<script type="text/javascript">');

    var newSrc = splitSrc[0] + '\n' + allTheThings + '\n' + '<script type="text/javascript">' + splitSrc[1];

    // add in some small print
    /*var dateCollected = new Date();

    var months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ];

    var small = '<small class="offline-demo">This offline demo uses data collected on ';
    small += dateCollected.getDate() + ' ' + months[dateCollected.getMonth()] + ' ' + dateCollected.getFullYear();
    small += '</small>';

    var landmark = 'Powered by www.gov.uk/performance';

    newSrc = newSrc.split(landmark);

    var finalSrc = '';

    for (var i=0; i<newSrc.length-1; i++) {
      finalSrc += newSrc[i] + landmark + '\n' + small + '\n';
    }
    finalSrc += newSrc[newSrc.length-1];
    

    grunt.file.write('public/offline-index.html', finalSrc);
    */

  });

//////////////////////////////////////////////////////////////////////////////////////////


  grunt.registerTask('offline', 'Creates a single html file with everything inlined.', function() {
    grunt.log.writeln('Beginning offline build.');

    grunt.log.writeln('Inlining...');
    grunt.task.run('smoosher');

    grunt.log.writeln('Downloading and appending JSON data...');
    grunt.task.run('curl');
    grunt.task.run('appendData');
  });

//////////////////////////////////////////////////////////////////////////////////////////

  grunt.registerTask('default', ['concurrent']);

};
