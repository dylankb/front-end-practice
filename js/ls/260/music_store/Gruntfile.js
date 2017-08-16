module.exports = function gruntConfigFunc(grunt) {
  grunt.initConfig({
    bower_concat: {
      all: {
        dest: 'public/javascripts/vendor/all.js',
        dependencies: {
          underscore: 'jquery',
          backbone: 'underscore',
        },
      },
    },
    uglify: {
      my_target: {
        files: {
          'public/javascripts/vendor/all.js': ['public/javascripts/vendor/all.js'],
        },
      },
    },
    handlebars: {
      all: {
        files: {
          // All files within handlebars dir and child directories
          'public/javascripts/handlebars_templates.js': ['handlebars/**/*.hbs'],
        },
        options: {
          processContent: removeWhitespace,
          processName: extractFileName,
        },
      },
    },
  });

  [
    'grunt-bower-concat',
    'grunt-contrib-uglify',
    'grunt-contrib-handlebars',
  ].forEach(function doWork(task) {
    grunt.loadNpmTasks(task);
  });

  grunt.registerTask('default', ['handlebars', 'bower_concat', 'uglify']);
};

function removeWhitespace(template) {
  return template.replace(/ {2,}/mg, '').replace(/\r|\n/mg, '');
}

function extractFileName(file) {
  // handlebars/album.hbs
  return file.match(/\/(.+)\.hbs$/).pop();
}
