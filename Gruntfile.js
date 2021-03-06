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
            },
            fixpack: {
                package: {
                    src: 'package.json'
                }
            }
        }
    );


    grunt.loadNpmTasks('grunt-jslint');
    grunt.loadNpmTasks('grunt-jsonlint');
    grunt.loadTasks('tasks/');

    grunt.registerTask('lint', ['jslint', 'jsonlint', 'fixpack']);
};
