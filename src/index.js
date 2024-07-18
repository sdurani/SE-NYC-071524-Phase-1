const burgers = [
    {
        name: "Flatburger",
        image: "./assets/food/flatburger.jpeg",
        description: "Our signature Flatburger which is a super delicious cheeseburger that'll leave you wanting another Flatburger! It's too good to be true!"
    },
    {
        name: "Maple Bacon Burger",
        image: "./assets/food/maple-bacon-burger.jpeg",
        description: "A great option for a breakfast burger or a great option for brunch if you're hungry enough to eat 2 of these burgers!"
    },
    {
        name: "Mushroom Burger",
        image: "./assets/food/mushroom-burger.webp",
        description: "A mushroom burger with our exclusive Flatburger melted cheese!"
    },
    {
        name: "Avocado Bun Burger",
        image: "./assets/food/avocado-bun-burger.jpeg",
        description: "A healthier take on our signature Flatburger but with avocado buns!"
    },
    {
        name: "Ramen Burger",
        image: "./assets/food/ramen-burger.jpeg",
        description: "If you love ramen and burgers, what are you waiting for? Order our exclusive ramen burger now!"
    }
]

const otherFoods = [
    {
        name: "French Fries",
        image: "./assets/food/french-fries.jpeg",
        description: "The good old french fries made in Flatburger style!"
    },
    {
        name: "Burrito",
        image: "./assets/food/burrito.webp",
        description: "A Flatburger style burrito with our exclusive Flatburger melted cheese and any meat of your choosing in addition to your choice of additional ingredients!"
    },
    {
        name: "Taco",
        image: "./assets/food/taco.jpeg",
        description: "The Flatburger exclusive Taco! Get it while supplies last!"
    },
    {
        name: "Hot Dog",
        image: "./assets/food/hot-dog.jpeg",
        description: "The Flatburger exclusive Hot Dog! Get it while supplies last!"
    },
    {
        name: "Onion Rings",
        image: "./assets/food/onion-rings.jpeg",
        description: "The Flatburger exclusive Onion Rings! Get them while supplies last!"
    }
]

// Example code
const restaurantMenu = document.getElementById('restaurant-menu');
restaurantMenu.textContent = "Hello Flatiron!";
console.log(restaurantMenu);

const detailImage = document.querySelector('.detail-image');
console.log(detailImage);
detailImage.id = "displayed-image";
console.log(document.querySelector('#displayed-image'));

// Using the setAttribute() method to create a new attribute for an element and assign a value to the new attribute
detailImage.setAttribute('hello-world', 'hi');
console.log(detailImage);

const divElements = document.querySelectorAll('div');
console.log(divElements);
// console.log(divElements[0]);
// console.log(divElements[1]);

// divElements.forEach(divElement => {
//     console.log(divElement);
// });

for(const divElement of divElements){
    // console.log(divElement.textContent = "<span>Good\nmorning!</span>");
    // console.log(divElement.innerText = "<span>Good\nmorning!</span>");
    console.log(divElement.innerHTML = "<span>Good\nmorning!</span>");
}

const h1Element = document.createElement('h1');
h1Element.textContent = "Flatburgers are the best!";
h1Element.className = "flatburger";
console.log(h1Element);
// document.body.appendChild(h1Element);
// document.body.append(h1Element);

restaurantMenu.appendChild(h1Element);
// restaurantMenu.append("Good afternoon!");
// restaurantMenu.textContent = "I love ice cream!";
// const programmingLanguage = "JavaScript";
// restaurantMenu.innerHTML = `<h1>${programmingLanguage} is my favorite language!</h1>`

const descriptionDisplay = document.getElementById('description-display');
descriptionDisplay.remove();
console.log(descriptionDisplay);
const flatburgerH3Element = document.querySelector('header h3');
flatburgerH3Element.appendChild(descriptionDisplay);
console.log(flatburgerH3Element);

const h2Element = document.createElement('h2');
h2Element.textContent = "I love Flatburgers!";
h2Element.className = "flatburger";
restaurantMenu.appendChild(h2Element);

const flatburgerTextElements = document.getElementsByClassName('flatburger');
console.log(flatburgerTextElements);

console.log('hello')

// for(let index = 0; index < flatburgerTextElements.length; index++){
//     console.log(flatburgerTextElements[index]);
// }

for(const element of flatburgerTextElements){
    element.style = "color: red";
}