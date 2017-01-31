var tape = require("tape"),
    format = require("../").formatIndia;

console.log(format);

tape("formatIndia() returns correctly formatted numbers using the Indian Number System.", function(test) {

  test.equal(format(10), "10");
  test.equal(format(100), "100");
  test.equal(format(1000), "1,000");
  test.equal(format(10000), "10,000");
  test.equal(format(100000), "1,00,000");
  test.equal(format(1000000), "10,00,000");
  test.equal(format(10000000), "1,00,00,000");
  test.equal(format(10000000.4543), "1,00,00,000.4543");
  test.equal(format(1000.321), "1,000.321");
  test.equal(format(10.5), "10.5");

  test.equal(format(-10), "-10");
  test.equal(format(-100), "-100");
  test.equal(format(-1000), "-1,000");
  test.equal(format(-10000), "-10,000");
  test.equal(format(-100000), "-1,00,000");
  test.equal(format(-1000000), "-10,00,000");
  test.equal(format(-10000000), "-1,00,00,000");
  test.equal(format(-10000000.4543), "-1,00,00,000.4543");
  test.equal(format(-1000.321), "-1,000.321");
  test.equal(format(-10.5), "-10.5");

  test.end();
});
