// Complete the below questions using this array:
const array = [
  {
    username: "john",
    team: "red",
    score: 5,
    items: ["ball", "book", "pen"]
  },
  {
    username: "becky",
    team: "blue",
    score: 10,
    items: ["tape", "backpack", "pen"]
  },
  {
    username: "susy",
    team: "red",
    score: 55,
    items: ["ball", "eraser", "pen"]
  },
  {
    username: "tyson",
    team: "green",
    score: 1,
    items: ["book", "pen"]
  },

];

//Create an array using forEach that has all the usernames with a "!" to each of the usernames

const arrayEx = array.map(i => i.username+"!");

//Create an array using map that has all the usernames with a "? to each of the usernames
let arrayQue = [];
function addQue(element){
  let {username} = element;
  arrayQue.push(username + "?");
}
array.forEach(addQue);

//Filter the array to only include users who are on team: red

const arrayRed = array.filter(redCheck => redCheck.team == "red");

//Find out the total score of all users using reduce

const arrayScore = array.reduce(function(sum,currVal){
 return sum + currVal.score;
},0);

console.log(`The total score is ${arrayScore}`);

// (1), what is the value of i?
// (2), Make this map function pure:
const arrayNum = [1, 2, 4, 5, 8, 9];
const newArray = arrayNum.map(num => num * 2);

//BONUS: create a new list with all user information, but add "!" to the end of each items they own.
const array = [
  {
    username: "john",
    team: "red",
    score: 5,
    items: ["ball", "book", "pen"]
  },
  {
    username: "becky",
    team: "blue",
    score: 10,
    items: ["tape", "backpack", "pen"]
  },
  {
    username: "susy",
    team: "red",
    score: 55,
    items: ["ball", "eraser", "pen"]
  },
  {
    username: "tyson",
    team: "green",
    score: 1,
    items: ["book", "pen"]
  },

];

// array.forEach(element => console.log(element)); Outputs User Objects
// array.forEach(element => console.log(element.items)); Outputs User object items object

let bonusArray = [];

function itemFix(user){
  bonusArray.push(user.username);
  bonusArray.push(user.team);
  bonusArray.push(user.score);
  bonusArray.push(user.items.map(i=>i+"!"));
}

array.forEach(itemFix);

const answer = array.map(user => {
  user.items = user.items.map(item => {
    return item + "!";
  });
  return user;
})