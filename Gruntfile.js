/**
 * Created by nmendonca on 2/6/2018
 */
module.exports = function (grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    babel: {
      options: {
        sourceMap: true,
        presets: ['env']
      },
      dist: {
        files: {
          'lib/classes-grunt.js': 'dev/classes.js'
        }
      }
    }

  });

  // Load the plugin that provides the respective tasks.
  grunt.loadNpmTasks('grunt-babel');

  // Default task(s).
  grunt.registerTask('default', ['babel']);
};