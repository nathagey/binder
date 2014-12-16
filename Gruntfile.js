// Generated on 2014-12-14 using generator-markup-feature 0.0.1
// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to recursively match all subfolders:
// 'test/spec/**/*.js'
// jshint node: true, es3: false
module.exports = function(grunt) {
    'use strict';
    // Load grunt tasks automatically
    require('load-grunt-tasks')(grunt);
    // Time how long tasks take. Can help when optimizing build times
    require('time-grunt')(grunt);

    var featureIds = {
        desktop: {
            development: '1234567890123',
            staging: ''
        },
        mobile: {
            development: '',
            staging: ''
        }
    };

    var device = '',
        // First enabled entry is default
        validDevice = {
            'desktop': true,
            'mobile': false
        },
        defaultDevice = function() {
            for(var device in validDevice) {
                if(validDevice[device] === true) {
                    return device;
                }
            }
        };

    // Respond to flag -device=desktop/mobile
    if(grunt.option('device')) {
        if(validDevice[grunt.option('device')]) {
            device = grunt.option('device');
        } else {
            device = defaultDevice();

            grunt.log.error('INVALID DEVICE TYPE. WILL TARGET '+device.toUpperCase()+'.');
        }
    } else {
        device = defaultDevice();
    }

    var env = '',
        // First entry is default
        validEnv = ['development', 'staging'];

    if(grunt.option('env')) {
        if(!~validEnv.indexOf(grunt.option('env'))) {
            env = validEnv[0];

            grunt.log.error('INVALID ENVIRONMENT. WILL TARGET '+env.toUpperCase()+'.');
        } else {
            env = grunt.option('env');
        }
    } else {
        env = validEnv[0];
    }

    grunt.log.writeln('DEVICE (change with -device flag): '+device);
    grunt.log.writeln('ENVIRONMENT (change with -env flag): '+env);

    // Define the configuration for all the tasks
    var config = {
        // Configurable paths
        app: 'app/'+device,
        dist: 'dist/'+device+'/'+env
    },
    taskManifest = {
        // Project settings
        config: config,
        // Watches files for changes and runs tasks based on the changed files
        watch: {
            bower: {
                files: ['bower.json'],
                tasks: ['bowerInstall']
            },
            js: {
                files: ['<%= config.app %>/scripts/{,*/}*.js'],
                tasks: ['jshint'],
                options: {
                    livereload: true
                }
            },
            jstest: {
                files: ['test/spec/{,*/}*.js'],
                tasks: ['test:watch']
            },
            gruntfile: {
                files: ['Gruntfile.js']
            },
            compass: {
                files: ['<%= config.app %>/styles/{,*/}*.{scss,sass}'],
                tasks: ['compass:server', 'autoprefixer']
            },
            styles: {
                files: ['<%= config.app %>/styles/{,*/}*.css'],
                tasks: ['newer:copy:styles', 'autoprefixer']
            },
            handlebars: {
                files: ['<%= config.app %>/templates/**/*.hbs'],
                tasks: ['handlebars'],
                options: {
                    livereload: true
                }
            },
            livereload: {
                options: {
                    livereload: '<%= connect.options.livereload %>'
                },
                files: ['<%= config.app %>/{,*/}*.html', '.tmp/styles/{,*/}*.css', '<%= config.app %>/images/{,*/}*']
            }
        },
        handlebars: {
            compile: {
                files: {
                    "<%= config.app %>/templates/compiled.js": ["<%= config.app %>/templates/**/*.hbs"]
                },
                options: {
                    namespace: 'Handlebars.templates',
                    wrapped: true,
                    processName: function(filename) {
                        return filename.substring(filename.lastIndexOf('/')+1, filename.length - 4);
                    }
                }
            }
        },
        // The actual grunt server settings
        connect: {
            options: {
                port: 9000,
                livereload: 35729,
                // Change this to '0.0.0.0' to access the server from outside
                // Change this to 'localhost' for default set up
                hostname: '0.0.0.0'
            },
            livereload: {
                options: {
                    open: true,
                    base: ['.tmp', 'app']
                }
            },
            test: {
                options: {
                    port: 9001,
                    base: ['.tmp', 'test', '<%= config.app %>']
                }
            },
            dist: {
                options: {
                    open: true,
                    base: '<%= config.dist %>',
                    livereload: false
                }
            }
        },
        // Empties folders to start fresh
        clean: {
            dist: {
                files: [{
                    dot: true,
                    src: ['.tmp', '<%= config.dist %>/*', '!<%= config.dist %>/.git*']
                }]
            },
            server: '.tmp'
        },
        // Make sure code styles are up to par and there are no obvious mistakes
        jshint: {
            options: {
                jshintrc: '.jshintrc',
                reporter: require('jshint-stylish')
            },
            all: [
                'Gruntfile.js',
                '<%= config.app %>/scripts/{,*/}*.js',
                '!<%= config.app %>/scripts/vendor/*',
                '!<%= config.app %>/templates/*',
                'test/spec/{,*/}*.js'
            ]
        },
        // Jasmine testing framework configuration options
        jasmine: {
            all: {
                options: {
                    specs: 'test/spec/{,*/}*.js'
                }
            }
        },
        // Compiles Sass to CSS and generates necessary files if requested
        compass: {
            options: {
                sassDir: '<%= config.app %>/styles',
                cssDir: '<%= config.app %>/styles',
                generatedImagesDir: '<%= config.app %>/images',
                imagesDir: '<%= config.app %>/images',
                javascriptsDir: '<%= config.app %>/scripts',
                fontsDir: '<%= config.app %>/styles/fonts',
                importPath: '<%= config.app %>/bower_components',
                httpImagesPath: '/'+device+'/images',
                httpGeneratedImagesPath: '<%= config.app %>/images',
                httpFontsPath: '<%= config.app %>/styles',
                relativeAssets: false,
                assetCacheBuster: false
            },
            dist: {
                options: {
                    generatedImagesDir: '<%= config.dist %>/images'
                }
            },
            server: {
                options: {
                    debugInfo: true
                }
            }
        },
        // Add vendor prefixed styles
        autoprefixer: {
            options: {
                browsers: ['last 1 version']
            },
            dist: {
                files: [{
                    expand: true,
                    cwd: '.tmp/styles/',
                    src: '{,*/}*.css',
                    dest: '.tmp/styles/'
                }]
            }
        },
        // Automatically inject Bower components into the HTML file
        bowerInstall: {
            app: {
                src: ['<%= config.app %>/index.html'],
                ignorePath: '<%= config.app %>/',
                exclude: ['<%= config.app %>/bower_components/bootstrap-sass-official/vendor/assets/javascripts/bootstrap.js']
            },
            sass: {
                src: ['<%= config.app %>/styles/{,*/}*.{scss,sass}'],
                ignorePath: '<%= config.app %>/bower_components/'
            }
        },
        // Renames files for browser caching purposes
        rev: {
            dist: {
                files: {
                    src: ['<%= config.dist %>/scripts/{,*/}*.js', '<%= config.dist %>/styles/{,*/}*.css', '<%= config.dist %>/images/{,*/}*.*', '<%= config.dist %>/styles/fonts/{,*/}*.*', '<%= config.dist %>/*.{ico,png}']
                }
            }
        },
        // Reads HTML for usemin blocks to enable smart builds that automatically
        // concat, minify and revision files. Creates configurations in memory so
        // additional tasks can operate on them
        useminPrepare: {
            options: {
                dest: '<%= config.dist %>'
            },
            html: '<%= config.app %>/index.html'
        },
        // Performs rewrites based on rev and the useminPrepare configuration
        usemin: {
            options: {
                assetsDirs: ['<%= config.dist %>', '<%= config.dist %>/images']
            },
            html: ['<%= config.dist %>/{,*/}*.html'],
            css: ['<%= config.dist %>/styles/{,*/}*.css']
        },
        // The following *-min tasks produce minified files in the dist folder
        imagemin: {
            dist: {
                files: [{
                    expand: true,
                    cwd: '<%= config.app %>/images',
                    src: '{,*/}*.{gif,jpeg,jpg,png}',
                    dest: '<%= config.dist %>/images'
                }]
            }
        },
        svgmin: {
            dist: {
                files: [{
                    expand: true,
                    cwd: '<%= config.app %>/images',
                    src: '{,*/}*.svg',
                    dest: '<%= config.dist %>/images'
                }]
            }
        },
        htmlmin: {
            dist: {
                options: {
                    collapseBooleanAttributes: true,
                    collapseWhitespace: true,
                    removeAttributeQuotes: true,
                    removeCommentsFromCDATA: true,
                    removeEmptyAttributes: true,
                    removeOptionalTags: true,
                    removeRedundantAttributes: true,
                    useShortDoctype: true
                },
                files: [{
                    expand: true,
                    cwd: '<%= config.dist %>',
                    src: '{,*/}*.html',
                    dest: '<%= config.dist %>'
                }]
            }
        },
        // Copies remaining files to places other tasks can use
        copy: {
            dev: {
                files: [{
                    expand: true,
                    dot: true,
                    cwd: '.tmp/concat/styles',
                    dest: '<%= config.dist %>/styles',
                    src: '{,*/}*.css'
                },
                {
                    expand: true,
                    dot: true,
                    cwd: '.tmp/concat/scripts',
                    dest: '<%= config.dist %>/scripts',
                    src: '{,*/}*.js'
                },
                {
                    expand: true,
                    dot: true,
                    cwd: '<%= config.app %>/images',
                    dest: '<%= config.dist %>/images',
                    src: '{,*/}*'
                }]
            },
            dist: {
                files: [{
                    expand: true,
                    dot: true,
                    cwd: '<%= config.app %>',
                    dest: '<%= config.dist %>',
                    src: ['*.{ico,png,txt}', '.htaccess', 'images/{,*/}*.webp', '{,*/}*.html', 'styles/fonts/{,*/}*.*']
                }]
            },
            styles: {
                expand: true,
                dot: true,
                cwd: '<%= config.app %>/styles',
                dest: '.tmp/styles/',
                src: '{,*/}*.css'
            }
        },
        // Run some tasks in parallel to speed up build process
        concurrent: {
            server: ['compass:server', 'copy:styles', 'handlebars'],
            test: ['copy:styles'],
            dist: ['compass', 'copy:styles', 'imagemin', 'svgmin']
        }
    };

    grunt.initConfig(taskManifest);

    // 'divafy' - Special Diva deployment-related task
    grunt.registerTask('divafy', function() {
        // The current feature ID
        var id = featureIds[device][env];

        // ** HTML **

        // Generate partial
        var partial = grunt.file.read(config.dist+'/index.html');
        grunt.file.delete(config.dist+'/index.html');

        partial = partial
            .split('<!-- CONTENT START -->')[1]
            .split('<!-- CONTENT END -->')[0];

        // Replace local references with Diva references


        partial = partial.replace(/images\//g, '//RP_MEDIA/imagefeatures/0x0/'+id+'/');
        partial = partial.replace(/css\/|js\//g, '//RP_MEDIA/appfeatures/'+id+'/');

        grunt.file.write(config.dist+'/index.partial.html', partial);

        // ** CSS **

        // Replace local references with Diva references
        grunt.file.recurse(
            config.dist+'/styles/',

            function(filepath) {
                var css = grunt.file.read(filepath),
                    imgReg = new RegExp(
                        '(?:../|/'+device+'/){0,1}images/',
                        'g'
                    );

                css = css.replace(imgReg, '/imagefeatures/0x0/'+id+'/');

                grunt.file.write(filepath, css);
            }
        );
    });

    grunt.registerTask('serve', function(target) {
        if (target === 'dist') {
            return grunt.task.run(['build', 'connect:dist:keepalive']);
        }
        grunt.task.run(['clean:server', 'concurrent:server', 'autoprefixer', 'connect:livereload', 'watch']);
    });
    grunt.registerTask('server', function(target) {
        grunt.log.warn('The `server` task has been deprecated. Use `grunt serve` to start a server.');
        grunt.task.run([target ? ('serve:' + target) : 'serve']);
    });
    grunt.registerTask('test', function(target) {
        if (target !== 'watch') {
            grunt.task.run(['clean:server', 'concurrent:test', 'autoprefixer']);
        }
        grunt.task.run(['connect:test', 'jasmine']);
    });
    grunt.registerTask('build', ['clean:dist', 'useminPrepare', 'concurrent:dist', 'autoprefixer', 'concat', 'cssmin', 'uglify', 'copy:dist', 'rev', 'usemin', 'htmlmin', 'divafy']);
    grunt.registerTask('build:dev', ['clean:dist', 'useminPrepare', 'compass', 'copy:styles', 'autoprefixer', 'concat', 'copy:dist', 'copy:dev', 'rev', 'usemin', 'divafy']);
    grunt.registerTask('default', ['test', 'build']);
};