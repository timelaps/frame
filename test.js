var b = require('@timelaps/batterie');
b.capture(function () {
    require('./shim')(global);
    require('./tests.js');
});
b.finish().then(b.logger());