import menu from "./menu.js";

menu.addDishToCourse('appetizers', 'The Perfect Meat and Cheese Tray', 7);
menu.addDishToCourse('mains', 'Beef T-Bone Steak', 15);
menu.addDishToCourse('desserts', 'Chocolate chip cookies', 3);

menu.addDishToCourse('appetizers', 'Caprese Garlic Bread', 8);
menu.addDishToCourse('mains', 'Lasagna', 13);
menu.addDishToCourse('desserts', 'Banana pudding', 5);

menu.addDishToCourse('appetizers', 'Oven Baked Zucchini Chips ', 8);
menu.addDishToCourse('mains', 'Creamy Tomato Pasta', 10);
menu.addDishToCourse('desserts', 'Tiramisu', 4);

const meal = menu.generateRandomMeal();
console.log(meal);
// console.log(menu.generateRandomMeal());