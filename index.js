import menu from "./menu.js";

// TODO
menu.addDishToCourse('appertizers', 'Svejiy', 4);
menu.addDishToCourse('mains', 'Shorva', 10);
menu.addDishToCourse('desserts', 'Cake', 15);

menu.addDishToCourse('appertizers', 'Akroshka', 5);
menu.addDishToCourse('mains', 'Plow', 15);
menu.addDishToCourse('desserts', 'Pirojnoyee', 15);

menu.addDishToCourse('appertizers', 'Olivyee', 7);
menu.addDishToCourse('mains', 'Kazan-Kabab', 17);
menu.addDishToCourse('desserts', 'Ice-Cream', 5);

let meal = menu.generateRandomMeal();

console.log(meal);