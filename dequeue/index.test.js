var b = require('@timelaps/batterie');
var dequeue = require('.');
b.describe('dequeue', function () {
    b.expect(dequeue).toBeFunction();
    b.it('removes values from the pointer cluster', function (t) {
        var obj = {
            key: 'value'
        };
        dequeue('key', {
            ids: obj
        });
        t.expect(obj).toEqual({});
    });
});