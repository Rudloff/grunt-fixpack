/*jslint node, es6 */
'use strict';
const fixpack = require('fixpack');
const path = require('path');

module.exports = function (grunt) {
    grunt.registerMultiTask('fixpack', 'Validate your package.json file with Fixpack', function () {
        grunt.task.current.filesSrc.forEach(function (file) {
            fixpack(path.resolve(file));
        });
    });
};
