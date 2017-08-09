var b = require('@timelaps/batterie');
var queue = require('.');
var dequeue = require('../dequeue');
b.describe('queue', function () {
    b.expect(queue).toBeFunction();
    b.async('queues functions until they are taken off', function (t) {
        var counter = 0;
        var id = queue(function () {
            t.expect().toBeUndefined();
            if (++counter >= 3) {
                dequeue(id);
                setTimeout(function () {
                    // enough time to run again
                    t.done();
                }, 100);
            }
        });
    }, 3);
});