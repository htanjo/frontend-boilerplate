/*global module:false*/
module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({

        // General settings
        pkg: '<json:package.json>',
        meta: {
            banner: '/*!\n' +
                ' * <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
                '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
                '<%= pkg.homepage ? " * " + pkg.homepage + "\n" : "" %>' +
                ' * Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author %>; ' +
                'Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %>\n' +
                ' */'
        },

        // Lints and Tests
        lint: {
            files: ['grunt.js', 'src/js/main.js', 'src/js/app/**/*.js']
        },
        qunit: {
            files: ['test/*.html']
        },
        htmllint: {
            all: ['src/*.html']
        },
        jshint: {
            options: {
                curly: true,
                eqeqeq: true,
                immed: true,
                latedef: true,
                newcap: true,
                noarg: true,
                sub: true,
                undef: true,
                boss: true,
                eqnull: true,
                browser: true
            }
        },

        // JavaScript
        concat: {
            dist: {
                src: [
                    '<banner:meta.banner>',
                    '<file_strip_banner:dist/js/main.js>'
                ],
                dest: 'dist/js/main.js'
            }
        },
        requirejs: {
            compile: {
                options: {
                    appDir: 'src',
                    baseUrl: 'js',
                    modules: [{ name: 'main'}],
                    mainConfigFile: 'src/js/main.js',
                    dir: 'dist',
                    optimize: 'uglify',
                    /*uglify: {
                        defines: {
                            __DEBUG: ['name', 'false']
                        }
                    },*/
                    preserveLicenseComments: true,
                    removeCombined: true,
                    optimizeCss: 'standard'
                }
            }
        },

        // CSS
        less: {
            compile: {
                options: {
                    paths: ['src/less']
                },
                files: {
                    'src/css/main.css': 'src/less/main.less'
                }
            }
        },
        mincss: {
            compress: {
                files: {
                    'dist/css/main.css': 'src/css/main.css'
                }
            }
        },

        // Images
        inlineImg: {
            src: ['dist/*.html', 'dist/css/*.css'],
            dest: 'dist',
            ie8: true
        },
        pngmin: {
            src: [
                'src/img/*.png'
            ],
            dest: 'dist'
        },

        // Distributing
        clean: {
            dist: ['dist/build.txt', 'dist/js/app'],
            less: ['dist/less'],
            inlineImg: ['dist/img']
        },

        // Documentation
        yuidoc: {
            compile: {
                name: 'Project Name',
                description: 'Project description here.',
                version: '0.0.0',
                url: 'http://project.url/',
                options: {
                    paths: 'src/js/app',
                    outdir: 'docs'
                }
            }
        },

        // Watch
        watch: {
            lint: {
                files: '<config:lint.files>',
                tasks: 'lint'
            },
            less: {
                files: 'src/less/*.less',
                tasks: 'less'
            },
            htmllint: {
                files: '<config:htmllint.all>',
                tasks: 'htmllint'
            }
        }

    });

    // Load modules.
    grunt.loadNpmTasks('grunt-contrib');
    grunt.loadNpmTasks('grunt-html');
    grunt.loadNpmTasks('grunt-imagine');

    // Default task.
    grunt.registerTask('default', 'lint qunit yuidoc less requirejs concat mincss pngmin clean:dist clean:less');

};