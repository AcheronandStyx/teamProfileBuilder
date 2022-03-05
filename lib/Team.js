/*
    Questions for Namita
    How do you validate the employees role and ask the appropriate questions?
    Can I use one array of inquirer questions and use the role as as switch? Override 
*/

const inquirer = require('inquirer');
// const generateHtml = require("./team-page-template.js"); // decide where to put this
const Manager = require('./Manager.js');
const Engineer = require('./Engineer.js');
const Intern = require('./Intern.js');
const { createEmployee, createNonManger } = require('../utils/prompts.js');

function Team() {
    this.members = []; // initialize empty array to house the team
};

Team.prototype.buildTeam = function () {
    managerQueries = createEmployee; // copies array exactly?
    // Can I push an inquirer question object like this? Team.js line 20
    managerQueries.push({
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
    });

    // run manager queries -> desctrcuture the created object ->  create new Manager and pass in desctrutered values -> push manager into members[] at index 0
    inquirer
    .prompt(managerQueries)
    .then(({employeeName, id, email, officeNumber}) => {
        manager = new Manager(employeeName, id, email, officeNumber);
        this.members.push(manager);
        console.log(this.members[0]); // successsfully creates the manager and pushes it into the array
    }).then(this.addTeamMember());

    // manager = inquirer.prompt(managerQueries);
    //console.log(members[0]);
    // .then(this.members.push(manager)).then(console.log("Added Mgr succesfully", this.members));
    // Create a manager object and push it into the 0 index of the array
    // this.members.push(manager);
    //console.log("Added Mgr succesfully", this.members); 
    //add Team Member
    
    /*
    if this.confirmTeam ==='Complete the Page'

    loop to call addTeamMemebr nased on the last response 

    loop to create the team card by card feeding in an object at time
    */
};

Team.prototype.addTeamMember = function () {
    employeeQueries = createEmployee.concat(createNonManger); // concatenate the two arrays

    inquirer
    .prompt(employeeQueries)
    .then(
        if(answers.)
    ).then();

    /*
    In the week 9 module an inquirer prompt would call itself if add a new project was selected.
    Does that need to be its own prototype?

    From week 9 module
    .then(projectData => { // push the created portfolio into the projects array
        portfolioData.projects.push(projectData);
        // check users answer to add more.
        if (projectData.confirmAddProject) {
            return promptProject(portfolioData); // recursively call promptProject if yes
        } else {
            return portfolioData; // return the array if no
        }
    });
    */
};

/*
const createManger = () => {
    console.log(`
    =====================
    Adding a Team Manager
    =====================
    `)

}

const createTeam = teamData => {
    console.log(`
    =====================
    Adding a New Team Member
    =====================
    `);

};
*/
module.exports = Team;