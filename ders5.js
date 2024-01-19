const user = {
    name: 'John',
    surname: 'Doe',
    age: 19,
    info : {
        school: 'X School',
        id: 10
    }
}

const firstName = user.name;
/* OR
const {name : firstName} = user;
*/

console.log(firstName); // John

const spec_Id = user.info.id;
/*OR
const {id : spec_Id} = user.info;
*/

// to add salary key to user object
const {age, salary=123455 } = user;


const {name , ...rest} = user;  //rest operator

console.log(rest);  //all except name key of user object

//more explanation in the freeCodeCamp
//look at the code done at class. How to differ carName and name 


const forPost = {...user}
console.log(forPost);   //everything copied from user object (we can write anything instead of 'rest')




const car = {
    name : 'BMW',
    color : 'red',
    year : 2019
}

const {name : carName, ...rest2} = car;

const forSend = {
    ...user,
    carname: carName,
    ...rest2
}


const clone = {...user}; // Creates a copy

console.log(clone === user); // Output:false,cuz === operator checks if these 2 reference the exact same object,different objects in memory