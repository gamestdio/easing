(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.easing = f()}})(function(){var define,module,exports;return (function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function backInOut(t) {
    const s = 1.70158 * 1.525;
    if ((t *= 2) < 1)
        return 0.5 * (t * t * ((s + 1) * t - s));
    return 0.5 * ((t -= 2) * t * ((s + 1) * t + s) + 2);
}
exports.backInOut = backInOut;

},{}],2:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function backIn(t) {
    const s = 1.70158;
    return t * t * ((s + 1) * t - s);
}
exports.backIn = backIn;

},{}],3:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function backOut(t) {
    const s = 1.70158;
    return --t * t * ((s + 1) * t + s) + 1;
}
exports.backOut = backOut;

},{}],4:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bounce_out_1 = require("./bounce-out");
function bounceInOut(t) {
    return t < 0.5
        ? 0.5 * (1.0 - bounce_out_1.bounceOut(1.0 - t * 2.0))
        : 0.5 * bounce_out_1.bounceOut(t * 2.0 - 1.0) + 0.5;
}
exports.bounceInOut = bounceInOut;

},{"./bounce-out":6}],5:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bounce_out_1 = require("./bounce-out");
function bounceIn(t) {
    return 1.0 - bounce_out_1.bounceOut(1.0 - t);
}
exports.bounceIn = bounceIn;

},{"./bounce-out":6}],6:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function bounceOut(t) {
    const a = 4.0 / 11.0;
    const b = 8.0 / 11.0;
    const c = 9.0 / 10.0;
    const ca = 4356.0 / 361.0;
    const cb = 35442.0 / 1805.0;
    const cc = 16061.0 / 1805.0;
    const t2 = t * t;
    return t < a
        ? 7.5625 * t2
        : t < b
            ? 9.075 * t2 - 9.9 * t + 3.4
            : t < c
                ? ca * t2 - cb * t + cc
                : 10.8 * t * t - 20.52 * t + 10.72;
}
exports.bounceOut = bounceOut;

},{}],7:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function circInOut(t) {
    if ((t *= 2) < 1)
        return -0.5 * (Math.sqrt(1 - t * t) - 1);
    return 0.5 * (Math.sqrt(1 - (t -= 2) * t) + 1);
}
exports.circInOut = circInOut;

},{}],8:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function circIn(t) {
    return 1.0 - Math.sqrt(1.0 - t * t);
}
exports.circIn = circIn;

},{}],9:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function circOut(t) {
    return Math.sqrt(1 - (--t * t));
}
exports.circOut = circOut;

},{}],10:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function cubicInOut(t) {
    return t < 0.5
        ? 4.0 * t * t * t
        : 0.5 * Math.pow(2.0 * t - 2.0, 3.0) + 1.0;
}
exports.cubicInOut = cubicInOut;

},{}],11:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function cubicIn(t) {
    return t * t * t;
}
exports.cubicIn = cubicIn;

},{}],12:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function cubicOut(t) {
    var f = t - 1.0;
    return f * f * f + 1.0;
}
exports.cubicOut = cubicOut;

},{}],13:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function elasticInOut(t) {
    return t < 0.5
        ? 0.5 * Math.sin(+13.0 * Math.PI / 2 * 2.0 * t) * Math.pow(2.0, 10.0 * (2.0 * t - 1.0))
        : 0.5 * Math.sin(-13.0 * Math.PI / 2 * ((2.0 * t - 1.0) + 1.0)) * Math.pow(2.0, -10.0 * (2.0 * t - 1.0)) + 1.0;
}
exports.elasticInOut = elasticInOut;

},{}],14:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function elasticIn(t) {
    return Math.sin(13.0 * t * Math.PI / 2) * Math.pow(2.0, 10.0 * (t - 1.0));
}
exports.elasticIn = elasticIn;

},{}],15:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function elasticOut(t) {
    return Math.sin(-13.0 * (t + 1.0) * Math.PI / 2) * Math.pow(2.0, -10.0 * t) + 1.0;
}
exports.elasticOut = elasticOut;

},{}],16:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function expoInOut(t) {
    return (t === 0.0 || t === 1.0)
        ? t
        : t < 0.5
            ? +0.5 * Math.pow(2.0, (20.0 * t) - 10.0)
            : -0.5 * Math.pow(2.0, 10.0 - (t * 20.0)) + 1.0;
}
exports.expoInOut = expoInOut;

},{}],17:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function expoIn(t) {
    return t === 0.0 ? t : Math.pow(2.0, 10.0 * (t - 1.0));
}
exports.expoIn = expoIn;

},{}],18:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function expoOut(t) {
    return t === 1.0 ? t : 1.0 - Math.pow(2.0, -10.0 * t);
}
exports.expoOut = expoOut;

},{}],19:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var back_in_out_1 = require("./back-in-out");
exports.backInOut = back_in_out_1.backInOut;
var back_in_1 = require("./back-in");
exports.backIn = back_in_1.backIn;
var back_out_1 = require("./back-out");
exports.backOut = back_out_1.backOut;
var bounce_in_out_1 = require("./bounce-in-out");
exports.bounceInOut = bounce_in_out_1.bounceInOut;
var bounce_in_1 = require("./bounce-in");
exports.bounceIn = bounce_in_1.bounceIn;
var bounce_out_1 = require("./bounce-out");
exports.bounceOut = bounce_out_1.bounceOut;
var circ_in_out_1 = require("./circ-in-out");
exports.circInOut = circ_in_out_1.circInOut;
var circ_in_1 = require("./circ-in");
exports.circIn = circ_in_1.circIn;
var circ_out_1 = require("./circ-out");
exports.circOut = circ_out_1.circOut;
var cubic_in_out_1 = require("./cubic-in-out");
exports.cubicInOut = cubic_in_out_1.cubicInOut;
var cubic_in_1 = require("./cubic-in");
exports.cubicIn = cubic_in_1.cubicIn;
var cubic_out_1 = require("./cubic-out");
exports.cubicOut = cubic_out_1.cubicOut;
var elastic_in_out_1 = require("./elastic-in-out");
exports.elasticInOut = elastic_in_out_1.elasticInOut;
var elastic_in_1 = require("./elastic-in");
exports.elasticIn = elastic_in_1.elasticIn;
var elastic_out_1 = require("./elastic-out");
exports.elasticOut = elastic_out_1.elasticOut;
var expo_in_out_1 = require("./expo-in-out");
exports.expoInOut = expo_in_out_1.expoInOut;
var expo_in_1 = require("./expo-in");
exports.expoIn = expo_in_1.expoIn;
var expo_out_1 = require("./expo-out");
exports.expoOut = expo_out_1.expoOut;
var linear_1 = require("./linear");
exports.linear = linear_1.linear;
var quad_in_out_1 = require("./quad-in-out");
exports.quadInOut = quad_in_out_1.quadInOut;
var quad_in_1 = require("./quad-in");
exports.quadIn = quad_in_1.quadIn;
var quad_out_1 = require("./quad-out");
exports.quadOut = quad_out_1.quadOut;
var quart_in_out_1 = require("./quart-in-out");
exports.quartInOut = quart_in_out_1.quartInOut;
var quart_in_1 = require("./quart-in");
exports.quartIn = quart_in_1.quartIn;
var quart_out_1 = require("./quart-out");
exports.quartOut = quart_out_1.quartOut;
var quint_in_out_1 = require("./quint-in-out");
exports.quintInOut = quint_in_out_1.quintInOut;
var quint_in_1 = require("./quint-in");
exports.quintIn = quint_in_1.quintIn;
var quint_out_1 = require("./quint-out");
exports.quintOut = quint_out_1.quintOut;
var sine_in_out_1 = require("./sine-in-out");
exports.sineInOut = sine_in_out_1.sineInOut;
var sine_in_1 = require("./sine-in");
exports.sineIn = sine_in_1.sineIn;
var sine_out_1 = require("./sine-out");
exports.sineOut = sine_out_1.sineOut;

},{"./back-in":2,"./back-in-out":1,"./back-out":3,"./bounce-in":5,"./bounce-in-out":4,"./bounce-out":6,"./circ-in":8,"./circ-in-out":7,"./circ-out":9,"./cubic-in":11,"./cubic-in-out":10,"./cubic-out":12,"./elastic-in":14,"./elastic-in-out":13,"./elastic-out":15,"./expo-in":17,"./expo-in-out":16,"./expo-out":18,"./linear":20,"./quad-in":22,"./quad-in-out":21,"./quad-out":23,"./quart-in":25,"./quart-in-out":24,"./quart-out":26,"./quint-in":28,"./quint-in-out":27,"./quint-out":29,"./sine-in":31,"./sine-in-out":30,"./sine-out":32}],20:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function linear(t) {
    return t;
}
exports.linear = linear;

},{}],21:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function quadInOut(t) {
    t /= 0.5;
    if (t < 1)
        return 0.5 * t * t;
    t--;
    return -0.5 * (t * (t - 2) - 1);
}
exports.quadInOut = quadInOut;

},{}],22:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function quadIn(t) {
    return t * t;
}
exports.quadIn = quadIn;

},{}],23:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function quadOut(t) {
    return -t * (t - 2.0);
}
exports.quadOut = quadOut;

},{}],24:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function quartInOut(t) {
    return t < 0.5
        ? +8.0 * Math.pow(t, 4.0)
        : -8.0 * Math.pow(t - 1.0, 4.0) + 1.0;
}
exports.quartInOut = quartInOut;

},{}],25:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function quartIn(t) {
    return Math.pow(t, 4.0);
}
exports.quartIn = quartIn;

},{}],26:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function quartOut(t) {
    return Math.pow(t - 1.0, 3.0) * (1.0 - t) + 1.0;
}
exports.quartOut = quartOut;

},{}],27:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function quintInOut(t) {
    if ((t *= 2) < 1)
        return 0.5 * t * t * t * t * t;
    return 0.5 * ((t -= 2) * t * t * t * t + 2);
}
exports.quintInOut = quintInOut;

},{}],28:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function quintIn(t) {
    return t * t * t * t * t;
}
exports.quintIn = quintIn;

},{}],29:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function quintOut(t) {
    return --t * t * t * t * t + 1;
}
exports.quintOut = quintOut;

},{}],30:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function sineInOut(t) {
    return -0.5 * (Math.cos(Math.PI * t) - 1);
}
exports.sineInOut = sineInOut;

},{}],31:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function sineIn(t) {
    var v = Math.cos(t * Math.PI * 0.5);
    if (Math.abs(v) < 1e-14)
        return 1;
    else
        return 1 - v;
}
exports.sineIn = sineIn;

},{}],32:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function sineOut(t) {
    return Math.sin(t * Math.PI / 2);
}
exports.sineOut = sineOut;

},{}]},{},[19])(19)
});
