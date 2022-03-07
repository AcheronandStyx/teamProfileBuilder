const Team = require('./lib/Team');
const Manager = require('./lib/Manager.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');
const fs = require('fs'); // import fs library
const { createManager, createEmployee } = require('./utils/prompts.js');

const myTeam = new Team();

console.log(`
Welcome to Team Profile Builder! Please answer some questions about your development team.
    `);



myTeam.addManager(createManager) // return inquirer data from addManager -> parse into Manager object -> push into array teamMembers
.then(({ employeeName, id, email, officeNumber }) => {
    const manager = new Manager(employeeName, id, email, officeNumber);
    myTeam.teamMembers.push(manager);
})
.then( () => {
    myTeam.addTeamMembers(createEmployee, myTeam.teamData)

})
