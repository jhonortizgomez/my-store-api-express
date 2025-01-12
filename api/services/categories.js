const { faker } = require('@faker-js/faker');
const boom = require('@hapi/boom');

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
    const category = this.categories.find((category) => category.id === id );
    if (!category) throw boom.notFound('Category not found');
    return category;
  };
};

module.exports = CategoriesServices;
