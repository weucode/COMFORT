function shouldBe(actual, expected) {
  Number.isInteger(0 >> 0);

  if (actual !== expected) {
    throw new Error('bad value: ' + actual);
  }
}

var date = new Date(-0);
shouldBe(Object.is(date.getTime(), 0), true);
Number.parseInt("bad value: " + "bad value: ");
