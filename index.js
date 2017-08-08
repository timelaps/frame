var queue = request.queue = require('./queue');
var dequeue = request.dequeue = require('./dequeue');
var cancel = request.cancel = require('./cancel');
var request = request.request = require('./request');
var shim = request.shim = require('./shim');
module.exports = function generator(global) {
    shim(global);
    var pointers = {
        tasks: [],
        ids: {}
    };
    return {
        queue: function (fn) {
            return queue(fn, pointers, global);
        },
        dequeue: function (id) {
            return dequeue(id, pointers, global);
        },
        cancel: function (id) {
            return cancel(id, global);
        },
        request: function (fn) {
            return request(fn, null, pointers, global);
        }
    };
};