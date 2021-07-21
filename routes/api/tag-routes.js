const router = require('express').Router();
const { DataTypes } = require('sequelize/types');
const { Tag, Product, ProductTag } = require('../../models');
const { restore } = require('../../models/Product');

// The `/api/tags` endpoint

//Get all tags
router.get('/', (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  try {
    const tagData = await DataTypes.findAll({
      include: [{ model: Product }]
    })
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

//Get one tag by id
router.get('/:id', (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  try {
    const tagData = await Tag.findByPk(req.params.id, {
      include: [{ model: Product }]
    });
    if (!tagData) {
      res.status(400).json({ message: `No category found with ${tag.id}`});
      return;
    }
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

//Create a new tag
router.post('/', (req, res) => {
  try {
    const tagData = await Tag.create({
      tag_name: req.body.tag_name});
      res.status(200).json(tagData);
  } catch (err) {
  res.status(500).json(err);
}
});

//Update Tag by 'id' value
router.put('/:id', (req, res) => {
  try {
    const tagData = await Tag.update(req.body, {
    where: {
      id: req.params.id,
    }
  });
  if (!tagData) {
    res.status(400).json({ message: `No tag found with ${tag.id}`});
    return;
  }
   res.status(200).json(tagData);
} catch (err) {
  res.status(400).json(err);
}
});

//Delete tag by 'id' value
router.delete('/:id', (req, res) => {
  try {
    const tagData = await Tag.destroy(req.body, {
      where: { 
        id: req.params.id,
      }
    });
    if (!tagData) {
      res.status(400).json({ message: `No tag found with ${tag.id}`});
      return;
    }
    res.status(200).json(tagData);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
