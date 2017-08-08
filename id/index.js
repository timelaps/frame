var rid = 0;
var u = 'u';
module.exports = function id() {
    return u + (++rid);
};