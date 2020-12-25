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
    const mealIndex = Math.floor(Math.random() * 5);
  }

};

export default menu;
