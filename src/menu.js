export default function menuPage() {
    const container = document.querySelector('#content');
    const foodMenu = document.createElement('div');
    foodMenu.id = "foodMenu";
    function createMenuItems(img, name, price, description) {
        const foodContainer = document.createElement('div');
        const foodDetails = document.createElement('div');
        const foodImage = document.createElement('img');
        const foodName = document.createElement('h3');
        const foodPrice = document.createElement('h3');
        const foodDescription = document.createElement('span');
        foodName.textContent = name;
        foodPrice.textContent = price;
        foodDescription.textContent = description;
        foodImage.src = img;
        //name for the elements 
        foodImage.id = 'image';
        foodName.id = 'foodName';
        foodPrice.id = `foodPrice`;
        foodContainer.id = 'foodContainer'
        foodDescription.id = 'foodDescription'
        foodDetails.id = 'foodDetails'
        // append the items to container
        foodDetails.append(foodName, foodPrice, foodDescription);
        foodContainer.append(foodImage, foodDetails);
        foodMenu.append(foodContainer);
        return foodMenu;
    }

    const menuItem = createMenuItems('https://sultanbadri.github.io/restaurant-page/images/hamburger.png', 'Hamburger', `$2.49`, `Buns, patty, tomato, onions, lettuce, and our secret family recipe`);
    const menuItem1 = createMenuItems('https://sultanbadri.github.io/restaurant-page/images/cheeseburger.png', 'Cheeseburger', `$2.99`, `Buns, patty, tomato, onions, lettuce, and our secret family recipe,cheese`);
    const menuItem2 = createMenuItems('https://sultanbadri.github.io/restaurant-page/images/double-cheeseburger.png', 'Double Cheese', `$3.99`, `Buns, patty, tomato, onions, lettuce, and our secret family recipe, but with an extra patty and cheese.`);
    const menuItem3 = createMenuItems('https://sultanbadri.github.io/restaurant-page/images/steak.png', 'Steak', `$11.99`, `A juicy steak made just`);
    const menuItem4 = createMenuItems('https://sultanbadri.github.io/restaurant-page/images/ribs.png', 'BBQ Ribs', `$8.99`, `Barbecue ribs with your choice of a add-ons.`);
    const menuItem5 = createMenuItems('https://sultanbadri.github.io/restaurant-page/images/caesar-salad.png', 'Caesar Salad', `$4.99`, `Your typical caesar salad that comes with your choice of dressings.`);
    const menuItem6 = createMenuItems('https://sultanbadri.github.io/restaurant-page/images/grilled-cheese.png', 'Grilled Cheese Sandwich', `$4.99`, `A toasted and grilled cheese sandwich, dipped in our special sauce.`);
    const menuItem7 = createMenuItems('https://sultanbadri.github.io/restaurant-page/images/french-fries.png', 'French Fries', `$4.99`, `Sometimes you don't want to eat your burger alone, why not add some french fries?`);
    container.append(menuItem, menuItem1, menuItem2, menuItem3, menuItem4, menuItem5, menuItem6, menuItem7);
}

