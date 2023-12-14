"use strict";
var _a, _b;
let r = 5;
let q = 3;
r += q *= 2;
console.log(r);
let price = 10;
let discount = null;
let finalprice = price - (discount !== null && discount !== void 0 ? discount : 0);
console.log(finalprice);
let j;
let resulty = j !== null ? j : "Default";
console.log(resulty);
const a = 3;
const b = "5";
console.log(a + b);
const l = "10" - 2;
console.log(l);
const A = true;
const B = 2;
console.log(A + B);
const X = "20" * 4;
console.log(X);
const AA = null;
const BB = 5;
console.log(AA + BB);
const m = "Hello";
const v = "World";
console.log(m - v);
const s = 0;
const bb = false;
console.log(s == bb);
const Z = null == undefined;
console.log(Z);
const d = [] == "";
console.log(d);
const J = "0" == 0;
console.log(J);
console.log(!!"0");
var M = " ";
var _n = "false";
console.log(Boolean(M));
console.log(Boolean(Symbol()));
console.log(0 || "Hello" && (null !== null && null !== void 0 ? null : true));
console.log(M === _n);
console.log(Boolean(-42));
let obj = {
    prop1: {
        prop2: null
    }
};
console.log((_b = (_a = obj.prop1) === null || _a === void 0 ? void 0 : _a.prop2) !== null && _b !== void 0 ? _b : "Default value");
console.log(Boolean(-0));
for (let i = 0; i <= 5; i++) {
    if (i === 3) {
        continue;
    }
    console.log(i);
}
let I = 0;
do {
    console.log(I);
    I++;
} while (I < 3);
const value = null || "Default";
console.log(value);
let nume = 5;
const resulte = nume && "value exist";
console.log(resulte);
let nomi = 3;
while (nomi > 0) {
    console.log(nomi);
    nomi -= 2;
}
const valuee = "" || 0 || false || "falback";
console.log(valuee);
const S = 5;
function foo() {
    if (S === 5) {
        let S = 10;
    }
    console.log(S);
}
foo();
let V = 0;
while (V < 10) {
    if (V === 5) {
        break;
    }
    V++;
}
console.log(V);
let R = 2;
let resulti = '';
switch (R) {
    case 1:
        resulti += 'A';
    case 2:
        resulti += 'B';
    case 3:
        resulti += 'C';
    default:
        resulti += 'D';
}
console.log(resulti);
