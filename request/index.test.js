var b = require('@timelaps/batterie');
var request = require('.');
var cancel = require('../cancel');
b.describe('request', function () {
    b.expect(request).toBeFunction();
    b.async('requests for the function passed to run once', function (t) {
        request(function () {
            t.expect().toBeUndefined();
        });
        setTimeout(function () {
            t.done();
        }, 50);
    });
    b.async('can be cancelled', function (t) {
        t.expect().toBeUndefined();
        var id = request(function () {
            t.expect().toBeTrue();
        });
        cancel(id);
        setTimeout(function () {
            t.done();
        }, 50);
    }, 0);
});