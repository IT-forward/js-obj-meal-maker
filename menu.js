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
     switch(courseName) {
       case 'mains':
            menu._courses.mains.push(dishGroup);
            break;
       case 'desserts':
            menu._courses.desserts.push(dishGroup);
            break;
       case 'appetizers':
            menu._courses.appetizers.push(dishGroup);
            break;
        default:
            console.log('Error courses');
     }
  },
  getRandomDishFromCourse(courseName) {
      const randomIndex = Math.floor(Math.random() * this._courses[courseName].length);
      return this._courses[courseName][randomIndex];
  },
  generateRandomMeal() {
   const appetizer = this.getRandomDishFromCourse('appetizers');
   const main = this.getRandomDishFromCourse('mains');
   const dessert = this.getRandomDishFromCourse('desserts');
   const dishes = [appetizer.name, main.name, dessert.name];
   const total = `${appetizer.price + main.price + dessert.price}`;
   const newObject = {
      dishes: dishes,
      total: '$' + total
    }
    return newObject;
  }
  
};

export default menu;
