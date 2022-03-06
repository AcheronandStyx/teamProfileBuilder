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

class Team {
    members = []; // initialize empty array to house the team


    buildTeam() {
        console.log(createEmployee);
        // run manager queries -> desctrcuture the created object ->  create new Manager and pass in desctrutered values -> push manager into members[] at index 0
        inquirer
            .prompt(createManager)
            .then(({ employeeName, id, email, officeNumber }) => {
                const manager = new Manager(employeeName, id, email, officeNumber);
                this.members.push(manager);
                console.log(this.members[0]); // successsfully creates the manager and pushes it into the array
            }).then(Team.addNewMember);

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

    static addNewMember() {
        // idea - change inquirer prompts so twop different sets are defined, one for add manager and one for nonmanager
        // pu looping check to see if another teamMember needs to be added into buildTeam -> if finalizeTeam.confrimTeam === 'Finalize Team' then 

        inquirer
            .prompt(createEmployee)
            .then(finalizeTeam => {
                if (finalizeTeam.confrimTeam === 'Finalize Team') {
                    console.log("triggered end of team creation")
                    console.log(finalizeTeam.confrimTeam);
                    return;
                }
            })
            .then(newTeamMate => {
                if (newTeamMate.role === 'Engineer') {
                    ({ employeeName, id, email, gitHub }) => {
                        const engineer = new Engineer(employeeName, id, email, gitHub);
                        this.members.push(engineer);
                    }
                } else {
                    ({ employeeName, id, email, school }) => {
                        const intern = new Intern(employeeName, id, email, school);
                        this.members.push(intern);
                    }
                }
                console.log(this.members);
            })
        //.then(Team.confirmAddMember);
    };
    /*
        static confirmAddMember() {
            //createEmployee.concat(createNonManger); // concatenate the two arrays
    
            // console.log(employeeQueries);
    
            console.log(Team.addNewMember);
    
            inquirer
                .prompt(confirmAddMember)
                .then(function (finalizeTeam) {
                    if (finalizeTeam.confrimTeam === 'Complete the Page') {
                        return;
                        generatePage();
                    } else {
    
                        Team.addNewMember();
    
                    }
                })
    */
    /*
    .prompt(employeeQueries)
    .then(addNewMember => {
        if (answers.role === 'Engineer') {
            employeeName, id, email, gitHub => {
                engineer = new Engineer(employeeName, id, email, gitHub);
                this.members.push(engineer);
            }
        } else {
            employeeName, id, email, school => {
                intern = new Engineer(employeeName, id, email, school);
                this.members.push(intern);
            }
        }
        console.log(this.members);
    }
    ).then();*/

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
    
};
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