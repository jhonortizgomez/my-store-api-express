const { faker } = require('@faker-js/faker')

class CategoriesServices {
  constructor(){
    this.categories = []
    this.generate();
  };

  generate(){
    const limit = 3
    for (let index = 0; index < limit; index++) {
      this.categories.push({
        id: faker.string.uuid(),
        name: faker.commerce.department()
      })
    }
  };

  find(){
    return this.categories;
  };

  findOne(id){
    return this.categories.find((category) => category.id === id )
  };
};

module.exports = CategoriesServices;
