// lev1_1: Array sort()
let languages = [
    "JavaScript",
    "Python",
    "Java",
    "Ruby",
    "PHP",
    "C++",
    "CSS",
    "C#",
    "Go",
    "C",
    "TypeScript",
    "Swift"
];
// languages.sort();
// // console.log(languages);

// sortierung = () => {
//     console.log(languages);
// }
// sortierung();



// lev1_2: Array reverse()

// languages.sort().reverse();
// console.log(languages);

// sortierung2 = () => {
//     console.log(languages)
// }
// sortierung2();




// lev1_13: Arrays join()

let meinText1 = ["Hello", "World"];
// console.log(meinText1.join());
let meinText2 = ["Anass", "Elaine", "Eric", "Georg"];

let meinText3 = ["Superman", "Wonderwoman", "Hulk", "Batman", "Spiderman"];


// let join1 = meinText1.join();
// let join2 = meinText1.join("");
// let join3 = meinText1.join(" ");
// let join4 = meinText1.join("+");

// let join1 = meinText2.join();
// let join2 = meinText2.join("");
// let join3 = meinText2.join(" ");
// let join4 = meinText2.join("+");

let join1 = meinText3.join();
let join2 = meinText3.join("");
let join3 = meinText3.join(" ");
let join4 = meinText3.join("+");

// console.log(join1);
// console.log(join2);
// console.log(join3);
// console.log(join4);



// lev2_2: sort() bigger numbers

// Sort an array of numbers based on numerical value.
// let numArray2 = [36, 324, 122, 62, 98, 88, 99, 1000];
// console.log(numArray2);

// let sortednumbers = numArray2.sort((a, b) => a - b);


// -----------------------lev1_1: forEach()-----------------------------------------

// 

// let getraenke = [
//     "Coca-Cola",
//     "Apfelsaft",
//     "Pepsi",
//     "Traubensaft",
//     "Sprite",
//     "Orangensaft",
//     "Red Bull Energy Drink",
//     "Fanta"
// ]

// let myDrinks = getraenke.sort();
// console.log(myDrinks);



// myDrinks.forEach(element => {
//     console.log(element);
//     document.write(element + '<ul></ul>');

// }

// );




// lev1_2: map()


let getraenke = [
    "Coca-Cola",
    "Apfelsaft",
    "Pepsi",
    "Traubensaft",
    "Sprite",
    "Orangensaft",
    "Red Bull Energy Drink",
    "Fanta"
]



let upperDrinks = getraenke.map(element => {
    return element.toUpperCase();
})

console.log(upperDrinks);


// lev1_3: map()
// Schreibe eine Funktion, die jeden Wert aus dem Array (siehe Kommentarbereich) mit 2 multipliziert und das Ergebnis sortiert.

let array = [
    18,
    16,
    80,
    51,
    47,
    38,
    95,
    42,
    68,
    61,
    34,
    51,
    20,
    17,
    56,
    31,
    100,
    6,
    5,
    30,
    74,
    97,
    28,
    99,
    91,
    27,
    73,
    12,
    92,
    6,
    27,
    71,
    26,
    15,
    78
];
console.log(array);

let array2 = array.map((element) => {
    return (element * 2)
});
console.log(array2.sort());
// let array3 = array2.sort();
// console.log(array3);





// lev1_4: map()


// Schreibe eine Funktion, mit Hilfe von map(), die jede Temperatur in einem Array von Fahrenheit in Celsius umwandelt.


// formel (32 °F − 32) × 5/9 = 0 °C

let fahrenheit = [0, 32, 45, 50, 75, 80, 99, 120];
let formel = (fahrenheit - 32) * (5 / 9);



let toCelsius = fahrenheit.map((element) => {
    return element - ((32) * (5 / 9)).toFixed();
})

console.log(toCelsius);


