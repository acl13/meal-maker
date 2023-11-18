const menu = {
    courses: {
        appetizers: [],
        mains: [],
        desserts: [],
    },
    addDishToCourse: function(courseName, dishName, dishPrice) {
        let dish = {
            name: dishName,
            price: dishPrice,
        }

        if (courseName == "appetizers") {
            this.courses.appetizers.push(dish);
        } else if (courseName == "mains") {
            this.courses.mains.push(dish);
        }  else if (courseName == "desserts") {
           this.courses.desserts.push(dish);
        }
    },
    getRandomDishFromCourse: function(courseName) {
        if (courseName == "appetizers") {
            randomNumber = Math.floor(Math.random() * this.courses.appetizers.length);
            return this.courses.appetizers[randomNumber];
        } else if (courseName == "mains") {
            randomNumber = Math.floor(Math.random() * this.courses.mains.length);
            return this.courses.mains[randomNumber];
        } else if (courseName == "desserts") {
            randomNumber = Math.floor(Math.random() * this.courses.desserts.length);
            return this.courses.desserts[randomNumber];
        }
    }, 
    generateRandomMeal: function() {
        let appetizer = this.getRandomDishFromCourse("appetizers");
        let main = this.getRandomDishFromCourse("mains");
        let dessert = this.getRandomDishFromCourse("desserts");
        let price = +appetizer.price + +main.price + +dessert.price;
        return `Appetizer: ${appetizer.name}, Main Course: ${main.name}, Dessert: ${dessert.name}, Total Price: ${price}`;

    } 
};



menu.addDishToCourse("appetizers", "nachos", "5.99");
menu.addDishToCourse("appetizers", "mozzarella sticks", "4.99");
menu.addDishToCourse("appetizers", "wings", "7.99");
menu.addDishToCourse("mains", "burger", "14.99");
menu.addDishToCourse("mains", "chicken", "12.99");
menu.addDishToCourse("mains", "steak", "26.99");
menu.addDishToCourse("desserts", "chocolate cake", "6.99");
menu.addDishToCourse("desserts", "cheesecake", "7.99");
menu.addDishToCourse("desserts", "ice cream", "3.99");


meal = menu.generateRandomMeal();
console.log(meal);

//console.log(menu);

