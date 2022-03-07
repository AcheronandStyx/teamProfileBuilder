const Manager = require('../lib/Manager.js');
const Engineer = require('../lib/Engineer.js');
const Intern = require('../lib/Intern.js');

const generateTeamCards = teamData => {

    for (i = 0; i < teamData.length - 1; i++) {
        let label = null;
        let value = null;
        
    if (teamData[i].getRole() === 'Manager') {
         label = 'Office Number: '
         value =  teamData[i].getOfficeNumber;
    } else if (teamData[i].getRole() === 'Enginer') {
         label = 'GitHub: '
         value =  teamData[i].getGitHub;
    } else {
         label = 'School: '
         value =  teamData[i].school;
    }

        return `
        <div class="card">
        

        <div class="card">
        <div class="card-header">
        <div class="name">
        <h2>${teamData[i].getName()}</h2>
        </div>
        <div class="employee-body">
        <p>Position: ${teamData[i].getRole()}</p>
        <p>Employee ID: ${teamData[i].getId()}</p>
        <p>Email: ${teamData[i].getEmail()}</p>
        <p>${label}<span>${value}</span>/p >
        </div >
        </div >
        </div >
        </div >

    `
    }
}

module.exports = teamData => {

    console.log(teamData);

    for (i = 0; i < teamData.length; i++) {
        console.log(teamData[i].getRole());
        console.log(teamData[i].getName());
        console.log(teamData[i].getId());
        console.log(teamData[i].getEmail());
    };

    return `
    < !DOCTYPE html >
        <html lang="en">

            <head>
                <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                        <meta http-equiv="X-UA-Compatible" content="ie=edge">
                            <title>Your Team Page</title>
                            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
                                <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
                                    <link rel="stylesheet" href="style.css">
                                    </head>

                                    <body>
                                        <header>
                                            <div class="container flex-row justify-space-between align-center py-3">
                                                <h1 class="page-title text-secondary bg-dark py-2 px-3">Your Team Page!</h1>
                                            </div>
                                        </header>
                                        <main class="container my-5">
                                            ${generateTeamCards(teamData)}
                                        </main>
                                        <footer class="container text-center py-3">
                                        </footer>
                                    </body>
                                </html>

                                `
}