const menu = {
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
    
    this._courses[courseName].push(dish);
  },

  getRandomDishFromCourse(courseName) {
    let randomMealIndex = Math.floor(Math.random() * this._courses[courseName].length);
    return this._courses[courseName][randomMealIndex];
  },

  generateRandomMeal() {
    const appetizer = this.getRandomDishFromCourse('appetizers');
    const main = this.getRandomDishFromCourse('mains');
    const dessert = this.getRandomDishFromCourse('desserts');

    const totalPrice = appetizer.price + main.price + dessert.price;
    
    const randomMealObject = {
      dishes: [appetizer.name, main.name, dessert.name],
      total: '$' + totalPrice
    };
    
    return randomMealObject; 
  }
};

export default menu;
