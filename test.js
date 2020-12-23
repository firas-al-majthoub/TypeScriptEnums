"use strict";
var Mode;
(function (Mode) {
    Mode[Mode["X"] = 0] = "X";
    Mode[Mode["Y"] = 1] = "Y";
})(Mode || (Mode = {}));
function enumKeys(obj) {
    return Object.keys(obj).filter((k) => isNaN(+k) && !isNaN(obj[k]));
}
function enumValues(obj) {
    return Object.values(obj).filter((k) => !isNaN(+k));
}
(function (Mode) {
    function toString(mode) {
        return Mode[mode];
    }
    Mode.toString = toString;
    function parse(mode) {
        return Mode[mode];
    }
    Mode.parse = parse;
})(Mode || (Mode = {}));
// const mode = Mode.X;
// const str = Mode.toString(mode);
// console.log(str);
// const m = Mode.parse(str);
// console.log(m);
// const n = Mode.parse("test");
// console.log(n);
// Mode.getByString('test');
// for (const value of enumKeys(Mode)) {
//   console.log(typeof value);
// }
// console.log(Mode[0]);
// console.log(Mode[1] === "Y");
// for (const x of enumKeys(Mode)) {
//   console.log(x);
// }
// for (const x of enumValues(Mode)) {
//   console.log(x);
// }
let m = Mode.parse("X");
console.log(Mode[m]);
console.log(m);
console.log(Mode[0]);
