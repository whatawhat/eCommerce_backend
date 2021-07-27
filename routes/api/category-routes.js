const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

//Gets all categories
router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try {
    const categoryData = await Category.findAll({
      include: [{ model: Product }]
    })
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

//Get one category based on id
router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try {
    const categoryData = await Product.findByPk(req.params.id, {
      include: [{ model: Product }]
    });
    if (!categoryData) {
      res.status(400).json({ message: `No category found with ${category.id}`});
      return;
    }
    res.status(200).json(categoryData);
    } catch (err) {
      res.status(500).json(err);
    }
});

//Create a new category
router.post('/', async (req, res) => {
  try {
    const categoryData = await Category.create({
      category_name: req.body.category_name});
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

//Update Category by 'id' value
router.put('/:id', async (req, res) => {
  try {
    const categoryData = await Category.update({
    where: {
      id: req.params.id,
    }
  });
  if (!categoryData) {
    res.status(400).json({ message: `No category found with ${category.id}`});
    return;
  }
   res.status(200).json(categoryData);
} catch (err) {
  res.status(400).json(err);
}
});

//Delete category by id value
router.delete('/:id', async (req, res) => {
  try {
    const categoryData = await Category.destroy({
      where: { 
        id: req.params.id,
      }
    });
    if (!categoryData) {
      res.status(400).json({ message: `No category found with ${category.id}`});
      return;
    }
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(400).json(err);
  }
  });

module.exports = router;
