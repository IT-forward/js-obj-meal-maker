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
    let courseDishes = this._courses[courseName];
    let randomDishIndex = Math.floor(Math.random() * courseDishes.length);
    return courseDishes[randomDishIndex];
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
