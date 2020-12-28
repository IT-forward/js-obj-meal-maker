import menu from "./menu.js";

menu.addDishToCourse('appetizers', 'Soup', 5);
menu.addDishToCourse('mains', 'Fried Meat', 8);
menu.addDishToCourse('desserts', 'Ice Cream', 5);

menu.addDishToCourse('appetizers', 'Kebab', 12);
menu.addDishToCourse('mains', 'Somsa', 16);
menu.addDishToCourse('desserts', 'Cake', 5);

menu.addDishToCourse('appetizers', 'Salad', 7);
menu.addDishToCourse('mains', 'Plow', 4);
menu.addDishToCourse('desserts', 'Melon', 2);

let meal = menu.generateRandomMeal();
console.log(meal);