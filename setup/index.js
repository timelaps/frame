var toArray = require('@timelaps/to/array');
var forEach = require('@timelaps/n/for/each');
var pointers = require('../pointers');
var continues = require('../continues');
var dequeue = require('../dequeue');
module.exports = function setup(pointers_, global_) {
    var g = global_ || global;
    var p = pointers_ || pointers;
    p.gid = p.gid || (function () {
        var id = g.requestAnimationFrame(callsTasks);
        // do more things here
        return id;
    }());

    function callsTasks() {
        var copy = p.tasks.slice(0);
        var context = this;
        // reset the shared pointers
        p.tasks = [];
        p.gid = null;
        // call all of the tasks from the previous frame
        forEach(copy, function (task) {
            var id = task.id;
            if (continues(id, p)) {
                p.ids[id] -= 1;
                task.fn(task);
                if (!continues(id, p)) {
                    // naturally ran out of runs
                    dequeue(id, p);
                }
            }
        });
    }
};