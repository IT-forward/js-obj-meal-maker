import menu from "./menu.js";

menu.addDishToCourse('appetizers', 'Salad1', 20);
menu.addDishToCourse('appetizers', 'Salad2', 25);
menu.addDishToCourse('appetizers', 'Salad3', 22);

menu.addDishToCourse('mains', 'Shorva', 30);
menu.addDishToCourse('mains', 'Lagmon', 35);
menu.addDishToCourse('mains', 'Osh', 38);

menu.addDishToCourse('desserts', 'Tort', 10);
menu.addDishToCourse('desserts', 'Paxlava', 8);
menu.addDishToCourse('desserts', 'Chocolate', 5);

let meal = menu.generateRandomMeal();
console.log(meal);
