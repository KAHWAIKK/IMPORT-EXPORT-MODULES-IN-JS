//modules

//importing is rather simple, we use the keyword import

import playGuitar from "./guitar.js";
import { shredding, plucking } from "./guitar.js";

console.log(playGuitar());
//console prints playing guitar
console.log(shredding());
//console prints shredding some licks
console.log(plucking());
//console prints plucking the strings 

/* After importing this functions we could rename them */

import playGuitarB from "./guitar.js";
import { shredding as shred, plucking as pluck } from "./guitar.js";

console.log(playGuitarB());
//console prints playing guitar
console.log(shred());
//console prints shredding some licks
console.log(pluck());
//console prints plucking the strings

//We could also import our files using a different way

import * as Guitars from "./guitar.js"//* stands for all

console.log(Guitars.playGuitarC());
//console prints playing guitar C
console.log(Guitars.playGuitarD());
//console prints playing guitar D
console.log(Guitars.playGuitarE());
//console prints playing guitar E

/* However using this technique has its own fair share of challenges, you cant rename the function or the files you are importing while at the same tome you cant use the export default function as shown below*/

//console.log(Guitars.playGuitar());
//console returns playGuitar is not a function

console.log(Guitars.default());

//JAVASCRIPT IMPORT AND EXPORT CLASS

import User from "./user.js";
//creating an instance of the class


//passing in the parameters
const myself = new User("kahwai.com", "Kahwai");

console.log(myself);//console prints ou the User object
/* {
    "_id": "kahwai,com",
    "_name": "Kahwai"
} */
console.log(myself._id);//console prints kahwai.com
console.log(myself._name);//console prints Kahwai

console.log(myself.greeting());//console prints Hi,my name is Kahwai.






