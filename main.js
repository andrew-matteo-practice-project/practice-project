"use strict";
alert(`Hello to our Cheese App`)
const cheeses = [
    {
        "name": "Cheddar",
        "type": "hard",
        "country_of_origin": "United Kingdom"
    },
    {
        "name": "Brie",
        "type": "soft",
        "country_of_origin": "France"
    },
    {
        "name": "Gouda",
        "type": "semi-hard",
        "country_of_origin": "Netherlands"
    },
    {
        "name": "Parmesan",
        "type": "hard",
        "country_of_origin": "Italy"
    },
    {
        "name": "Roquefort",
        "type": "blue",
        "country_of_origin": "France"
    },
    {
        "name": "Camembert",
        "type": "soft",
        "country_of_origin": "France"
    },
    {
        "name": "Manchego",
        "type": "semi-hard",
        "country_of_origin": "Spain"
    },
    {
        "name": "Gruyère",
        "type": "hard",
        "country_of_origin": "Switzerland"
    },
    {
        "name": "Provolone",
        "type": "semi-hard",
        "country_of_origin": "Italy"
    },
    {
        "name": "Mozzarella",
        "type": "soft",
        "country_of_origin": "Italy"
    },
    {
        "name": "Monterey Jack",
        "type": "semi-hard",
        "country_of_origin": "United States"
    },
    {
        "name": "Feta",
        "type": "soft",
        "country_of_origin": "Greece"
    },
    {
        "name": "Edam",
        "type": "semi-hard",
        "country_of_origin": "Netherlands"
    },
    {
        "name": "Colby",
        "type": "semi-hard",
        "country_of_origin": "United States"
    },
    {
        "name": "Gorgonzola",
        "type": "blue",
        "country_of_origin": "Italy"
    },
    {
        "name": "Havarti",
        "type": "semi-soft",
        "country_of_origin": "Denmark"
    },
    {
        "name": "Swiss",
        "type": "hard",
        "country_of_origin": "Switzerland"
    },
    {
        "name": "Pepper Jack",
        "type": "semi-soft",
        "country_of_origin": "United States"
    },
    {
        "name": "Stilton",
        "type": "blue",
        "country_of_origin": "United Kingdom"
    },
    {
        "name": "Asiago",
        "type": "semi-hard",
        "country_of_origin": "Italy"
    },
    {
        "name": "Cambozola",
        "type": "blue",
        "country_of_origin": "Germany"
    },
    {
        "name": "Fontina",
        "type": "semi-soft",
        "country_of_origin": "Italy"
    },
    {
        "name": "Limburger",
        "type": "semi-soft",
        "country_of_origin": "Germany"
    },
    {
        "name": "Jarlsberg",
        "type": "semi-hard",
        "country_of_origin": "Norway"
    },
    {
        "name": "Danish Blue",
        "type": "blue",
        "country_of_origin": "Denmark"
    },
    {
        "name": "Munster",
        "type": "semi-soft",
        "country_of_origin": "France"
    },
    {
        "name": "Blue Castello",
        "type": "blue",
        "country_of_origin": "Denmark"
    },
    {
        "name": "Brick",
        "type": "semi-soft",
        "country_of_origin": "United States"
    },
    {
        "name": "Ricotta",
        "type": "soft",
        "country_of_origin": "Italy"
    },
    {
        "name": "Queso Fresco",
        "type": "soft",
        "country_of_origin": "Mexico"
    },
    {
        "name": "Cotija",
        "type": "hard",
        "country_of_origin": "Mexico"
    },
    {
        "name": "Wensleydale",
        "type": "hard",
        "country_of_origin": "United Kingdom"
    },
    {
        "name": "Emmental",
        "type": "hard",
        "country_of_origin": "Switzerland"
    },
    {
        "name": "Double Gloucester",
        "type": "hard",
        "country_of_origin": "United Kingdom"
    },
    {
        "name": "Cabrales",
        "type": "blue",
        "country_of_origin": "Spain"
    },
    {
        "name": "Pecorino Romano",
        "type": "hard",
        "country_of_origin": "Italy"
    },
    {
        "name": "Red Leicester",
        "type": "hard",
        "country_of_origin": "United Kingdom"
    },
    {
        "name": "Caerphilly",
        "type": "semi-hard",
        "country_of_origin": "United Kingdom"
    },
    {
        "name": "Wensleydale with Cranberries",
        "type": "hard",
        "country_of_origin": "United Kingdom"
    },
    {
        "name": "Stichelton",
        "type": "blue",
        "country_of_origin": "United Kingdom"
    },
    {
        "name": "Halloumi",
        "type": "semi-soft",
        "country_of_origin": "Cyprus"
    },
    {
        "name": "Sbrinz",
        "type": "hard",
        "country_of_origin": "Switzerland"
    },
    {
        "name": "Manouri",
        "type": "soft",
        "country_of_origin": "Greece"
    },
    {
        "name": "Taleggio",
        "type": "semi-soft",
        "country_of_origin": "Italy"
    },
    {
        "name": "Cashel Blue",
        "type": "blue",
        "country_of_origin": "Ireland"
    }
];
function filterCheeses() {
    let userInput = prompt('Would you like to search for either name, type or country of the cheese');
    if (userInput !== 'name' && userInput !== 'country' && userInput !== 'type') {
        alert('Invalid input. Please enter either "name" or "country".');
        return;
    }
    if (userInput === `name`) {
        let nameCheese = prompt(`What is the name of the Cheese?`)
        for (let i = 0; i < cheeses.length; i++) {
            if (nameCheese === cheeses[i].name) {
                alert(`You're cheese is ${}`)
            }

        }
    } else if (userInput === `country`) {
        let countryCheese = prompt(`What is the Cheese's country`)
        for (let i = 0; i < cheeses.length; i++) {

            i++
            console.log(cheeses.hasOwnProperty(userInput));
        }
    }
}

filterCheeses();