function f0() {
    class C extends Function {
    }
    var v0 = new C('x', 'return this.bar + x;');
    return v0.apply({ bar: 1 }, [2]) === '1';
}
if (!f0())
    throw new Error('Test failed');
