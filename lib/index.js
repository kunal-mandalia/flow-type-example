'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _square = require('./square');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = (0, _express2.default)();

app.get('/square/:n', (req, res) => {
  const n = req.params.n;
  return res.status(200).json({ result: (0, _square.square)(n) });
});

app.listen(5000, () => {
  console.log("Flow-type-example server listening on port 5000");
});