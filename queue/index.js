var request = require('../request');
var continues = require('../continues');
module.exports = function queue(fn, pointers, g) {
    // null makes the id for the first time
    var identifier = request(loop, null, pointers, g);
    // and then it is returned
    return identifier;

    function loop() {
        // was not removed by some other thread
        if (continues(identifier)) {
            fn.apply(this, arguments);
            // was not removed by the fn
            if (continues(identifier)) {
                request(loop, identifier, pointers, g);
            }
        }
    }
};
