
// inquirer prompts to start the process and create a manager for the team

// How to use string literal in an inquirer prompt, like use the employees name in follow up questions?
const createEmployee = [
    {
        type: 'input',
        name: 'name',
        message: 'What is the team managers name?',
        validate: nameInpout => {
            if (nameInpout) {
                return true;
            } else {
                console.log('Please enter the managers name!');
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
        message: 'What is s their email address?',
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log('Please enter their email address!'); // Make a seperate function to validate an email address was entered??? Regex  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
            }
        },
        validate = (answer) => {
            const emailValidate = '/^[^\s@]+@[^\s@]+\.[^\s@]+$/';
            if(!emailValidate.test(answer)) {
                return "Please provide a valid email address!"
            }
            return true
        }
    }
    
    /*, Pushing this onto array in Team.js line 20
    {
        type: 'input',
        name: 'officeNumber',
        message: 'What is the managers office number?', // This only gets asked once when a manager is created
        validate: officeNumberInput => {
            if (officeNumberInput) {
                return true;
            } else {
                console.log('Please enter their email address!'); // Make a seperate function to validate an email address was entered??? Regex  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
            }
        }
    }*/
];

const createNonManger = [
    {
        type: 'list',
        name: 'confirmTeam',
        message: 'Would you like to add a team member or generate the team page?',
        choices: ['Add a Team Member', 'Complete the Page']
    },
    {
        type: 'list',
        name: 'role',
        message: 'Is the new team member and Enginner or an Intern?',
        choices: ['Engineer', 'Intern'],
        when(answers) {
            return answers.confirmTeam === 'Add a Team Member'
        }
    },
    {
        type: 'input',
        name: 'gitHub',
        message: 'What is the Engineers GitHub username?',
        when(answers) { // only ask if new employee is an Engineer.
            return answers.confirmTeam === 'Engineer'
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
            return answers.confirmTeam === 'Intern'
        },
        validate: schoolInput => {
            if (schoolInput) {
                return true;
            } else {
                console.log('Please enter the interns school');
            }
        }
    }
];


module.exports = {createEmployee, createNonManger};
// separate array for each employee type or one array? I want to use one, not sure on the logic
/*
const generateEmployee = [
    {
        type: 'input',
        name: 'officeNumber',
        message: 'What is the managers office number?', // This only gets asked once when a manager is created
        validate: officeNumberInput => {
            if (officeNumberInput) {
                return true;
            } else {
                console.log('Please enter their email address!'); // Make a seperate function to validate an email address was entered??? Regex  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
            }
        }
    },
    {
        type: 'input',
        name: 'gitHub',
        message: 'What is the Engineers GitHub username?',
        },
    },
    {
        type: 'input',
        name: 'school',
        message: 'What school does the Intern go to?',
        when: ({role === 'intern'}) => { // how do you validate the employees role and ask the appropriate question?
            if (this.role === 'manager') {
                return true;
            } else {
                return false;
            }
        }
        validate: schoolInput => {
            if (schoolInput) {
                return true;
            } else {
                console.log('Please enter the interns school');
            }
        }
    }

];
*/
/*
const generateManger = [
    {
        type: 'input',
        name: 'officeNumber',
        message: 'What is the managers office number?', // This only gets asked once when a manager is created
        validate: officeNumberInput => {
            if (officeNumberInput) {
                return true;
            } else {
                console.log('Please enter their email address!'); // Make a seperate function to validate an email address was entered??? Regex  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
            }
        }
    }
]

const generateEngineer = [
    {
        type: 'input',
        name: 'gitHub',
        message: 'What is the Engineers GitHub username?',
        validate: officeNumberInput => {
            if (officeNumberInput) {
                return true;
            } else {
                console.log('Please enter their email address!');
            }
        }
    }
]

const generateIntern = [
    {
        type: 'input',
        name: 'school',
        message: 'What school does the Intern go to?',
        validate: schoolInput => {
            if (schoolInput) {
                return true;
            } else {
                console.log('Please enter the interns school');
            }
        }
    }

]
*/
