var dequeue = require('../dequeue');
module.exports = function cancel(id, global_) {
    var g = global_ || global;
    dequeue(id);
    return g.cancelAnimationFrame(id);
};