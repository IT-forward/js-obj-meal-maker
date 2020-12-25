## How to run and test?

As previous [Rock, Paper, or Scissors task](https://github.com/IT-forward/js-fn-rock-paper-scissors) it uses `yarn` and `jest` testing framework so the process is the same:

1. `git clone` the repo.
2. Create new `branch` with your name and checkout.
3. Run `yarn`.
4. **To run tests:** run `yarn test` or `yarn watch` depending on your preference.

# Meal Maker

As a frequent diner, you love trying out new restaurants and experimenting with different foods. However, having to figure out what you want to order can be a time-consuming ordeal if the menu is big, and you want an easier way to be able to figure out what you are going to eat.

In this project, you should use JavaScript **objects** and **iterators** to randomly create a three-course meal based on what is available on a menu. We’ll keep running it until we’re satisfied with the generated meal!

1. Add a `_courses` property to the menu object (in `menu.js`) and set its value to an empty object. This property will ultimately contain a mapping between each course and the dishes available to order in that course.

2. Create three properties inside the `_courses` object called `appetizers`, `mains`, and `desserts`. Each one of these should initialize to an empty array.

3. Inside your `menu` object, create a getter method for the `_courses` property. It should return an object that contains key/value pairs for `appetizers`, `mains`, and `desserts`.

4. Inside the `menu` object, we are going to create a method called `.addDishToCourse()` which will be used to add a new dish to the specified course on the menu.

   The method should take in three parameters: the `courseName`, the `dishName`, and the `dishPrice`.

5. The `.addDishToCourse()` method should create an object called dish which has a name and price which it gets from the parameters.

   The method should then push this dish object into the appropriate array in your `menu`‘s `_courses` object based on what `courseName` was passed in.

6. Now, we’re going to need another function which will allow us to get a random dish from a course on the menu, which will be necessary for generating a random meal.

   Create a method inside the `menu` object called `.getRandomDishFromCourse()`. It will take in one parameter which is the `courseName`. As you may already assumed
   1. It should get all dishes from appropriate `courseName` inside `_courses` property
   2. Randomly pick one of them
   3. Return it.

7. Now that we have a way to get a random dish from a course, we can create a `.generateRandomMeal()` function which will automatically generate a three-course meal for us. The function doesn’t need to take any parameters.
   1. The function should create an `appetizer` variable which should be the result of calling the `.getRandomDishFromCourse()` method when we pass in an `appetizers` string to it.
   2. Create a `main` variable and `dessert` variable the same way you created the `appetizer` variable, but make sure to pass in the right course type.
   3. Calculates the total price and returns a string that contains the name of each of the dishes and the total price of the meal, formatted the following way:

   ```
     {
       dishes: ["APPETIZER_NAME", "MAIN_NAME", "DESSERT_NAME"],
       total: "$TOTAL_PRICE"
     }
   ```

8. Now that we’ve finished our menu, object, let’s use it to create a `menu` by adding some `appetizers`, `mains`, and `desserts` with the `.addDishToCourse()` function.

   Inside `index.js` add at least 3 dishes to each course (or more if you like!).

9. Once your menu has items inside it, generate a meal by using the `.generateRandomMeal()` function on your menu, and save it to a variable called `meal`. Lastly, print out your `meal` variable to see what meal was generated for you. You can do so by running `node index` in the terminal.
