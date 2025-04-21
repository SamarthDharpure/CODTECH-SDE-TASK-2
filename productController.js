let products = [];
let nextId = 1;

// GET all products
exports.getAllProducts = (req, res) => {
  res.json(products);
};

// GET product by ID
exports.getProductById = (req, res) => {
  const product = products.find(p => p.id === parseInt(req.params.id));
  if (!product) return res.status(404).json({ error: 'Product not found' });
  res.json(product);
};

// POST create new product
exports.createProduct = (req, res) => {
  const { name, price } = req.body;
  if (!name || price == null) return res.status(400).json({ error: 'Name and price are required' });
  const product = { id: nextId++, name, price };
  products.push(product);
  res.status(201).json(product);
};

// PUT update product
exports.updateProduct = (req, res) => {
  const product = products.find(p => p.id === parseInt(req.params.id));
  if (!product) return res.status(404).json({ error: 'Product not found' });
  const { name, price } = req.body;
  if (name) product.name = name;
  if (price != null) product.price = price;
  res.json(product);
};

// DELETE product
exports.deleteProduct = (req, res) => {
  const index = products.findIndex(p => p.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).json({ error: 'Product not found' });
  products.splice(index, 1);
  res.status(204).send();
};
