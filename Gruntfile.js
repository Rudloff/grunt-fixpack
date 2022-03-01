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
            fixpack: {
                package: {
                    src: 'package.json'
                }
            }
        }
    );


    grunt.loadNpmTasks('grunt-jslint');
    grunt.loadTasks('tasks/');

    grunt.registerTask('lint', ['jslint', 'fixpack']);
};
