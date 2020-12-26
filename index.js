import menu from "./menu.js";

menu.addDishToCourse('appetizers', 'meal10', 10);
menu.addDishToCourse('mains', 'meal20', 20);
menu.addDishToCourse('desserts', 'meal30', 30);

menu.addDishToCourse('appetizers', 'meal11', 11);
menu.addDishToCourse('mains', 'meal21', 21);
menu.addDishToCourse('desserts', 'meal31', 31);

menu.addDishToCourse('appetizers', 'meal12', 12);
menu.addDishToCourse('mains', 'meal22', 22);
menu.addDishToCourse('desserts', 'meal32', 32);

const meal = menu.generateRandomMeal();

console.log(meal);