import menu from "./menu.js";

menu.addDishToCourse('appetizers', 'dish_10', 10);
menu.addDishToCourse('mains', 'dish_20', 20);
menu.addDishToCourse('desserts', 'dish_30', 30);

menu.addDishToCourse('appetizers', 'dish_11', 11);
menu.addDishToCourse('mains', 'dish_21', 21);
menu.addDishToCourse('desserts', 'dish_31', 31);

menu.addDishToCourse('appetizers', 'dish_12', 12);
menu.addDishToCourse('mains', 'dish_22', 22);
menu.addDishToCourse('desserts', 'dish_32', 32);

const meal = menu.generateRandomMeal();

console.log(meal);