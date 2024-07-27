const user = [
  {
    firstName: "Ayushi",
    age: 21,
  },
  {
    firstName: "Tine",
    age: 80,
  },
  {
    firstName: "John",
    age: 26,
  },
  {
    firstName: "Marriya",
    age: 90,
  },
];

// Get name of users below age 35;

const output = user.reduce(function (acc, curr) {
console.log(acc[curr.age]);

if(curr.age < 35){
    acc.push(curr.firstName);
}

return acc;

},[]);

console.log(output);
