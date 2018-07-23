const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const api = require('./api');

app.use(api());

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);  
});