var b = require('@timelaps/batterie');
b.capture(function () {
    require('@timelaps/polyfill/raf')(global);
    require('./tests.js');
});
b.finish().then(b.logger());