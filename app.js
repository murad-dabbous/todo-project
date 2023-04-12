const usersAnswers = () => {
    let username = prompt('Enter your name');
    let gender = prompt('Enter your gender (male / female) ');
    let age = prompt('Enter your age');
    // Three more questions
    let isEmployee = prompt('Are you an employee? (Yes/No) ');
    let jsLikable = prompt('Do you like Javascript? (Yes/No)');
    let swimming = prompt('Do you like Swimming? (Yes/No)');
    if (username === '' || gender === '' || age === '' || isEmployee === '' || jsLikable === '') {
        alert('Invalid');
    }

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
    else {
        alert('Welcome');
    }
    const answers = [];
    answers.push(username, gender, age, isEmployee, jsLikable, swimming);
    for (let i = 0; i < answers.length; i++) {
        console.log(answers[i]);
    }
};
document.write(usersAnswers());

