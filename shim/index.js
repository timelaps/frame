module.exports = function shim(global) {
    var lastTime, x = 0,
        LENGTH = 'length',
        vendors = ['webkit', 'o', 'moz', 'ms'],
        ANIMATION_FRAME = 'AnimationFrame',
        REQUEST_ANIMATION_FRAME = 'request' + ANIMATION_FRAME,
        CANCEL_ANIMATION_FRAME = 'cancel' + ANIMATION_FRAME,
        UP_REQUEST_ANIMATION_FRAME = capitalize(REQUEST_ANIMATION_FRAME),
        UP_CANCEL_ANIMATION_FRAME = capitalize(CANCEL_ANIMATION_FRAME);
    for (; x < vendors[LENGTH] && !global[REQUEST_ANIMATION_FRAME]; ++x) {
        global[REQUEST_ANIMATION_FRAME] = global[vendors[x] + UP_REQUEST_ANIMATION_FRAME];
        global[CANCEL_ANIMATION_FRAME] = global[vendors[x] + UP_CANCEL_ANIMATION_FRAME];
    }
    if (!global[REQUEST_ANIMATION_FRAME]) {
        global[REQUEST_ANIMATION_FRAME] = function (callback) {
            var currTime = now(),
                timeToCall = Math.max(0, 16 - (currTime - lastTime)),
                id = global.setTimeout(function () {
                    callback(currTime + timeToCall);
                }, timeToCall);
            lastTime = currTime + timeToCall;
            return id;
        };
    }
    if (!global[CANCEL_ANIMATION_FRAME]) {
        global[CANCEL_ANIMATION_FRAME] = function (id) {
            global.clearTimeout(id);
        };
    }
};

function capitalize(string) {
    return string && string[0].toUpperCase() + string.slice(1);
}

function now() {
    return +(new Date());
}