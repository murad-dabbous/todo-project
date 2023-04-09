let username = prompt('Enter your name');
let gender = prompt('Enter your gender (male / female) ');
let age = prompt('Enter your age');

if (age <= 0) {
    alert('The age cannot be less or equal to zero ')
}
let text = 'Do you want to skip the welcoming message?';
if (confirm(text) == false) {
    if (gender === 'male') {
        alert(`Welcome Mr. ${username}`);
    }
    else if (gender === 'female') {
        alert(`Welcome Ms. ${username}`);
    }
    else {
        alert(`Welcome ${username}`);
    }
}
