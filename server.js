const express = require('express');
const requestPromise = require('request-promise');

const app = express()

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

app.listen(5000, () => {
 console.log("Server running on port 5000");
});

const requestOptions = (qs) => ({
  method: 'GET',
  uri: 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest',
  headers: {
    'X-CMC_PRO_API_KEY': '2533724a-c9d1-4ed7-83d3-86849785e543'
  },
  qs,
  json: true,
  gzip: true
});

app.get("/assets", (req, res) => {
  const symbol = req.query.symbols
  const qs = symbol ? { "symbol": symbol } : {}
  const options = requestOptions(qs)

  requestPromise(options).then(response => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.send(response);
  });
 })