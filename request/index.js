var id = require('../id');
var pointers = require('../pointers');
var setup = require('../setup');
module.exports = function request(fn, id_, pointers_, setup_) {
    var p = pointers_ || pointers;
    var s = setup_ || setup;
    var identifier = id_ || id();
    p.ids[identifier] = 1;
    setup(p);
    p.tasks.push({
        id: identifier,
        fn: fn
    });
    return identifier;
};