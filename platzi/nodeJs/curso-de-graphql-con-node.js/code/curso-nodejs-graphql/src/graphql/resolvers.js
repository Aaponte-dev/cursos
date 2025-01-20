const { getProduct, getProducts, addProduct, updateProduct, deleteProduct, getProductsByCategory } = require("./product.resolver");
const { login } = require("./auth.resolver");
const { addCategory, getCategory } = require("./category.resolver");
const { RegularExpression } = require("graphql-scalars");

const CategoryNameType = new RegularExpression('CategoryNameType', /^[a-zA-Z0-9]{3,8}$/);

const resolvers = {
  Query: {
    hello: () => 'Hello mundo',
    getPerson: (_, args) => `Hello, my name is ${args.name}, I'm ${args.age} years old`,
    getInt: () => 1,
    getFloat: () => .5,
    getString: () => 'Hola',
    getBoolean: () => false,
    getID: () => '164218',
    getNumbers: (_, args) => args.numbers,
    // Category
    category: getCategory,
    // Products
    product: getProduct,
    products: getProducts
  },
  Mutation: {
    // Auth
    login,
    // Category
    addCategory,
    // Products
    addProduct,
    updateProduct,
    deleteProduct
  },
  CategoryNameType,
  Category: {
    products: getProductsByCategory
  }
}

module.exports = resolvers;
