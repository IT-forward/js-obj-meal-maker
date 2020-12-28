const menu = {
  //task 1
  _courses: {
    appetizers: [],
    mains: [],
    desserts: []
  },

  get courses() {
    return this._courses;
  },

  addDishToCourse(courseName, dishName, dishPrice) {
    const dish = {
      name: dishName,
      price: dishPrice
    };
    if (courseName === 'appetizers') {
      menu._courses.appetizers.push(dish);
    } else if (courseName === 'mains') {
      menu._courses.mains.push(dish);
    } else if (courseName === 'desserts') {
      menu._courses.desserts.push(dish);
    }
  },

  getRandomDishFromCourse(courseName) {
    let mealIndex = Math.floor(Math.random() * this._courses[courseName].length);
    return this._courses[courseName][mealIndex];
  },

  generateRandomMeal() {
    const appetizer = this.getRandomDishFromCourse('appetizers');
    const main = this.getRandomDishFromCourse('mains');
    const dessert = this.getRandomDishFromCourse('desserts');

    const dishes = [appetizer.name, main.name, dessert.name];
    const total = appetizer.price + main.price + dessert.price;
    const dishNameAndTotalPrice = {
      dishes: dishes,
      total: '$' + total
    }
    return dishNameAndTotalPrice;
  }

};

export default menu;
