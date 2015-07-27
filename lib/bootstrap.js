
function startUp(config, cb) {
    var drakov = require('drakov');
    drakov.run(config, function(err) {
        if (err) {
            return cb(err);
        }
        return cb(false, drakov);
    });
}

exports.getStartFn = function(config) {
    return function(cb) {
        return startUp(config, cb);
    }
};
