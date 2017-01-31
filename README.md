# d3-format-india

Indian Number System formatter.

## Installing

If you use NPM, `npm install d3-format-india`. Otherwise, download the [latest release](https://github.com/d3/d3-format-india/releases/latest).

## API Reference

<a href="#formatIndia" name="formatIndia">#</a> <b>formatIndia</b>(value)

Formats the given number `value` using the Indian Number System. For example:

```js
var formatIndia = require("d3-format-india").formatIndia;

console.log(formatIndia(10)); // Prints "10"
console.log(formatIndia(100)); // Prints "100"
console.log(formatIndia(1000)); // Prints "1,000"
console.log(formatIndia(10000)); // Prints "10,000"
console.log(formatIndia(100000)); // Prints "1,00,000"
console.log(formatIndia(1000000)); // Prints "10,00,000"
console.log(formatIndia(10000000)); // Prints "1,00,00,000"
console.log(formatIndia(10000000.4543)); // Prints "1,00,00,000.4543"
console.log(formatIndia(-1000000)); // Prints "-10,00,000"
console.log(formatIndia(-10000000.4543)); // Prints "-1,00,00,000.4543"
```
