const { faker } = require('@faker-js/faker')

class CategoriesServices {
  constructor(){
    this.categories = []
    this.generate();
  };

  async generate(){
    const limit = 3;
    for (let index = 0; index < limit; index++) {
      this.categories.push({ id: faker.string.uuid(), name: faker.commerce.department() });
    };
  };

  async find(){
    return this.categories;
  };

  async findOne(id){
    return this.categories.find((category) => category.id === id );
  };
};

module.exports = CategoriesServices;
