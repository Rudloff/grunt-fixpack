/*jslint node: true */
module.exports = function (grunt) {
    'use strict';
    grunt.initConfig(
        {
            jslint: {
                tasks: {
                    src: ['tasks/*.js']
                },
                Gruntfile: {
                    src: ['Gruntfile.js']
                }
            },
            jsonlint: {
                manifests: {
                    src: ['*.json', '*.webapp'],
                    options: {
                        format: true
                    }
                }
            }
        }
    );


    grunt.loadNpmTasks('grunt-jslint');
    grunt.loadNpmTasks('grunt-jsonlint');

    grunt.registerTask('lint', ['jslint', 'jsonlint']);
};
