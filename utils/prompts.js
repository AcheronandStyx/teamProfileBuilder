
// inquirer prompts to start the process and create a manager for the team

// How to use string literal in an inquirer prompt, like use the employees name in follow up questions?
const createManager = [
    {
        type: 'input',
        name: 'employeeName',
        message: 'What is their name?',
        validate: nameInpout => {
            if (nameInpout) {
                return true;
            } else {
                console.log('Please enter their name!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'id',
        message: 'What is their Employee ID?',
        validate: idInput => {
            if (idInput) {
                return true;
            } else {
                console.log('Please enter their employee ID!');
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is their email address?',
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log('Please enter their email address!');
            }
        }
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: 'What is the managers office number?', // This only gets asked once when a manager is created
        validate: officeNumberInput => {
            if (officeNumberInput) {
                return true;
            } else {
                console.log('Please enter their office number');
            }
        }
    }
];

const createEmployee = [
    {
        type: 'list',
        name: 'confirmTeam',
        message: 'Would you like to add a team member or finalize the team?',
        choices: ['Add an engineer', 'Add an intern', 'Finalize Team']
    },
    {
        type: 'input',
        name: 'employeeName',
        message: 'What is the employees name?',
        validate: nameInpout => {
            if (nameInpout) {
                return true;
            } else {
                console.log('Please enter their name!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'id',
        message: 'What is their Employee ID?',
        validate: idInput => {
            if (idInput) {
                return true;
            } else {
                console.log('Please enter their employee ID!');
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is their email address?',
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log('Please enter their email address!'); // Make a seperate function to validate an email address was entered??? Regex  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
            }
        },/*
        validate: answer => {
            const emailValidate = '/^[^\s@]+@[^\s@]+\.[^\s@]+$/';
            console.log(emailValidate.match(answer)); 
            if(emailValidate.match(answer)) {
                return true 
            }else {
            return  "Please provide a valid email address!"; 
            }
        }*/
    },
    {
        type: 'input',
        name: 'gitHub',
        message: 'What is the Engineers GitHub username?',
        when(answers) { // only ask if new employee is an Engineer.
            return answers.confirmTeam === 'Add an engineer'
        },
        validate: gitHubInput => {
            if (gitHubInput) {
                return true;
            } else {
                console.log('Please enter their GitHub uesername!');
            }
        }
    },
    {
        type: 'input',
        name: 'school',
        message: 'What school does the Intern go to?',
        when(answers) { // only ask if new employee is an Intern.
            return answers.confirmTeam === 'Add an intern'
        },
        validate: schoolInput => {
            if (schoolInput) {
                return true;
            } else {
                console.log('Please enter the interns school!');
            }
        }
    }
];


module.exports = { createManager, createEmployee };
