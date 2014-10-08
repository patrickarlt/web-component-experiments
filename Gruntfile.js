module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    browserify: {
      dist: {
        files: {
          'build/module.js': ['client/scripts/**/*.js', 'client/scripts/**/*.coffee'],
        },
        options: {
          transform: ['coffeeify']
        }
      }
    },
    vulcanize: {
      default: {
        options: {
          inline: true
        },
        files: {
          'esri-geocoder-built.html': 'src/esri-geocoder.html'
        }
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-vulcanize');
  grunt.loadNpmTasks('grunt-browserify');

  // Default task(s).
  grunt.registerTask('build', ['vulcanize']);

};