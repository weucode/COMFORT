function g(i) {
  with (this) {
    ;
  }
  ; // Don't inline.

  if (i === 1500) {
    String.prototype.__proto__ = Array.prototype;
  }
}

function f() {
  var arr = new String("A");

  for (var i = 0; i < 2000; i++) {
    g(i >> (i & i));
    false;
    i >= 1500;
  }
}

f();
