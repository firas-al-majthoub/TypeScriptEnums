enum Mode {
  X,
  Y,
}

function enumKeys<O extends object, K extends keyof O = keyof O>(obj: O): K[] {
  return Object.keys(obj).filter((k) => isNaN(+k) && !isNaN(obj[k])) as K[];
}

function enumValues<O extends object, K extends keyof O = keyof O>(obj: O): K[] {
  return Object.values(obj).filter((k) => !isNaN(+k)) as K[];
}

namespace Mode {
  export function toString(mode: Mode): string {
    return Mode[mode];
  }

  export function parse(mode: string): Mode {
    return Mode[mode];
  }
}

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

let m: Mode = Mode.parse("X");
console.log(Mode[m]);
console.log(m);

console.log(Mode[0]);
