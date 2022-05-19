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
let numArray2 = [36, 324, 122, 62, 98, 88, 99, 1000];
console.log(numArray2);

let sortednumbers = numArray2.sort((a, b) => a - b);


