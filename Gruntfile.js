module.exports = function(grunt) {
  grunt.initConfig({
    sass: {
      dist: {
        options: {
          style: 'compressed',
          compass: true
        },
        files: {
          'assets/css/app.css' : 'assets/sass/app.sass'
        }
      }
    },
    watch: {
      css: {
        files: ['assets/**/*.scss', 'assets/**/*.sass'],
        tasks: ['sass']
      },
      frontend: {
        files: [
          './assets/js/vendor/jquery.js',
          './assets/js/vendor/jquery.cookie.js',
          './assets/js/vendor/fastclick.js',
          './assets/js/vendor/placeholder.js',
          './assets/js/vendor/modernizr.js',
          './assets/js/foundation.min.js',
          './assets/js/script.js'
        ],
        tasks: ['concat:frontend','uglify:frontend'],
        options: {
          livereload: true
        }
      },
    },
    concat: {
      options: {
        separator: ';',
      },
      frontend: {
        src: [
          './assets/js/vendor/jquery.js',
          './assets/js/vendor/jquery.cookie.js',
          './assets/js/vendor/fastclick.js',
          './assets/js/vendor/placeholder.js',
          './assets/js/vendor/modernizr.js',
          './assets/js/foundation.min.js',
          './assets/js/script.js'
        ],
        dest: './assets/js/package.js',
      },
    },
    uglify: {
      options: {
        mangle: false
      },
      frontend: {
        files: {
          './assets/js/package.js': './assets/js/package.js',
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('default', ['watch']);
};
