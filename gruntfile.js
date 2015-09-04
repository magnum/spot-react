var path = require('path');

var vendorJs = ['jquery', 'bootstrap', 'react', 'react-router', 'flux', 'superagent', 'lodash', 'numeral', 'moment', 'moment/locale/it', 'cookie'];
module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-mocha-test');
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-babel');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-processhtml');
  
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    connect: {
      server: {
        options: {
          port: 3001,
          hostname: '*',
          base: 'dist'
        }
      }
    },
    watch: {
      options: {
        livereload: true,
        nospawn: true
      },
      client:{
        files: ['src/components/**/*.js', 'src/components/**/*.jsx'],
        tasks: ['jshint', 'babel:client', 'browserify:app'],
        options: {
          livereload: true
        }
      },
      html: {
        files: ['src/index.html', 'src/login.html'],
        tasks: ['copy:assets'],
        options: {
          livereload: true
        }
      },
      sass: {
        files: ['src/**/*.scss'],
        tasks: ['sass'],
        options: {
          livereload: true
        }
      }
    },
    copy: {
      assets:{
        files: [
          { expand: true, cwd: 'src/', src: '*.html', dest: 'dist/' },
          { expand: true, cwd: 'src/', src: 'url.js', dest: 'dist/' },
          { expand: true, cwd: 'src/', src: 'devUrl.js', dest: 'dist/' },
          { expand: true, cwd: 'src/images/', src: '**/*', dest: 'dist/images' },
          { expand: true, cwd: 'src/fonts/', src: '**/*', dest: 'dist/fonts' },
          { expand: true, cwd: 'src/vendor/font-awesome/fonts/', src: '*', dest: 'dist/fonts' },
          { expand: true, cwd: 'src/images/', src: '*', dest: 'dist/images' }
        ]
      }, 
    },
    babel: {
      options: {
        blacklist: ["strict"]
      },
      client:{
        expand : true,
        cwd : 'src/',
        src : ['**/*.js', '**/*.jsx', 'common/**/*.js'],
        dest : '.temp',
        ext : '.js'
      },
    },
    browserify: {
      options: { browserifyOptions: { debug: true } },
      vendor: {
        src: [],
        dest: 'dist/js/vendor.js',
        options: {
          require: vendorJs
        }
      },
      app: {
        options: {
          external: vendorJs
        },
        src: ['.temp/components/App.js' ],
        dest: 'dist/js/app.js'
      }
    },
    jshint: {
      files: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js'],
      options: {
        ignores: ['src/vendor/**/*.js'],
        esnext : true
      }
    },
    sass: {
      options: {
        sourceMap: false
      },
      dist: {
        files: {
          'dist/css/style.css': 'src/sass/style.scss'
        }
      }
    },
    uglify: {
      jsFiles: {
        files: {
          'dist/js/app.js': ['dist/js/app.js'],
          'dist/js/vendor.js': ['dist/js/vendor.js']
        }
      }
    },
    cssmin: {
      options: {
        shorthandCompacting: false,
        roundingPrecision: -1
      },
      target: {
        files: {
          'dist/css/style.css': ['dist/css/style.css']
        }
      }
    },
    processhtml: {
      options: {},
      build: {
        files: {
          'dist/login.html': ['dist/login.html'],
          'dist/index.html': ['dist/index.html']
        }
      }
    },
    clean: ["dist"]
  });

  grunt.registerTask('default', ['clean', 'jshint', 'sass', 'babel', 'copy:assets', 'browserify', 'connect', 'watch']);
  grunt.registerTask('test', ['env:test','run:prepare_seeds', 'run:seed_db', 'clean', 'mochaTest']);
  grunt.registerTask('build', ['clean', 'jshint', 'sass', 'babel', 'copy:assets', 'browserify', 'uglify', 'cssmin', 'processhtml:build']);
};
