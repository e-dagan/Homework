// Assignment 6-1

const aurora = {
    name: "aurora",
    health: "125",
    strength: "5",
    xp: "45",
    };
    
    console.log(`${aurora.name} has ${aurora.health} health points and ${aurora.strength} as strength. Also level ${aurora.xp} exp`);


//  Exercise 6-2 Modeling a dog

const dog = {
    name_dog: "Fluffy",
    species: "poodle",
    size: "60",
    bark: "ARFF",
    };

console.log(`${dog.name_dog} is a ${dog.species} dog measuring ${dog.size}`);
console.log(`Look, a cat! ${dog.name_dog} barks: ${dog.bark}`);


// Ch 7

const musketeers = ["Athos", "Porthos", "Aramis"];
console.log(musketeers[3]); 

// • Shows each array element using a for loop.
for (let i = 0; i < musketeers.length; i++) {
    console.log(musketeers[i]);
    }
    // • Adds the “D’Artagnan” value to the array.
    musketeers.push("D'Artagnan");
    console.log(musketeers[3]);

    // Shows each array element using the forEach() method
const musketeers2 = ["Athos", "Porthos", "Aramis"];
musketeers2.forEach(musketeers2 => {
console.log(musketeers2);
});

// Removing Aramis
const musketeers3 = ["Athos", "Porthos", "Aramis"];
musketeers3.splice(2, 1); // Remove 1 element starting at index 0
console.log(musketeers3.length); // 2
console.log(musketeers3[0]); // "Zootopia"
console.log(musketeers3[1]); // "Babysitting"

// • Shows each array element using a for-of loop.



// const musketeers4 = ["Athos", "Porthos", "Aramis"];
// for (const musketeers4 of musketeers4) {
// console.log(musketeers4);
// }


// Sum of Values
// const values = [3, 11, 7, 2, 9, 10];
// console.log(values.sum)


function findSum(){
    let sum = 0;
    let values = [3, 11, 7, 2, 9, 10];
    

    for (i=0;i<values.length;i++){
        sum += values[i];
    }
    console.log (sum);
}

// Chapter 8

// Word Info

    console.log("WORD LENGTH: ", word.length);

let word = String(prompt("Emter a word: "));
console.log("LENGTH:", word.length);
console.log("LOWER:",word.toLowerCase());
console.log("UPPER:",word.toUpperCase());


const nameArray = Array.from(word);
nameArray.reverse();
let reversed = nameArray.toString();
const withoutCommas = reversed.replace(/,/g, '');
console.log("REVERSED:", withoutCommas);