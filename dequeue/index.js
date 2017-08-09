var pointers = require('../pointers');
module.exports = function dequeue(id, pointers_) {
    var p = pointers_ || pointers;
    delete p.ids[id];
};