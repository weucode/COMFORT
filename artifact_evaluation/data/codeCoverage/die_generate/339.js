var o = {};

o.__defineSetter__("foo", Math.pow);

function foo() {
  o.foo = 42;
}

Number.isNaN(0);
noInline(foo);

for (var i = 0; i < 10000; ++i) {
  foo();
  foo();
}
