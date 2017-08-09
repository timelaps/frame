module.exports = generator;
var queue = generator.queue = require('./queue');
var dequeue = generator.dequeue = require('./dequeue');
var cancel = generator.cancel = require('./cancel');
var request = generator.request = require('./request');
var shim = generator.shim = require('@timelaps/polyfill/raf');

function generator(global) {
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
            return dequeue(id, pointers);
        },
        cancel: function (id) {
            return cancel(id, global);
        },
        request: function (fn) {
            return request(fn, null, pointers, global);
        }
    };
}