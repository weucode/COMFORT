'use strict';
let v0 = true;
let v1 = {
    print: print || ((...xs) => console.log(...xs)),
    global: 666,
    table: new WebAssembly.Table({
        initial: 10,
        maximum: 20,
        element: 'anyfunc'
    }),
    memory: new WebAssembly.Memory({
        initial: 1,
        maximum: 2
    })
};
let v2 = { spectest };
let v3;
function f0(name, f2) {
    v2[name] = f2.exports;
}
function f1(bytes) {
    let v4 = new ArrayBuffer(bytes.length);
    let v5 = new Uint8Array(v4);
    for (let v6 = 0; v6 < bytes.length; ++v6) {
        v5[v6] = bytes.charCodeAt(v6);
    }
    return new WebAssembly.Module(v4);
}
function f2(bytes, imports = v2) {
    return new WebAssembly.Instance(f1(bytes), imports);
}
function f3(bytes) {
    try {
        f1(bytes);
    } catch (e) {
        if (e instanceof WebAssembly.CompileError)
            return;
    }
    throw new Error('Wasm decoding failure expected');
}
function f4(v3) {
    try {
        f1(bytes);
    } catch (e) {
        if (e instanceof WebAssembly.CompileError)
            return;
    }
    throw new Error('Wasm validation failure expected');
}
function f5(bytes) {
    try {
        f1(bytes);
    } catch (e) {
        if (e instanceof WebAssembly.CompileError)
            return;
        throw new Error('Wasm validation failure expected');
    }
    if (v0)
        throw new Error('Wasm validation failure expected');
}
function f6(bytes) {
    let v7 = f1(bytes);
    try {
        new WebAssembly.Instance(v7, v2);
    } catch (e) {
        if (e instanceof TypeError)
            return;
    }
    throw new Error('Wasm linking failure expected');
}
function f7(bytes) {
    let v7 = f1(bytes);
    try {
        new WebAssembly.Instance(v7, v2);
    } catch (e) {
        if (e instanceof WebAssembly.RuntimeError)
            return;
    }
    throw new Error('Wasm trap expected');
}
function f8(action) {
    try {
        action();
    } catch (e) {
        if (e instanceof WebAssembly.RuntimeError)
            return;
    }
    throw new Error('Wasm trap expected');
}
function f9(action, expected) {
    let v8 = action();
    if (!Object.is(v8, expected)) {
        throw new Error('Wasm return value ' + expected + ' expected, got ' + v8);
    }
    ;
}
function f10(action) {
    let v8 = action();
    if (!Number.isNaN(v8)) {
        throw new Error('Wasm return value NaN expected, got ' + v8);
    }
    ;
}
let v9 = Math.fround;
v3 = f2('\0asm\r\0\0\0\x01\t\x02`\x01~\x01~`\0\0\x03\f\x0B\0\0\0\0\0\x01\x01\x01\x01\x01\x01\x07\x83\x01\x0B\x07fac-rec\0\0\rfac-rec-named\0\x01\bfac-iter\0\x02\x0Efac-iter-named\0\x03\x07fac-opt\0\x04\bassert_0\0\x05\bassert_1\0\x06\bassert_2\0\x07\bassert_3\0\b\bassert_4\0\t\bassert_5\0\n\nØ\x02\x0B\x17\0 \0B\0Q\x04~B\x01\x05 \0 \0B\x01}\x10\0~\x0B\x0B\x17\0 \0B\0Q\x04~B\x01\x05 \0 \0B\x01}\x10\x01~\x0B\x0B2\x01\x02~ \0!\x01B\x01!\x02\x02@\x03@ \x01B\0Q\x04@\f\x02\x05\x02@ \x01 \x02~!\x02 \x01B\x01}!\x01\x0B\x0B\f\0\x0B\x0B \x02\x0B2\x01\x02~ \0!\x01B\x01!\x02\x02@\x03@ \x01B\0Q\x04@\f\x02\x05\x02@ \x01 \x02~!\x02 \x01B\x01}!\x01\x0B\x0B\f\0\x0B\x0B \x02\x0B,\x01\x01~B\x01!\x01\x02@ \0B\x02S\r\0\x03@ \x01 \0~!\x01 \0B\x7F|!\0 \0B\x01U\r\0\x0B\x0B \x01\x0B\x1A\0\x02@B\x19\x10\0B\x80\x80\x80Þ\x87\x92ìÏá\0QE\r\0\x0F\x0B\0\x0B\x1A\0\x02@B\x19\x10\x02B\x80\x80\x80Þ\x87\x92ìÏá\0QE\r\0\x0F\x0B\0\x0B\x1A\0\x02@B\x19\x10\x01B\x80\x80\x80Þ\x87\x92ìÏá\0QE\r\0\x0F\x0B\0\x0B\x1A\0\x02@B\x19\x10\x03B\x80\x80\x80Þ\x87\x92ìÏá\0QE\r\0\x0F\x0B\0\x0B\x1A\0\x02@B\x19\x10\x04B\x80\x80\x80Þ\x87\x92ìÏá\0QE\r\0\x0F\x0B\0\x0B\f\0B\x80\x80\x80\x80\x04\x10\0\f\0\x0B');
f9(() => v3.exports['assert_0']());
f9(() => v3.exports['assert_1']());
f9(() => v3.exports['assert_2']());
f9(() => v3.exports['assert_3']());
f9(() => v3.exports['assert_4']());
f8(() => v3.exports['assert_5']());
