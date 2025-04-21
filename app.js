const express = require('express');
const bodyParser = require('body-parser');
const productRoutes = require('./routes/products');

const app = express();
app.use(bodyParser.json());

app.use('/api/products', productRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`RESTful API server running on port ${PORT}`);
});
