var b = require('@timelaps/batterie');
var continues = require('.');
var request = require('../request');
b.describe('continues', function () {
    b.expect(continues).toBeFunction();
    b.it('naturally returns false', function (t) {
        t.expect(continues).toReturnFalse();
    });
    b.async('figures out if the id should be called', function (t) {
        var id = request(function () {
            t.expect(continues(id)).toBeFalse();
            setTimeout(finish);
        });
        t.expect(continues(id)).toBeTrue();

        function finish() {
            t.expect(continues(id)).toBeFalse();
            t.done();
        }
    }, 3);
});