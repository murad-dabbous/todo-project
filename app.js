let username = "";
let gender = "";
let age = "";
let isEmployee = "";
let jsLikable = "";
let swimming = "";
let promptArr = [];
const getuserInput = () => {
  username = prompt("Enter your name");
  gender = prompt("Enter your gender (male / female) ");
  age = prompt("Enter your age");
  // Three more questions
  isEmployee = prompt("Are you an employee? (Yes/No) ");
  jsLikable = prompt("Do you like Javascript? (Yes/No)");
  swimming = prompt("Do you like Swimming? (Yes/No)");
};
const validateInput = () => {
  if (username === "") {
    username = "Invalid";
  }
  if (age === "") {
    age = "Invalid";
  }
  if (gender === "") {
    gender = "Invalid";
  }
  if (isEmployee === "") {
    isEmployee = "Invalid";
  }
  if (jsLikable === "") {
    jsLikable = "Invalid";
  }
  if (swimming === "") {
    swimming = "Invalid";
  }
  if (age <= 0) {
    alert("The age cannot be less or equal to zero ");
  }
  let text = "Do you want to skip the welcoming message?";
  if (confirm(text) == false) {
    if (gender === "male") {
      alert(`Welcome Mr. ${username}`);
    } else if (gender === "female") {
      alert(`Welcome Ms. ${username}`);
    } else {
      alert(`Welcome ${username}`);
    }
  } else {
    alert("Welcome");
  }
};
// print out the output
const printResults = () => {
  const answers = [];
  answers.push(username, gender, age, isEmployee, jsLikable, swimming);
  for (let i = 0; i < answers.length; i++) {
    console.log(answers[i]);
  }
};

// call functions
getuserInput();
validateInput();
printResults();
