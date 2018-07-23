const express = require('express');
const { version } = require('./package.json');
const request = require('request');
let cheerio = require('cheerio');

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.json({version});
});

app.get('/upc/:upc', (req, res) => {
  const upc = req.params.upc;
  request.get(`https://ndb.nal.usda.gov/ndb/search/list?qlookup=${upc}`, (searchError, searchResponse, searchBody) => {
    if (searchError) {
      return res.json({success: false, error: `No results found for UPC ${upc}`, data: null});
    }
    let $ = cheerio.load(searchBody.replace(/[\n\r\t]+/g, ''));
    const productLink = $($($($('.list-left table tbody tr')[0]).html()).children()[1]).attr('href');
    const fullProductText = $($($($('.list-left table tbody tr')[0]).html()).children()[2]).text().trim();
    const productText = fullProductText.split(', UPC')[0];
    let detailLink = 'https://ndb.nal.usda.gov' + productLink;
    request.get(detailLink, (detailError, detailResponse, detailBody) => {
      if (detailError) {
        return res.json({success: false, error: `No results found for UPC ${upc}`, data: null});
      }
      $ = cheerio.load(detailBody.replace(/[\n\r\t]+/g, ''));      
      let ingredientsText = $($('.container .row .col-md-12')[2]).html().replace(/[\n\r\t]+/g, '').replace('<strong>Ingredients: </strong>', '').split('<span')[0].trim();
      if (ingredientsText.endsWith('.')) {
        ingredientsText = ingredientsText.slice(0, -1);
      }
      let ingredientsList = ingredientsText.replace(/, (?=(?:[^\(]*\([^\(]*\))*[^\)]*$)/g, '_REPLACE_');
      ingredientsList = ingredientsList.split('_REPLACE_');
      res.json({success: true, error: null, data: {upc, fullProductText, productText, ingredientsList, ingredientsText}});
    });
  });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);  
});