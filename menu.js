const menu = {
  _courses: {
      mains: [],
      desserts: [],
      appetizers: []
  },
  get courses() {
    return this._courses;
  },
  addDishToCourse(courseName, dishName, dishPrice) {
     let dishGroup = {
       name: dishName,
       price: dishPrice
     };
     this._courses[courseName].push(dishGroup);
  },
  getRandomDishFromCourse(courseName) {
      const courseDishes = this._courses[courseName];
      const randomIndex = Math.floor(Math.random() * courseDishes.length);
      return courseDishes[randomIndex];
  },
  generateRandomMeal() {
   const appetizer = this.getRandomDishFromCourse('appetizers');
   const main = this.getRandomDishFromCourse('mains');
   const dessert = this.getRandomDishFromCourse('desserts');
   return {
      dishes: [appetizer.name, main.name, dessert.name],
      total: '$' + `${appetizer.price + main.price + dessert.price}`
    }
  }
};

export default menu;
