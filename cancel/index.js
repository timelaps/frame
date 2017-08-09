var dequeue = require('../dequeue');
var isString = require('@timelaps/is/string');
module.exports = function cancel(id, global_) {
    var g = global_ || global;
    if (isString(id)) {
        return dequeue(id);
    } else {
        return g.cancelAnimationFrame(id);
    }
};