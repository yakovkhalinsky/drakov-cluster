require('colors');
var async = require('async');

var arguments = require('./lib/arguments');
var configurations = require('./lib/configurations');
var bootstrap = require('./lib/bootstrap');

var argv = arguments();

exports.DRAKOV_CLUSTER;

exports.run = function(cb) {
    configurations.loadConfigs(argv.serverPortStart, argv.configsPath, function(err, configs) {
        if (err) {
            throw err;
        }

        var startupFnList = configs.map(bootstrap.getStartFn);

        if (cb) {
            startupFnList.push(cb);
        }

        async.series(startupFnList, function(err, drakovs) {
            if (err) {
                throw err;
                if (drakovs.length) {
                    DRAKOV_CLUSTER = drakovs;
                } else {
                    console.log('No Drakov start configurations found');
                }
            }
        });
    });
};
