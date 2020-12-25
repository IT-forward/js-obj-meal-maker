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
    switch(courseName){
      case 'appetizers':
        this._courses.appetizers.push(dish);
        break;
      case 'mains':
        this._courses.mains.push(dish);
        break;
      case 'desserts':
        this._courses.desserts.push(dish);
        break;
    }
  },

  getRandomDishFromCourse(courseName) {
    
    let randomMealIndex = Math.floor(Math.random() * this._courses[courseName].length);
    if(courseName === 'appetizers'){ 
      return this._courses.appetizers[randomMealIndex];
    } else if(courseName === 'mains'){
      return this._courses.mains[randomMealIndex];
    } else if(courseName === 'desserts'){
      return this._courses.desserts[randomMealIndex];
    }
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
