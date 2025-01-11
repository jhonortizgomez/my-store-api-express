const { faker } = require('@faker-js/faker')

class ProductsServices {
  constructor(){
    this.products = [];
    this.generate();
  };

  generate(){
    const productsLimit = 10
    for (let index = 0; index < productsLimit; index++) {
      this.products.push({
        id: faker.string.uuid(),
        name: faker.commerce.productName(),
        image: faker.image.url(),
        price: parseInt(faker.commerce.price(), 10),
      })
    }
  };

  create(data) {
    const newProduct = {
      id: faker.string.uuid(),
      ...data,
    }
    this.products.push(newProduct)
    return newProduct;
  };

  update(id, changes){
    const index = this.products.findIndex((product) => product.id === id)
    if (index === -1 ) {
      throw new Error('Product not found')
    }
    const product = this.products[index]
    this.products[index] = {...product, ...changes};
  };

  delete(id){
    const index = this.products.findIndex((product) => product.id === id)
    if (index === -1 ) {
      throw new Error('Product not found')
    }
    this.products.splice(index, 1);
    return { id }
  };

  find(){
    return this.products;
  };

  findOne(id){
    return this.products.find((product) => product.id === id)
  };
}

module.exports = ProductsServices
