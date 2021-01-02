const menu = {
  _courses : {
    appetizers : [],
    mains : [],
    desserts : []
  },
  get courses() {
    return this._courses;
  },
  addDishToCourse(courseName, dishName, dishPrice) {
    let dish = {
      name : dishName,
      price : dishPrice
    };
    this._courses[courseName].push(dish);
  },
  getRandomDishFromCourse(courseName) {
    let dishes = this._courses[courseName];
    let randomIndex = Math.floor(Math.random() * dishes.length);
    return dishes[randomIndex];
  },
  generateRandomMeal() {
    let appetizer = this.getRandomDishFromCourse('appetizers');
    let main = this.getRandomDishFromCourse('mains');
    let dessert = this.getRandomDishFromCourse('desserts');
    return {
      dishes: [appetizer.name, main.name, dessert.name],
      total: '$' + (appetizer.price + main.price + dessert.price)
    };
  }
};
export default menu;