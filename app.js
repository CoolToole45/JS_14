// Task 1:

const numArray = [1, 2, 3, 4, 5];
console.log("Method 1: ", numArray[0] + numArray[1] + numArray[2] + numArray[3] + numArray[4])

// Or we can use "for"

arraySum = 0;

for (let i = 0; i < numArray.length; i++){
    arraySum += numArray[i];
}

console.log("Method 2: ", arraySum);


// Task 2:

let userInfo1 = {name: "John", age: 26, adress: "(insert_streat_name_here_1)"};
let userInfo2 = {name: "Bob", age: 14, adress: "(insert_streat_name_here_2)"};
let userInfo3 = {name: "Garry", age: 47, adress: "(insert_streat_name_here_3)"};

const objArray = [userInfo1, userInfo2, userInfo3];


// Task 3:

// Concatenation with "+" operator
console.log("My name is " + userInfo1.name + " I am " + userInfo1.age + " years old and I live on the " + userInfo1.adress + " street." );

// Concatenation with "backticks"
console.log(`My name is ${userInfo2.name} I am ${userInfo2.age} years old and I live on the ${userInfo2.adress} street.`);

console.log("My name is", userInfo3.name, "I am", userInfo3.age, "years old and I live on the", userInfo3.adress, "street." );


// Task 4:

if (userInfo1.age < 19) {
    console.log("I am a teenager");
}else {
    console.log("I am an adult");
}

if (userInfo2.age < 19) {
    console.log("I am a teenager");
}else {
    console.log("I am an adult");
}

if (userInfo3.age < 19) {
    console.log("I am a teenager");
}else {
    console.log("I am an adult");
}