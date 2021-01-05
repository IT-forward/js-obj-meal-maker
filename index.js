import menu from "./menu.js";

menu.addDishToCourse("appetizers", "egg rolls", 10);
menu.addDishToCourse("appetizers", "fried mozarella", 12);
menu.addDishToCourse("appetizers", "crackers", 7);

menu.addDishToCourse("mains", "chicken", 15);
menu.addDishToCourse("mains", "grilled beef", 18);
menu.addDishToCourse("mains", "Uyghur noodles", 17);

menu.addDishToCourse("desserts", "ice cream", 5);
menu.addDishToCourse("desserts", "vanilla milkshake", 6);
menu.addDishToCourse("desserts", "strawberry smoothie", 5.5);

let meal = menu.generateRandomMeal();
console.log(meal);
