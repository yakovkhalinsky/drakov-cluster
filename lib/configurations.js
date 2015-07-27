var path = require('path');
var glob = require('glob');

var LAST_DEFAULT_SERVER_PORT;

function getGlobFromPath(configsPath) {
    return path.resolve(configsPath) + '/*.js';
}

function loadConfig(filePath) {
    var config = require(filePath);
    config.serverPort = config.serverPort || LAST_DEFAULT_SERVER_PORT++;
    return config;
}

exports.loadConfigs = function(defaultServerPortStart, configsPath, cb) {
    LAST_DEFAULT_SERVER_PORT = defaultServerPortStart;
    glob(getGlobFromPath(configsPath), {}, function(err, files) {
        if (err) {
            return cb(err);
        }

        var configs = files.map(loadConfig);

        cb(false, configs);
    });
};
