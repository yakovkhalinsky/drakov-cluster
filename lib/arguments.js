var argv = require('yargs');

var descriptions = {
    'configs-path': 'path that contains Drakov configuration files',
    'server-port-start': 'server port to start defaulting from (incremented automatically)'
};

module.exports = function() {
    return argv.usage('Usage: $0 --configs-path [path to Drakov configuration files] -p [starting default server port]')
        .describe(descriptions)
        .demand(['configs-path', 'server-port-start'])
        .alias('configs-path', 'c')
        .alias('server-port-start', 'p')
        .argv;
};
