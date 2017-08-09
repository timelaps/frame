var b = require('@timelaps/batterie');
var cancel = require('.');
var request = require('../request');
b.describe('cancel', function () {
    b.expect(cancel).toBeFunction();
    b.async('cancels an animation frame', function (t) {
        var id = request(function () {
            t.error();
        });
        cancel(id);
        request(function () {
            t.expect().toBeUndefined();
            t.done();
        });
    });
});