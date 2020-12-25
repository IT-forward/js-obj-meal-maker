import menu from "./menu.js";

describe("menu object", () => {
  describe("_courses property", () => {
    it("exists", () => {
      expect(menu.hasOwnProperty("_courses")).toBe(true);
    });

    it("has properties appetizers, mains and desserts which are array type", () => {
      expect(Array.isArray(menu._courses?.appetizers)).toBe(true);
      expect(Array.isArray(menu._courses?.mains)).toBe(true);
      expect(Array.isArray(menu._courses?.desserts)).toBe(true);
    });
  });

  describe("courses getter", () => {
    it("exists", () => {
      expect(expect(menu.hasOwnProperty("courses")).toBe(true));
    });

    it("equal to _courses property", () => {
      expect(menu.courses).toEqual(menu._courses);
    });
  });

  describe("addDishToCourse(courseName, dishName, dishPrice)", () => {
    beforeEach(() => {
      menu.courses.appetizers = [];
      menu.courses.mains = [];
      menu.courses.desserts = [];
    });

    it("adds dish to correct course", () => {
      menu.addDishToCourse("appetizers", "Salad", 1);
      expect(menu.courses.appetizers).toHaveLength(1);
    });

    it("adds dish object with 'name' and 'price' properties", () => {
      menu.addDishToCourse("mains", "Baked Honey Mustard Chicken", 16);
      expect(menu.courses.mains).toContainEqual({
        name: "Baked Honey Mustard Chicken",
        price: 16,
      });

      menu.addDishToCourse("mains", "Honey Orange Fish Fillets", 18);
      expect(menu.courses.mains).toContainEqual({
        name: "Honey Orange Fish Fillets",
        price: 18,
      });

      expect(menu.courses.mains).toHaveLength(2);
    });
  });

  describe("getRandomDishFromCourse(courseName)", () => {
    beforeEach(() => {
      menu.addDishToCourse("desserts", "almond cookie", 8);
      menu.addDishToCourse("desserts", "blueberry muffin", 4);
      menu.addDishToCourse("desserts", "cheesecake", 10);
    });

    it("gets random dish from course", () => {
      Array(10)
        .fill(0)
        .forEach((_) => {
          const randomDish = menu.getRandomDishFromCourse("desserts");
          expect(randomDish).toHaveProperty("name");
          expect(randomDish).toHaveProperty("price");
        });
    });
  });

  describe("generateRandomMeal()", () => {
    let meal;

    beforeEach(() => {
      menu.addDishToCourse("appetizers", "Bruschetta", 7);
      menu.addDishToCourse("appetizers", "Fried Calamari", 8);
      menu.addDishToCourse("appetizers", "French Fries", 5);

      menu.addDishToCourse("mains", "Creamy Tomato Pasta", 15);
      menu.addDishToCourse("mains", "Baked Honey Mustard Chicken", 16);
      menu.addDishToCourse("mains", "Honey Orange Fish Fillets", 18);
      menu.addDishToCourse("mains", "Meatball Stew Casserole", 14);

      menu.addDishToCourse("desserts", "almond cookie", 8);
      menu.addDishToCourse("desserts", "blueberry muffin", 4);
      menu.addDishToCourse("desserts", "cheesecake", 10);

      meal = menu.generateRandomMeal();
    });

    it("has dishes and total properties", () => {
      expect(Array.isArray(meal?.dishes)).toBe(true);
      expect(
        meal?.dishes.every((dishName) => typeof dishName === "string")
      ).toBe(true);
      expect(meal?.total).toMatch(/^\$\d+$/);
    });

    it("first dish from appetizers", () => {
      expect(
        menu.courses.appetizers
          .map((dish) => dish.name)
          .includes(meal.dishes[0])
      );
    });

    it("second dish from mains", () => {
      expect(
        menu.courses.mains.map((dish) => dish.name).includes(meal.dishes[1])
      );
    });

    it("third dish from desserts", () => {
      expect(
        menu.courses.desserts.map((dish) => dish.name).includes(meal.dishes[2])
      );
    });

    it("total price is correct", () => {
      const totalNum = Number(meal.total.slice(1));

      const price1 = menu.courses.appetizers.find(
        (dish) => dish.name === meal.dishes[0]
      ).price;
      const price2 = menu.courses.mains.find(
        (dish) => dish.name === meal.dishes[1]
      ).price;
      const price3 = menu.courses.desserts.find(
        (dish) => dish.name === meal.dishes[2]
      ).price;
      expect(totalNum).toBe(price1 + price2 + price3);
    });
  });
});
