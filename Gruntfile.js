'use strict';

module.exports = function (grunt) {
  // Time Grunt
  require('time-grunt')(grunt);
  // Load tasks
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    meta: {
      pathSass: 'assets/_sass',
      pathJS: 'assets/js',
      pathJSBuild: 'assets/js/build',
      pathCSS: 'assets/css',
      pathImg: 'assets/img'
    },

    compass: {
      dist: {
        options: {
          config: 'config.rb'
        }
      }
    },
    
    // TODO: Uglify task
    
    // TODO: Imagemin task

    watch: {
      compass: {
        files: ['<%= meta.pathSass %>/**/*.{scss,sass}'],
        tasks: ['compass']
      }
    }

  });

  grunt.registerTask('default', ['watch']);

};
