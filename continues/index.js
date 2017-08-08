var pointers = require('../pointers');
var isNil = require('@timelaps/is/nil');
module.exports = function continues(rid, pointers_) {
    var p = pointers_ || pointers;
    return !isNil(p.ids[rid]);
};