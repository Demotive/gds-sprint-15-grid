module.exports = function(grunt) {

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
    }
  });

  [
    'grunt-contrib-watch',
    'grunt-contrib-sass',
    'grunt-nodemon',
    'grunt-concurrent'
  ].forEach(function (task) {
    grunt.loadNpmTasks(task);
  });

  grunt.registerTask('default', ['concurrent']);

};