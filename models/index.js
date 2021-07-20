// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');
const { belongsToMany } = require('./Product');

// Products belongsTo Category
Products.belongsTo(Category, {
  foreignKey: "product_id",
  //onDelete: "CASCADE",
});

// Categories have many Products
Category.hasMany(Product, {
  foreignKey: "category_id",
  //onDelete: "CASCADE",
})

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany (Tag, { 
  through: "ProductTag"
});

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany (Product, {
  through: "ProductTag"
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
