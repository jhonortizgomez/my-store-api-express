const { faker } = require('@faker-js/faker');
const boom = require('@hapi/boom');

class ProductsServices {
  constructor(){
    this.products = [];
    this.generate();
  };

  async generate(){
    const productsLimit = 10;
    for (let index = 0; index < productsLimit; index++) {
      this.products.push({
        id: faker.string.uuid(),
        name: faker.commerce.productName(),
        image: faker.image.url(),
        price: parseInt(faker.commerce.price(), 10),
        isBlock: faker.datatype.boolean(),
      });
    };
  };

  async create(data) {
    const newProduct = { id: faker.string.uuid(), ...data }
    this.products.push(newProduct)
    return newProduct;
  };

  async update(id, changes){
    const index = this.products.findIndex((product) => product.id === id);
    if (index === -1 ) throw boom.notFound('Product not found');
    const product = this.products[index];
    this.products[index] = {...product, ...changes};
  };

  async delete(id){
    const index = this.products.findIndex((product) => product.id === id);
    if (index === -1 ) throw boom.notFound('Product not found');
    this.products.splice(index, 1);
    return { id }
  };

  async find(){
    return this.products;
  };

  async findOne(id){
    const product = this.products.find((product) => product.id === id);
    if (!product) throw boom.notFound('Product not found');
    if (product.isBlock) throw boom.conflict('Product is block');
    return product;
  };
}

module.exports = ProductsServices
