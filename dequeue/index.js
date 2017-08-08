var pointers = require('../pointers');
module.exports = function dequeue(id, pointers_) {
    var p = pointes_ || pointers;
    delete p.ids[id];
};