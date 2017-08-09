var request = require('../request');
var continues = require('../continues');
var id = require('../id');
var pointers = require('../pointers');
module.exports = function queue(fn, pointers_, global_) {
    var p = pointers_ || pointers;
    var g = global_ || global;
    // null makes the id for the first time
    var identifier = request(loop, null, p, g);
    // and then it is returned
    return identifier;

    function loop() {
        // was not removed by some other thread
        fn.apply(this, arguments);
        // undo the request decrement
        p.ids[identifier] += 1;
        // was not removed by the fn
        if (continues(identifier, p)) {
            request(loop, identifier, p, g);
        }
    }
};