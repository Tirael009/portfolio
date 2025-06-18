const express = require('express');
const app = express();
const path = require('path');

require('dotenv').config();

app.use(express.json());
app.use(express.static('public'));

const submitForm = require('./api/submit-form');
app.use('/api/submit-form', submitForm);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
