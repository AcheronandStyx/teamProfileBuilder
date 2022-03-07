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
const { createManager, createEmployee } = require('../utils/prompts.js');

function Team() {
    this.teamData = [];
    this.members = [];
};

Team.prototype.addManager = function (prompts) {
    // this.members.push(inquirer.prompt(prompts));
    // console.log(this.members);

    console.log(`
    =====================
      Add a Team Manager
    =====================
    `);


    return inquirer.prompt(prompts);
    /*inquirer.prompt(prompts).then(manager => {
        return manager;
    });*/
};

Team.prototype.addTeamMembers = function (prompts, teamArray) {



    const teamData = teamArray;
    if (teamData[0] === null) {
        console.log(`
        =====================
        Add Your Team Members
        =====================
        `)
    
    }
    // console.log(teamMates);
    // console.log('line 33 Team.js\n', this.members);
    inquirer
        .prompt(prompts)
        .then(newEmployee => {
            // console.log(teamMates);
            teamData.push(newEmployee);
            // console.log(teamData);
            if (!newEmployee.confirmTeam) {
                // console.log('line 39', teamMates);
                //console.log(teamData);
                // confirmTeam: false is being pushed into the array, not sure why accoutn for it later
                const parsedTeam = this.parseTeamData(teamData);

                return parsedTeam;
            } else {
                return this.addTeamMembers(createEmployee, teamData);
            }

        })
};

Team.prototype.parseTeamData = function (teamData) {

    // for loop -> destrcuture one object from teamData -> use parsed data to create new Engineer or Intern
    // terminate loop at length - 1 because the final index is just a boolean to trigger the end of team creation
    for (i = 0; i < teamData.length - 1; i++) {
        if(teamData[i].position === 'Engineer') { 
            const { confirmTeam, position, employeeName, id, email, gitHub } = teamData[i];
            const engineer = new Engineer( employeeName, id, email, gitHub );
            this.members.push(engineer);

        } else {
            const { confirmTeam, position, employeeName, id, email, school } = teamData[i];
            const intern = new Intern( employeeName, id, email, school );
            this.members.push(intern);
        }
    };
    this.buildTeam();

};

Team.prototype.buildTeam = function() {

    console.log(`
    Building your team page.
    `);
    console.log(this.members);
    
}

module.exports = Team;