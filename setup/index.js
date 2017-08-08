var toArray = require('@timelaps/to/array');
var forEach = require('@timelaps/n/for/each');
var pointers = require('../pointers');
module.exports = function setup(global_, pointers_) {
    var g = global_ || global;
    var p = pointers_ || pointers;
    p.gid = p.gid || (function () {
        var id = g.requestAnimationFrame(callsTasks);
        // do more things here
        return id;
    }());

    function callsTasks() {
        var copy = p.tasks.slice(0);
        var args = toArray(arguments);
        var context = this;
        p.tasks = [];
        forEach(copy, function (task) {
            task.apply(context, args);
        });
        p.gid = null;
        if (p.tasks.length) {
            setup(g, p);
        }
    }
};