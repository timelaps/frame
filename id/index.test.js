var b = require('@timelaps/batterie');
var id = require('.');
b.describe('id', function () {
    b.expect(id).toBeFunction();
    b.it('will never create the same id twice', function (t) {
        var id1 = id();
        var id2 = id();
        t.expect(id1).notToBe(id2);
    });
});