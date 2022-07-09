# Hex Class

In the `Hex.ts` file, create a class called `Hex` for Hexadecimal numbers. It should initialize with a decimal number as an argument.

Adding a Hex object to a number generates a number (by using `.valueOf()`), but calling `.toString()` or `.toJSON()` will show its hexadecimal value starting with `"0x"`.

Example:

```js
const FF = new Hex(255);
FF.toString() === "0xFF";
FF.valueOf() + 1 === 256;
```

Also create two methods, `.plus()` and `.minus()`, which will add or subtract a number or Hex object and return a new Hex object.

```js
var a = new Hex(10);
var b = new Hex(5);
a.plus(b).toJSON() == "0xF";
```

Also, create a `.parse()` class method that can parse Hexadecimal numbers and convert them to standard decimal numbers:

```js
Hex.parse("0xFF") == 255;
Hex.parse("FF") == 255;
```

## Setup

* Run `npm install` to install dependencies
* Run `npm test` to run tests once
* Run `npm run test:watch` to run tests in watch mode
