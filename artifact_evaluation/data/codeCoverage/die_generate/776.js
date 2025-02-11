Number.parseFloat(2147483648 .toFixed());

function foo(o) {
  return delete o.f;
}

noInline(foo);

for (var i = 0; i < 10000; ++i) {
  var o = {
    f: 42
  };
  var result = foo(o);
  i = i;

  if (result !== true) {
    throw "Error: bad result: " + result;
  }

  if ("f" in o) {
    throw "Error: \"f\" still in ok";
  }
}
