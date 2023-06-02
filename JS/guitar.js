
//module

/* making a module by making a few functions */

//We can export function in a number of ways, first is through the inline method, in this method we will use the keyword function if the it is the export default
export default function playGuitar () {
    return "playing guitar";
};


//as for the rest of the export we simply add export at the beginning
export const shredding = () =>{
    return "shredding some licks";
};

export const plucking = () =>{
    return "plucking the strings";
};

export const playGuitarA = () =>{
    return "playing guitar A!";
};

export const playGuitarB = () =>{
    return "playing guitar B!";
};

export const playGuitarC = () =>{
    return "playing guitar C!";
};

export const playGuitarD = () =>{
    return "playing guitar D!";
};

export const playGuitarE = () =>{
    return "playing guitar E!";
};

/* Exporting this functions for use to another javascript file */

//Every module can have one default module

//export default playGuitar; 
//we will be exporting the playGuitar function

/* We can also export other functions */
//export {shredding,plucking};


/* After exporting our main function lets now go ahead and import the functions into our main js file */